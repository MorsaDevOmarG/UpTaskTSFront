import { useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  console.log("EditProjectView - params: ", params);
  const projectId = params.projectId!;
  console.log("projectId:", projectId);

  return <div>EditProjectView</div>;
};
