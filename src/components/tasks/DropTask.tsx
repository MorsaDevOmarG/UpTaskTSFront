import { useDroppable } from "@dnd-kit/core";

type DropTaskProps = {
  status: string;
};

export default function DropTask({ status }: DropTaskProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });

  return (
    <div
      className="text-xs font-semibold uppercase border border-dashed border-slate-500 mt-5 place-content-center text-slate-500"
      ref={setNodeRef}
    >
      Soltar tarea aquí
    </div>
  );
}
