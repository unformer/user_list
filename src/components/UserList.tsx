import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import { User } from '../models/Users'

const UserList = ({ users, actions }: any) => (
  <div className="w-1/2 flex items-center flex-col py-20">
    {users.map((user: User) =>
      <UserItem key={user.userId} user={user} {...actions} />
    )}
  </div>
)

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    workPosition: PropTypes.string.isRequired,
    workCategory: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onVacation: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default UserList
