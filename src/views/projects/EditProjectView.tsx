import { getProjectById } from "@/api/ProjectAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"

export default function EditProjectView() {
  const params = useParams();
  // console.log(params);

  const projectId = params.projectId!;
  // console.log(projectId);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  });
  console.log(data, isLoading, error, isError);

  return (
    <div>
      Editar
    </div>
  )
};
