import {Role, UUID} from "../users/user";

export type SessionUser = {
  userId: UUID,
  role: Role,
}
