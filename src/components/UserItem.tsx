import React, { Component } from 'react'
import PropTypes from 'prop-types'
import avatar from '../images/Avatar.png'

type Props = any;

export default class UserItem extends Component<Props, Props> {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onVacationChange: PropTypes.func.isRequired
  }

  render() {
    const { user, onVacationChange } = this.props

    return (
      <div className="flex justify-between items-center w-3/4 my-2 px-4 py-5 rounded-sm border border-blue-300">
        <div className="w-1/3 mr-5">
          <img src={avatar} alt={'user_' + user.userId + '_avatar'} />
        </div>        
        <div className="w-2/3">
          <div className="font-mono text-4xl text-gray-400 mb-8">{user.firstName} {user.lastName}</div>
          <div className="font-mono text-2xl text-gray-600">{user.workPosition}</div>
          <div className="font-mono text-2xl text-gray-600">{user.workCategory}</div>
          <div className="flex items-center justify-start mt-8">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input id="toggle" type="checkbox" className="sr-only" checked={user.onVacation} onChange={() => {onVacationChange(user.userId)}}/>
                <div className="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-5 h-5 bg-gray-500 rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
              <span className="font-mono text-xl text-gray-500 pl-4">On vacation</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}
