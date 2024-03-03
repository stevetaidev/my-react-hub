import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
    // Lấy giá trị user từ UserContext
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Hồ sơ người dùng</h1>
            <p>Tên: {user.name}</p>
            <p>Tuổi: {user.age}</p>
        </div>
    );
}

export default UserProfile;
