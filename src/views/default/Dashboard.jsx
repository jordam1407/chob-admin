import React from 'react'
import Widget from '../../componentes/widget/Widget'
import {
    MdChat,
    MdPersonAdd,
    MdTrendingUp,
    MdStar,
    MdAccessTime,
    MdOutlineAdsClick,
    MdTrendingDown,
    MdPlaylistAdd,
    MdRemoveCircle,
} from 'react-icons/md'
import DailyChats from './components/DailyChats'
import DailyTraffic from './components/DailyAcess'
import HourlyAcess from './components/HourlyAcess'

const conversationData = [
    {
        icon: <MdChat className="h-7 w-7" />,
        title: 'Aberturas de Chat',
        percentage: '2,34',
        subtitle: '378',
    },
    {
        icon: <MdPersonAdd className="h-7 w-7" />,
        title: 'Total de Leads pelo Chat',
        percentage: '2,34',
        subtitle: '245',
    },
    {
        icon: <MdTrendingUp className="h-7 w-7" />,
        title: 'Taxa de Conversão',
        percentage: '2,34',
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
        percentage: '2,34',
        subtitle: '2 min 30 seg',
    },
]
const dailyConversationData = [
    {
        icon: <MdTrendingUp className="h-7 w-7" />,
        title: 'Maior Taxa de Conversão',
        percentage: '2,34',
        subtitle: '14:00',
    },
    {
        icon: <MdTrendingDown className="h-7 w-7" />,
        title: 'Menor Taxa de Conversão',
        percentage: '2,34',
        subtitle: '09:00',
    },
    {
        icon: <MdPlaylistAdd className="h-7 w-7" />,
        title: 'Leads Gerados no Dia',
        percentage: '2,34',
        subtitle: '520 leads',
    },
    {
        icon: <MdRemoveCircle className="h-7 w-7" />,
        title: 'Taxa de Abandono do Dia',
        percentage: '2,34',
        subtitle: '12%',
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
                        percentage={conversation.percentage}
                    />
                ))}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <DailyChats />
                <DailyTraffic />
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="gap-5 grid grid-cols-1 grid-rows-4">
                    {dailyConversationData.map((row) => (
                        <Widget
                            key={row.title}
                            icon={row.icon}
                            title={row.title}
                            subtitle={row.subtitle}
                            percentage={row.percentage}
                        />
                    ))}
                </div>
                <div className="col-span-3">
                    <HourlyAcess />
                </div>
            </div>
        </>
    )
}

export default Dashboard
