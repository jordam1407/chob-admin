/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
    currentTheme: 'light',
    changeCurrentTheme: () => {},
})

export default function ThemeProvider({ children }) {
    const persistedTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(persistedTheme || 'dark')

    const changeCurrentTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark')
            document.documentElement.style.colorScheme = 'light'
        } else {
            document.documentElement.classList.add('dark')
            document.documentElement.style.colorScheme = 'dark'
        }
    }, [theme])

    return <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeProvider = () => useContext(ThemeContext)
