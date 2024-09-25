import React from 'react';

function ThemeToggleButton({ toggleTheme, darkTheme }) {
  const iconSrc = darkTheme
    ? '/static/icons/icons8-sun-50.png'
    : 'https://img.icons8.com/?size=50&id=XlxzTsQAgQqD&format=png&color=000000';

  return (
    <button id="theme_toggle" className="button_theme_toggle" onClick={toggleTheme}>
      <img width="50" height="50" alt="Toggle Theme Icon" className="img_button" src={iconSrc} />
    </button>
  );
}

export default ThemeToggleButton;
