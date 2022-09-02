import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/themeContext';
import "../css/ToggleTheme.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === 'dark' ? (
        <div className='sun-icon-container' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiSun className='sun-icon' /> Light Mode
        </div>
      ) : (
        <div className='moon-icon-container' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <HiMoon className='moon-icon' /> Dark Mode
        </div>
      )}
    </div>
  );
}

export default ThemeToggle