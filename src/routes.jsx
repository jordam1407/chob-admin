import React from 'react'

// Admin Imports
// import MainDashboard from 'views/admin/default'
// import NFTMarketplace from 'views/admin/marketplace'
// import Profile from 'views/admin/profile'
// import DataTables from 'views/admin/tables'

// // Auth Imports
// import SignIn from 'views/auth/SignIn'

// Icon Imports
import { MdHome, MdBarChart, MdPerson } from 'react-icons/md'
import { FaArrowsDownToPeople } from 'react-icons/fa6'
import Teste from './componentes/Teste'
import Dashboard from './views/default/Dashboard'
import Tables from './views/tables'

const routes = [
    {
        name: 'Dashboard',
        layout: '/admin',
        path: 'default',
        icon: <MdHome className="h-6 w-6" />,
        component: <Dashboard />,
    },
    {
        name: 'Leads',
        layout: '/admin',
        path: 'nft-marketplace',
        icon: <FaArrowsDownToPeople className="h-6 w-6" />,
        component: <Tables />,
        secondary: true,
    },
    {
        name: 'Dados gerados',
        layout: '/admin',
        icon: <MdBarChart className="h-6 w-6" />,
        path: 'data-tables',
        component: <Teste text={'Data Tables'} />,
    },
    {
        name: 'Perfil',
        layout: '/admin',
        path: 'profile',
        icon: <MdPerson className="h-6 w-6" />,
        component: <Teste text={'Profile'} />,
    },
]
export default routes
