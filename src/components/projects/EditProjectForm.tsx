import { Link } from "react-router-dom";
import ProjectForm from "./ProjectForm";
import type { ProjectFormData } from "@/types/index";
import { useForm } from "react-hook-form";

type EditProjectFormProps = {
  data: ProjectFormData
};

export default function EditProjectForm({ data }: EditProjectFormProps) {
  // console.log("EditProjectForm - data:", data);
  // console.log(data.projectName);

  // const initialValues: ProjectFormData = {
  //   projectName: data.projectName,
  //   clientName: data.clientName,
  //   description: data.description,
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projectName: data.projectName,
      clientName: data.clientName,
      description: data.description,
    },
  });

  // const handleForm = async (formData: ProjectFormData) => {
  const handleForm = (formData: ProjectFormData) => {
    console.log("handleForm - formData:", formData);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Editar Proyecto</h1>

        <p className="text-2xl font-light text-gray-500 mt-5">
          Llena el siguiente formulario para editar un proyecto
        </p>

        <nav className="my-5">
          <Link
            className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
            to={"/"}
          >
            Volver a Proyectos
          </Link>
        </nav>

        <form
          className=""
          onSubmit={handleSubmit(handleForm)}
          // Desactiva la validación de HTML
          noValidate
        >
          <ProjectForm register={register} errors={errors} />

          <input
            type="submit"
            value="Guardar Cambios"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 text-white uppercase font-bold cursor-pointer transition-colors"
          />
        </form>
      </div>
    </>
  );
}
