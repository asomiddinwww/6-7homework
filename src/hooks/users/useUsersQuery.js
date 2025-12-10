import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../../api/users.api";

export const useCardsQuery = () => {
  return useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });
};
