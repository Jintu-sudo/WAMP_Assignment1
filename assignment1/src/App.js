import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Family from './components/Family';
import Education from './components/Education';
import Contributions from './components/Contributions';
import Footer from './components/Footer';
import './styles.css'; // Import your CSS file

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <About />
            <Hobbies />
            <Family />
            <Education />
            <Contributions />
            <Footer />
        </div>
    );
}

export default App;
