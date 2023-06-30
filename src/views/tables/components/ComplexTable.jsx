/* eslint-disable react/prop-types */
import CardMenu from '../../../componentes/card/CardMenu'
import Card from '../../../componentes/card'
import {
    MdAccessTime,
    MdArrowDropUp,
    MdKeyboardArrowDown,
    MdMailOutline,
    MdOutlineModeEditOutline,
    MdOutlinePhone,
} from 'react-icons/md'
import { getTimeDifference } from '../../../utils/date.utils'
import { RxCaretSort } from 'react-icons/rx'
import { BiFilter } from 'react-icons/bi'

const ComplexTable = (props) => {
    const { leads } = props

    const statusColor = (status) => {
        const colors = {
            novo: {
                color: 'text-yellow-600 dark:text-yellow-100',
                background: 'bg-yellow-100 dark:bg-yellow-500',
                border: 'border-yellow-500 dark:border-yellow-100',
            },
            contatado: {
                color: 'text-green-600 dark:text-green-100',
                background: 'bg-green-100 dark:bg-green-500',
                border: 'border-green-500 dark:border-green-100',
            },
            qualificado: {
                color: 'text-blue-600 dark:text-blue-100',
                background: 'bg-blue-100 dark:bg-blue-500',
                border: 'border-blue-500 dark:border-blue-100',
            },
            convertido: {
                color: 'text-purple-600 dark:text-purple-100',
                background: 'bg-purple-100 dark:bg-purple-500',
                border: 'border-purple-500 dark:border-purple-100',
            },
            'não interessado': {
                color: 'text-red-600 dark:text-red-100',
                background: 'bg-red-100 dark:bg-red-500',
                border: 'border-red-500 dark:border-red-100',
            },
            perdido: {
                color: 'text-gray-600 dark:text-gray-100',
                background: 'bg-gray-100 dark:bg-gray-500',
                border: 'border-gray-500 dark:border-gray-100',
            },
            'follow-up': {
                color: 'text-orange-600 dark:text-orange-100',
                background: 'bg-orange-100 dark:bg-orange-500',
                border: 'border-orange-500 dark:border-orange-100',
            },
        }

        const selectedStatus = status.toLowerCase()
        const selectedColor = colors[selectedStatus]

        if (selectedColor) {
            return (
                <span
                    className={`px-3 py-1 border ${selectedColor.color} ${selectedColor.background} ${selectedColor.border} rounded-full`}>
                    {status}
                </span>
            )
        }

        // Estilo padrão se o status não for encontrado
        return <span className="px-3 py-1 text-gray-600 bg-gray-100 border border-gray-500 rounded-full">{status}</span>
    }

    return (
        <Card extra={'w-full h-full p-4 sm:overflow-x-auto'}>
            <div className="relative flex items-center justify-between">
                <div className="text-xl font-bold text-navy-700 dark:text-gray-300">
                    <span className="text-gray-800 dark:text-gray-100">1354 Leads</span>
                    <div className="flex gap-2 items-start">
                        <p className="my-auto text-sm text-gray-600">7 dias</p>
                        <div className="flex my-auto flex-row items-center justify-center">
                            <MdArrowDropUp className="font-medium text-green-500" />
                            <p className="text-sm font-bold text-green-500"> +2.45% </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <CardMenu
                        items={[
                            { icon: <BiFilter />, text: 'Novo' },
                            { icon: <BiFilter />, text: 'Contatado' },
                            { icon: <BiFilter />, text: 'Qualificado' },
                            { icon: <BiFilter />, text: 'Convertido' },
                            { icon: <BiFilter />, text: 'Não Interessado' },
                            { icon: <BiFilter />, text: 'Perdido' },
                            { icon: <BiFilter />, text: 'FollowUp' },
                        ]}
                        icon={
                            <div className="text-sm font-normal flex">
                                <span className="mx-auto px-1">Status</span>
                                <MdKeyboardArrowDown className="my-auto" />
                            </div>
                        }
                    />
                </div>
            </div>

            <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b dark:border-gray-700 dark:text-gray-400 text-gray-800 uppercase text-xs">
                            <th className="pr-2 py-4 font-medium tracking-wide text-left dark:!bg-gray-900 cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <span>ID</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <span>Lead</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <span>Contato</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <span>Status</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <span>Fonte</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <span>Interesse</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                <div className="flex items-center gap-2">
                                    <span>Objetivo</span>
                                    <RxCaretSort className="w-4 h-4 my-auto" />
                                </div>
                            </th>
                            <th className="pr-4 py-4 font-medium tracking-wide text-left dark:!bg-gray-900" />
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead) => (
                            <tr key={lead.id} className="border-b dark:border-gray-700">
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">{lead.id}</td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                                    <div className="flex flex-col space-y-2">
                                        <span className="font-semibold">{lead.name}</span>
                                        <div className="flex items-center gap-2">
                                            <MdAccessTime />
                                            <span className="text-xs">{`${getTimeDifference(
                                                lead.dateTime
                                            )} atrás`}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex items-center gap-2">
                                            <MdMailOutline />
                                            <span>{lead.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MdOutlinePhone />
                                            <span>{lead.phone}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">{statusColor(lead.status)}</td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">{lead.source}</td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">{lead.interest}</td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px]">{lead.conversionGoal}</td>
                                <td className="pt-[14px] pb-[18px] sm:text-[14px] text-2xl">
                                    <MdOutlineModeEditOutline className="hover:bg-gray-500 active:bg-gray-600 m-2 w-8 h-8 rounded-lg p-1 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default ComplexTable

{
    /* <th key={key} className="pr-4 font-medium tracking-wide text-left dark:!bg-gray-900">
    <td key={index} className="pt-[14px] pb-[18px] sm:text-[14px]">
                                        <p className="text-sm font-bold text-gray-700 dark:text-white">{value}</p>
                                    </td> */
}
