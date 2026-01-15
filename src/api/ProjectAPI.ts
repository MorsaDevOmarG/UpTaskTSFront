import api from "@/lib/axios";
import { dashboardProjectSchema, type ProjectFormData } from "@/types/index";
import { isAxiosError } from "axios";

export async function createProject(formData: ProjectFormData) {
  // console.log(data);

  try {
    const { data } = await api.post("/projects", formData);
    // console.log(data);

    return data;
  } catch (error) {
    // console.log(error);

    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export async function getProjects() {
  try {
    const { data } = await api('/projects');
    // console.log(data);

    const response = dashboardProjectSchema.safeParse(data);
    // console.log(response);

    if (response.success) {
      return response.data;
    }

    // return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};
