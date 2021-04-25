
import { ReactiveVar } from "@apollo/client";
import { Users, User } from "../../../models/Users";

export default function createAddNewUser(usersVar: ReactiveVar<Users>) {
  const createNewUserId = (allUsers: Users) => {
    return allUsers.reduce(
      (maxId: number, user: User) => Math.max(user.userId, maxId),
      -1
    ) + 1;
  }

  const createNewUser = (newUser: User, allUsers: Users) => {
    return {
      userId: createNewUserId(allUsers),
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      workPosition: newUser.workPosition,
      workCategory: newUser.workCategory,
      password: newUser.password,
      onVacation: false
    }
  }

  return (newUser: User) => {
    const allUsers = usersVar();
    usersVar(allUsers.concat([createNewUser(newUser, allUsers)]));
  };
}