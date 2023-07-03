import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table'
/* eslint-disable react/prop-types */
import CardMenu from '../../../componentes/card/CardMenu'
import Card from '../../../componentes/card'
import {
    MdAccessTime,
    MdArrowDropUp,
    MdFirstPage,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdLastPage,
    MdMailOutline,
    MdNavigateBefore,
    MdNavigateNext,
    MdOutlineModeEditOutline,
    MdOutlinePhone,
} from 'react-icons/md'
import { getTimeDifference } from '../../../utils/date.utils'
import { BiFilter } from 'react-icons/bi'
import React from 'react'
import AddUserModal from '../../../componentes/modal/addUserModal'

const columnHelper = createColumnHelper()

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

    return <span className="px-3 py-1 text-gray-600 bg-gray-100 border border-gray-500 rounded-full">{status}</span>
}

const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
        header: 'Lead',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('dateTime', {
        header: 'Criado',
        cell: (info) => (
            <div className="flex items-center gap-2">
                <MdAccessTime />
                <span className="text-xs">{`${getTimeDifference(info.getValue())} atrás`}</span>
            </div>
        ),
    }),
    columnHelper.accessor('email', {
        header: 'Contato',
        cell: (info) => (
            <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                    <MdMailOutline />
                    <span>{info.getValue()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlinePhone />
                    <span>{info.row.original.phone}</span>
                </div>
            </div>
        ),
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => statusColor(info.getValue()),
    }),
    columnHelper.accessor('source', {
        header: 'Fonte',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('interest', {
        header: 'Interesse',
        cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('conversionGoal', {
        header: 'Objetivo',
        cell: (info) => info.getValue(),
    }),
]

export default function ComplexTable({ leads }) {
    const [data] = React.useState(() => [...leads])
    const [sorting, setSorting] = React.useState([])
    const [editRow, setEditRow] = React.useState({})
    const [open, setOpen] = React.useState(false)
    const [openEdit, setOpenEdit] = React.useState(false)

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
    })

    return (
        <>
            {open && <AddUserModal setOpen={setOpen} text={'adicionar'} />}
            {openEdit && <AddUserModal setOpen={setOpenEdit} row={editRow} text={'atualizar'} />}
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
                        <button
                            onClick={() => setOpen(true)}
                            className={
                                'flex items-center hover:cursor-pointer bg-lightPrimary p-2 hover:bg-gray-100 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700 dark:active:bg-orange-500 linear justify-center rounded-lg transition duration-200'
                            }>
                            + Novo Lead
                        </button>
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
                <div className="flex sm:flex-row flex-col w-full mt-8 items-center gap-2 text-xs">
                    <div className="sm:mr-auto sm:mb-0 mb-2">
                        <span className="mr-2">Items por página</span>
                        <select
                            className="border p-1 rounded w-16 border-gray-200"
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value))
                            }}>
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className={`${
                                !table.getCanPreviousPage() ? 'hover:bg-transparent' : 'hover:bg-gray-700'
                            } rounded p-1`}
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}>
                            <MdFirstPage className="w-5 h-5" />
                        </button>
                        <button
                            className={`${
                                !table.getCanPreviousPage() ? 'hover:bg-transparent' : 'hover:bg-gray-700'
                            } rounded p-1`}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}>
                            <MdNavigateBefore className="w-5 h-5" />
                        </button>
                        <span className="flex items-center gap-1">
                            <input
                                min={1}
                                max={table.getPageCount()}
                                type="number"
                                value={table.getState().pagination.pageIndex + 1}
                                onChange={(e) => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    table.setPageIndex(page)
                                }}
                                className="border p-1 rounded w-10"
                            />
                            de {table.getPageCount()}
                        </span>
                        <button
                            className={`${
                                !table.getCanNextPage() ? 'hover:bg-transparent' : 'hover:bg-gray-700'
                            } rounded p-1`}
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}>
                            <MdNavigateNext className="w-5 h-5" />
                        </button>
                        <button
                            className={`${
                                !table.getCanNextPage() ? 'hover:bg-transparent' : 'hover:bg-gray-700'
                            } rounded p-1`}
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}>
                            <MdLastPage className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="h-full overflow-x-scroll xl:overflow-hidden">
                    <table className="sm:w-full w-[1200px]">
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr
                                    key={headerGroup.id}
                                    className="border-b dark:border-gray-700 dark:text-gray-400 text-gray-800 uppercase text-xs">
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            className="pr-2 py-4 font-medium tracking-wide text-left dark:!bg-gray-900">
                                            {header.isPlaceholder ? null : (
                                                <div
                                                    {...{
                                                        className: header.column.getCanSort()
                                                            ? 'cursor-pointer select-none flex min-w-[36px]'
                                                            : '',
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}>
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {{
                                                        asc: <MdKeyboardArrowUp className="my-auto w-4 h-4" />,
                                                        desc: <MdKeyboardArrowDown className="my-auto w-4 h-4" />,
                                                    }[header.column.getIsSorted()] ?? null}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="border-b dark:border-gray-700">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className="pt-[14px] pb-[18px] sm:text-[14px]">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                    <td className="pt-[14px] pb-[18px] sm:text-[14px] text-2xl">
                                        <button
                                            className="hover:bg-gray-500 active:bg-gray-600 rounded-lg p-1 cursor-pointer"
                                            onClick={() => {
                                                setEditRow(row.original)
                                                setOpenEdit(true)
                                            }}>
                                            <MdOutlineModeEditOutline className="w-6 h-6" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="h-4" />
                </div>
            </Card>
        </>
    )
}
