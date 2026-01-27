import api from "@/lib/axios";
import {
  dashboardProjectSchema,
  type Project,
  type ProjectFormData,
} from "@/types/index";
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
}

export async function getProjects() {
  // const token = localStorage.getItem("AUTH_TOKEN");
  // console.log("Token en ProjectAPI:", token);
  
  try {
    // const { data } = await api("/projects", {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    const { data } = await api("/projects");
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
}

export async function getProjectById(id: Project['_id']) {
  try {
    const { data } = await api(`/projects/${id}`);
    // console.log("getProjectById - data:", data);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

type ProjectAPIType = {
  formData: ProjectFormData,
  projectId: Project['_id']
};

export async function updateProject({formData, projectId} : ProjectAPIType) {
  try {
    const { data } = await api.put<string>(`/projects/${projectId}`, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function deleteProject(id: Project["_id"]) {
  try {
    const url = `/projects/${id}`;

    const { data } = await api.delete<string>(url);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
