import api from '@/lib/axios';
import type { ProjectFormData } from '@/types/index';


export async function createProject(formData: ProjectFormData) {
  // console.log(data);

  try {
    const { data } = await api.post("/projects", formData);
    console.log(data);
    
  } catch (error) {
    console.log(error);
  }
};