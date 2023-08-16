import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('로그인 정보:', { userID, password });
        handleLogin();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>로그인</h2>
            <div>
            <label>아이디:</label>
            <input
                type="text"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
            />
            </div>
            <div>
            <label>비밀번호:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit">로그인</button>
        </form>
    );
};

export default LoginPage;
