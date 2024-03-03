// App.jsx

import React from 'react';
import UserProvider from './UserProvider';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}

export default App;
