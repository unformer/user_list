import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users @client { 
      userId
      firstName
      lastName
      email
      workPosition
      workCategory
      password
      onVacation
    }
  }
`