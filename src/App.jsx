import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './pages/Auth/PrivateRoute'
import LoginPrivateRoute from './pages/Auth/LoginPrivateRoute'
import SignIn from './pages/SignIn/SignIn'

function App() {
    const location = useLocation()

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
    }, [location.pathname])

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <LoginPrivateRoute>
                        <SignIn />
                    </LoginPrivateRoute>
                }
            />
            <Route
                exact
                path="admin/*"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}

export default App
