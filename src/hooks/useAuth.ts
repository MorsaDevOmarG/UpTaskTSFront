import { getUser } from "@/api/AuthAPI";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 1,
    // refetchOnWindowFocus: hace que no se vuelva a ejecutar la consulta al enfocar la ventana
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isError };
};