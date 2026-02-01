import type { NoteFormData } from "@/types/index";
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage";

export default function AddNoteForm() {
  const initialValues : NoteFormData = {
    content: "",
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValues,
  });

  const hanfleAddNote = (formData: NoteFormData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(hanfleAddNote)} className="space-y-3" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="content" className="font-bold">
          Crear Nota
        </label>

        <input
          type="text"
          id="content"
          placeholder="Contenido de la nota"
          className="w-full p-3 border border-gray-300"
          {...register("content", {
            required: "El contenido de la Nota es obligatorio",
          })}
        />

        {errors.content && (
          <ErrorMessage>{errors.content.message}</ErrorMessage>
        )}
      </div>

      <input
        type="submit"
        value="Crear Nota"
        className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-2 text-white font-black cursor-pointer"
      />
    </form>
  );
}
