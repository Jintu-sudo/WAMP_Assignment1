import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <header>
            <h1>My Personal Webpage</h1>
            <div className="switch">
                <label>
                    <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
                    <span className="slider"></span>
                </label>
                <div style={{ marginLeft: '10px', color: '#fff' }}> {/* Set text color to white */}
                    Change Theme
                </div>
            </div>
        </header>
    );
};

export default Header;
