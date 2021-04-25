
import React from 'react'
import { useQuery } from '@apollo/client'
import { Users } from '../models/Users'
import { GET_ALL_USERS } from '../operations/queries/getAllUsers'
import UserList from './UserList';
import { userMutations } from '../operations/mutations'

export default function Main () {
  const usersQueryResult = useQuery(GET_ALL_USERS);
  const users: Users = usersQueryResult.data.users;
  const { onVacationChange } = userMutations;

  return (
    <UserList users={users} actions={{onVacationChange}}/>
  );
};

