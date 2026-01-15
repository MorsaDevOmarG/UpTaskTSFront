import { getProjectById } from "@/api/ProjectAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  // console.log("EditProjectView - params: ", params);

  const projectId = params.projectId!;
  // console.log("projectId:", projectId);

  const { data, isLoading } = useQuery({
    queryKey: ['editProject', projectId],
    queryFn: () => getProjectById(projectId),
    retry: false
  });
  console.log("EditProjectView - useQuery:", data);

  return <div>EditProjectView</div>;
};
