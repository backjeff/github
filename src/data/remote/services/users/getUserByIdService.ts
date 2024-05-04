import api from "@data/remote/api";
import { Props, Response } from "./getUserByIdService.types";

async function getUserByIdService({ id }: Props): Promise<Response> {
  return api.get<Response>(`/users/${id}`).then((response) => response.data);
}

export { getUserByIdService };
