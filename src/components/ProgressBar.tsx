// src/components/ProgressBar.tsx
//import React, { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';

import './ProgressBar.css';

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);

        if (scrollTop > lastScrollY) {
            setIsVisible(false); // Hide on downward scroll
        } else {
            setIsVisible(true); // Show on upward scroll
        }
        setLastScrollY(scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`progress-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;