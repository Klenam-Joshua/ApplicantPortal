import { api } from "../api/api";
import { useQuery } from "@tanstack/react-query";

export function useFetchAll(url, params = {}, queryKey = [], isEnabled) {
  const fetchData = async () => {
    const response = await api.get(url, {
      params,
    });

    return response;
  };

  const query = useQuery({
    enabled: isEnabled,
    queryKey: [url, ...queryKey],
    queryFn: fetchData,
  });

  return { ...query };
}
