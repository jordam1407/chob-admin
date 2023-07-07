import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    const isAuthenticated = JSON.parse(localStorage.getItem('userData')) || true
    if (!isAuthenticated) return <Navigate to="/" />
    return children
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
