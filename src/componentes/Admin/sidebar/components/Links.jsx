import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DashIcon from '../../../icons/DashIcon'
// chakra imports

export function SidebarLinks(props) {
    // Chakra color mode
    let location = useLocation()

    const { routes } = props

    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return location.pathname.includes(routeName)
    }

    const createLinks = (routes) => {
        return routes.map((route, index) => {
            if (route.layout === '/admin' || route.layout === '/auth') {
                return (
                    <Link key={index} to={route.layout + '/' + route.path}>
                        <div className="relative mb-3 flex hover:cursor-pointer">
                            <li className="my-[3px] flex cursor-pointer items-center px-8" key={index}>
                                <span
                                    className={`${
                                        activeRoute(route.path) === true
                                            ? 'font-bold text-orange-600'
                                            : 'font-medium text-gray-600'
                                    }`}>
                                    {route.icon ? route.icon : <DashIcon />}{' '}
                                </span>
                                <p
                                    className={`leading-1 ml-4 flex ${
                                        activeRoute(route.path) === true
                                            ? 'font-bold text-gray-800 dark:text-white'
                                            : 'font-medium text-gray-600 dark:text-gray-500'
                                    }`}>
                                    {route.name}
                                </p>
                            </li>
                            {activeRoute(route.path) ? (
                                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-orange-500 dark:bg-orange-400" />
                            ) : null}
                        </div>
                    </Link>
                )
            }
        })
    }
    // orange
    return createLinks(routes)
}

export default SidebarLinks
