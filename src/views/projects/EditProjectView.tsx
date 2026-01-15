import { getProjectById } from "@/api/ProjectAPI";
import EditProjectForm from "@/components/projects/EditProjectForm";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  // console.log("EditProjectView - params: ", params);

  const projectId = params.projectId!;
  // console.log("projectId:", projectId);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  });
  // console.log("EditProjectView - useQuery:", data);

  if (isLoading) {
    return 'Cargando...';
  }

  if (isError) {
    return <Navigate to='/404' />
  }

  if (data) {
    return <EditProjectForm />
  }
};
