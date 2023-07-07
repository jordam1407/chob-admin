import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export default function LoginPrivateRoute({ children }) {
    const isAuthenticated = JSON.parse(localStorage.getItem('userData')) || true
    if (isAuthenticated) return <Navigate to="/admin" />
    return children
}
LoginPrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
