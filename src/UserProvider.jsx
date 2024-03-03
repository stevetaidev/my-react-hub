import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
    // Sử dụng hook useState của React để khởi tạo state user
    const [user, setUser] = useState({ name: 'John Doe', age: 30 });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
