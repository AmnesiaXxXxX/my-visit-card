import React, { useState, useEffect } from 'react';
import Header from './Header';
import ArtistContainer from './ArtistContainer';
import ThemeToggleButton from './ThemeToggleButton';
import Footer from './Footer';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  // Переключение темы
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Обработка нажатия клавиш
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 65) {
        // Ваш код при нажатии клавиши 'A'
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <Header />
      <ThemeToggleButton toggleTheme={toggleTheme} darkTheme={darkTheme} />
      <Footer />
    </div>
  );
}

export default App;
