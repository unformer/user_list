
import { ReactiveVar } from "@apollo/client";
import { Users } from "../../../models/Users";

export default function createOnVacationChange (
  usersVar: ReactiveVar<Users>
) {
  return (id: number) => {
    const allUsers = usersVar();   
    usersVar(allUsers.map((u) => u.userId === id ? { ...u, onVacation: !u.onVacation } : u));
  }
}
