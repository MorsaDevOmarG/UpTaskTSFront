import { useDroppable } from "@dnd-kit/core";

type DropTaskProps = {
  status: string;
};

export default function DropTask({ status }: DropTaskProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: status,
  });
  // console.log(isOver);

  const style = {
    opacity: isOver ? 0.4 : undefined,
  };

  return (
    <div
      className="text-xs font-semibold uppercase border border-dashed border-slate-500 mt-5 place-content-center text-slate-500"
      ref={setNodeRef}
      style={style}
    >
      Soltar tarea aquí
    </div>
  );
}
