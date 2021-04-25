import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { User } from '../models/Users'

type Props = any;

const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  email: '',
  confirmEmail: '',
  workPosition: '',
  workCategory: '',
  password: '',
  confirmPassword: '',
  onVacation: false,
  emailMatch: true,
  passMatch: true
}

export default class SignUpForm extends Component<Props, Props> {

  static propTypes = {
    addNewUser: PropTypes.func.isRequired
  }

  state = {
    ...initialState
  }

  clearState() {
    this.setState({ ...initialState })
  }

  handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  confirm() {
    const { email, confirmEmail, password, confirmPassword } = this.state
    const isEmailMatch = email === confirmEmail && email.length > 5;
    const isPassMatch = password === confirmPassword;
    this.setState({
      emailMatch: isEmailMatch,
      passMatch: isPassMatch
    });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    const newUser: User = {
      userId: 0,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      workPosition: this.state.workPosition,
      workCategory: this.state.workCategory,
      password: this.state.password,
      onVacation: false
    }
    this.props.addNewUser(newUser);
    this.clearState();
  }

  render() {
    return (
      <div className="min-h-screen flex items-center justify-center w-1/2 bg-gray-50 py-12 px-6">
        <div className="w-3/4 space-y-8">
          <div>
            <h2 className="text-left text-3xl font-extrabold text-gray-900">Sign up</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(event => this.handleSubmit(event))} >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid grid-cols-2 gap-4 justify-between rounded-md shadow-sm -space-y-px">
              <div className="col-span-1">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="col-span-1">
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="workCategory" className="sr-only">
                  Work Category
                      </label>
                <select
                  id="workCategory"
                  name="workCategory"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={this.state.workCategory}
                  onChange={this.handleChange.bind(this)}
                >
                  <option>Choose work category</option>
                  <option>Worldwide Marketing</option>
                  <option>Software Engineering</option>
                  <option>UI/UX</option>
                </select>
              </div>
              <div className="col-span-2">
                <label htmlFor="workPosition" className="sr-only">
                  Work Position
                </label>
                <input
                  id="workPosition"
                  name="workPosition"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Work Position"
                  value={this.state.workPosition}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="confirmEmail" className="sr-only">
                  Confirm Email address
                </label>
                <input
                  id="confirmEmail"
                  name="confirmEmail"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Email address"
                  value={this.state.confirmEmail}
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.confirm.bind(this)}
                />
                {!this.state.emailMatch && <span>email don't match</span>}
              </div>
              <div className="col-span-2">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange.bind(this)}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.confirm.bind(this)}
                />
                {!this.state.passMatch && this.state.confirmPassword.length > 1 && <span>passwords don't match</span>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}