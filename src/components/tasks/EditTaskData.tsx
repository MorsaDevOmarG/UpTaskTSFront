import { getTaskById } from "@/api/TaskAPI";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation, useParams } from "react-router-dom"
import EditTaskModal from "./EditTaskModal";

export default function EditTaskData() {
  // const location = useLocation();
  // console.log(location.search);

  const params = useParams();
  // console.log(params);

  const projectId = params.projectId!;

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);

  const taskId = queryParams.get('editTask')!;
  // console.log(taskId);

  const { data, isError } = useQuery({
    queryKey: ['task', taskId],
    queryFn: () => getTaskById({
      projectId,
      taskId
    }),
    // Doble !!, lo convierte a BOOLEAN
    enabled: !!taskId
  });
  // console.log(data);

  if (isError) return <Navigate to={'/404'}/>

  if (data) return <EditTaskModal data={data} taskId={taskId} />
}
