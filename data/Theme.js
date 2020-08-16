import React from 'react';
export const themes = {
    light: {
      foreground: '#000000',
      background: '#ffffff',
      middleground: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: '#000000',
      middleground: '#222222',
    }
}

export const themeContext = React.createContext(themes.dark);