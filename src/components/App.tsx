import React from 'react';
import '../App.css';
import SignUpForm from './SignUpForm';
import UserListContainer from './UserListContainer'
import { userMutations } from '../operations/mutations'

function App() {
  const { addNewUser } = userMutations;
  return (
    <div className="container mx-auto flex justify-between items-center">
      <SignUpForm addNewUser={addNewUser} />
      <UserListContainer />
    </div>
  );
}

export default App;
