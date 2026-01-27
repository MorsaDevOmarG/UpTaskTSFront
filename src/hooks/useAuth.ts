import { getUser } from "@/api/AuthAPI";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
    // refetchOnWindowFocus: hace que no se vuelva a ejecutar la consulta al enfocar la ventana
    refetchOnWindowFocus: false,
  });

  return { user, isLoading, isError, refetch };
};