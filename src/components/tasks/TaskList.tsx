import type { Task, TaskStatus } from "@/types/index";
import TaskCard from "./TaskCard";
import { statusTranslation } from "@/locales/es";
import DropTask from "./DropTask";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "@/api/TaskAPI";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

type TaskListProps = {
  tasks: Task[];
  cantEdit: boolean;
};

type GroupedTasks = {
  [key: string]: Task[];
};

const initialStatusGroups: GroupedTasks = {
  pending: [],
  onHold: [],
  inProgress: [],
  underReviews: [],
  completed: [],
};

// Se cambio el contenido al archivo: locales/es.ts
// const statusTranslation: { [key: string]: string } = {
//   pending: "Pendiente",
//   onHold: "En Espera",
//   inProgress: "En Progreso",
//   underReviews: "En Revisión",
//   completed: "Completado",
// };

const statusStyles: { [key: string]: string } = {
  pending: "border-t-slate-500",
  onHold: "border-t-red-500",
  inProgress: "border-t-blue-500",
  underReviews: "border-t-amber-500",
  completed: "border-t-emerald-500",
};

export default function TaskList({ tasks, cantEdit }: TaskListProps) {
  // console.log(tasks);

  const params = useParams();
  const projectId = params.projectId!;
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateStatus,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);

      queryClient.invalidateQueries({
        queryKey: ["project", projectId],
      });

      queryClient.invalidateQueries({
        // queryKey: ["task", taskId],
      });
    },
  });

  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task];
    return { ...acc, [task.status]: currentGroup };
  }, initialStatusGroups);
  // console.log(groupedTasks);

  const handleDragEnd = (e: DragEndEvent) => {
    console.log("Soltaste...", e);

    const { over, active } = e;

    if (over && over.id) {
      // console.log("Valido", active.id);
      // console.log(over.id);

      const taskId = active.id.toString();
      const status = over.id as TaskStatus;

      mutate({
        projectId,
        taskId,
        status,
      });

      queryClient.setQueryData(["project", projectId], (prevData) => {
        // console.log(prevData);

        const updatedTaks = prevData.tasks.map((task: Task) => {
          if (task._id === taskId) {
            return {
              ...task,
              status,
            };
          }

          return task;
        });

        return {
          ...prevData,
          tasks: updatedTaks,
        };
      });
    }
  };

  return (
    <>
      <h2 className="text-5xl font-black my-10">Tareas</h2>

      <div className="flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32">
        <DndContext onDragEnd={handleDragEnd}>
          {Object.entries(groupedTasks).map(([status, tasks]) => (
            <div key={status} className="min-w-[300px] 2xl:min-w-0 2xl:w-1/5">
              {/* <h3>{status}</h3> */}
              <h3
                className={`capitalize text-xl font-light border border-slate-300 bg-white p-3 border-t-8 ${statusStyles[status]}`}
              >
                {statusTranslation[status]}
              </h3>

              <DropTask status={status} />

              <ul className="mt-5 space-y-5">
                {tasks.length === 0 ? (
                  <li className="text-gray-500 text-center pt-3">
                    No Hay tareas
                  </li>
                ) : (
                  tasks.map((task) => (
                    <TaskCard key={task._id} task={task} cantEdit={cantEdit} />
                  ))
                )}
              </ul>
            </div>
          ))}
        </DndContext>
      </div>
    </>
  );
}
