import { Link } from 'react-router-dom';
// Apps.js
import React, { useState } from 'react';

const Apps = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected: ${option}`);
        setIsOpen(false);
    };

    const dropdownStyles = {
        position: 'relative',
        display: 'inline-block',
    };

    const buttonStyles = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 16px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
    };

    const dropdownContentStyles = {
        display: isOpen ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1,
    };

    const linkStyles = {
        color: 'black',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
    };

    const linkHoverStyles = {
        backgroundColor: '#f1f1f1',
    };

    return (
        <div style={dropdownStyles}>
            <button style={buttonStyles} onClick={toggleDropdown}>
                Apps
            </button>
            <div style={dropdownContentStyles}>
                {[<Link to="/Announcement">Announcement</Link>,<Link to="/Resources">Resources</Link>,<Link to="/Alumni">Alumni</Link>,
                <Link to="/Groups">Groups</Link>,<Link to="/Job">Job</Link>,<Link to="/Discussion">Discussion</Link>].map((option) => (
                    <a
                        key={option}
                        href="#"
                        style={linkStyles}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = linkHoverStyles.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Apps;
