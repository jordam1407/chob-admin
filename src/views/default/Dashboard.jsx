import React from 'react'
import Widget from '../../componentes/widget/Widget'
import { MdChat, MdPersonAdd, MdTrendingUp, MdStar, MdAccessTime, MdOutlineAdsClick } from 'react-icons/md'
import DailyChats from './components/DailyChats'
import DailyTraffic from './components/DailyAcess'

const conversationData = [
    {
        icon: <MdChat className="h-7 w-7" />,
        title: 'Aberturas de Chat',
        subtitle: '378',
    },
    {
        icon: <MdPersonAdd className="h-7 w-7" />,
        title: 'Leads Gerados',
        subtitle: '245',
    },
    {
        icon: <MdTrendingUp className="h-7 w-7" />,
        title: 'Taxa de Conversão',
        subtitle: '23%',
    },
    {
        icon: <MdOutlineAdsClick className="h-7 w-7" />,
        title: 'Maior interação',
        subtitle: 'Limpeza de Pele',
    },
    {
        icon: <MdStar className="h-7 w-7" />,
        title: 'Avaliação dos Usuários',
        subtitle: '4.5/5',
    },
    {
        icon: <MdAccessTime className="h-7 w-7" />,
        title: 'Tempo Médio de Interação',
        subtitle: '2 min 30 seg',
    },
]

function Dashboard() {
    return (
        <>
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                {conversationData.map((conversation) => (
                    <Widget
                        key={conversation.title}
                        icon={conversation.icon}
                        title={conversation.title}
                        subtitle={conversation.subtitle}
                    />
                ))}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <DailyChats />
                <DailyTraffic />
            </div>
        </>
    )
}

export default Dashboard
