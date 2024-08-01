import React from 'react';
import './Header.css';

import { useNavigate } from 'react-router-dom';

// const Header = () => {
    const Header = ({ user }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        // navigate('/error');
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-and-text">
                    <img src="/imgs/logo.png" alt="Logo" className="logo" />
                </div>
                <nav className="header-links">
                    <span className="header-link">워케이션이란?</span>
                    <span className="header-link">워케이션 비교</span>
                    <span className="header-link">커뮤니티</span>
                    {user ? (
                        <span className="header-link">{user.name}님 환영합니다!</span>
                    ) : (
                        <span className="header-link" onClick={handleClick}>로그인　　　</span>
                    )}
                    {/* <span className="header-link" onClick={handleClick}>로그인　　　</span> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
