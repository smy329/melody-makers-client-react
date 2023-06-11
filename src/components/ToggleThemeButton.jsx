import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const ToggleThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="bg-gray-200 text-gray-900 px-4 py-2 rounded">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ToggleThemeButton;
