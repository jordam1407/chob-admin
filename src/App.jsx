import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './pages/Auth/PrivateRoute'
import LoginPrivateRoute from './pages/Auth/LoginPrivateRoute'
import SignIn from './pages/SignIn/SignIn'

function App() {
    return (
        <Router>
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
        </Router>
    )
}

export default App
