import { useLocation } from "react-router-dom"

export default function EditTaskData() {
  const location = useLocation();
  // console.log(location.search);

  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);

  const editTask = queryParams.get('editTask');
  console.log(editTask);

  return (
    <div>
      TaskData    
    </div>
  )
}
