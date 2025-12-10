import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "../../api/users.api";
import { queryClient } from "../../services/queryClient";

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};
