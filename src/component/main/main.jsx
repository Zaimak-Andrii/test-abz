import React from 'react';
import Info from './info/info';
import RegistrationForm from './registration/registrationForm';
import UsersList from './users/usersList';

const Main = () => {
  return (
    <main>
      <Info />
      <UsersList />
      <RegistrationForm />
    </main>
  );
};

export default Main;
