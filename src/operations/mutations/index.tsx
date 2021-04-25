
import createOnVacationChange from "./onVacationChange/onVacationChange";
import createAddNewUser from "./addUser/addUser";


import { usersVar } from "../../cache";

export const userMutations = {  
  onVacationChange: createOnVacationChange(usersVar),
  addNewUser: createAddNewUser(usersVar)
}
