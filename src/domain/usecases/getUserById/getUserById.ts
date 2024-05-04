import { getUserByIdService } from "@/data/remote/services/users/getUserByIdService";
import { UseCase } from "../UseCase.types";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/domain/models/User";
import { Response } from "@/data/remote/services/users/getUserByIdService.types";

interface Props {
  id: string;
}

function mapResponse(response: Response): User {
  return {
    id: response.id,
    login: response.login,
    name: response.name,
    avatarUrl: response.avatar_url,
    bio: response.bio,
  };
}

export default function getUserById({ id }: Props): UseCase<User> {
  const { isPending, isError, data, error, isLoading, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getUserByIdService({ id }),
    enabled: false,
  });

  return {
    fetch: refetch,
    isLoading,
    isPending,
    isError,
    data: data ? mapResponse(data) : undefined,
    error,
  };
}
