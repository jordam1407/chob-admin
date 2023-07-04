/* eslint-disable react/prop-types */

import { useState } from 'react'

function AddUserModal({ setOpen, row, text }) {
    const [leadData, setLeadData] = useState({
        name: row?.name || '',
        email: row?.email || '',
        phone: row?.phone || '',
        source: row?.source || '',
        dateTime: '',
        status: row?.status || '',
        interest: row?.interest || '',
        conversionGoal: row?.conversionGoal || '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setLeadData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false)
    }
    return (
        <>
            <div className="flex items-center justify-center fixed inset-0 z-50 outline-none focus:outline-none overflow-auto text-xs">
                <div className="relative w-auto rounded-xl my-6 min-w-[50%] dark:!bg-gray-900">
                    {/*content*/}
                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white dark:!bg-gray-900 outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 dark:border-gray-700 rounded-t">
                            <h3 className="text-3xl font-semibold">Adicionar Novo Lead</h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-gray-600  dark:text-gray-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none close-button"
                                onClick={() => setOpen(false)}>
                                x
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 w-full max-w-[80%] mx-auto flex flex-col">
                            {' '}
                            <div className="mb-4 w-full">
                                <label className="block mb-2 text-lg font-bold" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={leadData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex justify-between gap-x-4">
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-bold" htmlFor="phone">
                                        Telefone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={leadData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-bold" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={leadData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-4">
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-bold" htmlFor="status">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={leadData.status}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">Selecione</option>
                                        <option value="Novo">Novo</option>
                                        <option value="Contatado">Contatado</option>
                                        <option value="Qualificado">Qualificado</option>
                                        <option value="Convertido">Convertido</option>
                                        <option value="Não Interessado">Não Interessado</option>
                                        <option value="Perdido">Perdido</option>
                                        <option value="Follow-up">Follow-up</option>
                                    </select>
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-bold" htmlFor="source">
                                        Fonte
                                    </label>
                                    <select
                                        id="source"
                                        name="source"
                                        value={leadData.source}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">Selecione</option>
                                        <option value="Website">Website</option>
                                        <option value="Indicação">Indicação</option>
                                        <option value="Redes Sociais">Redes Sociais</option>
                                        <option value="Anúncios">Anúncios</option>
                                        <option value="Evento">Evento</option>
                                        <option value="Email Marketing">Email Marketing</option>
                                        <option value="Chatbot">Chatbot</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between gap-x-4">
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-bold" htmlFor="interest">
                                        Interesse
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={leadData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">Selecione</option>
                                        <option value="Consulta de Produto">Consulta de Produto</option>
                                        <option value="Solicitação de Demonstração">Solicitação de Demonstração</option>
                                        <option value="Consulta de Preço">Consulta de Preço</option>
                                        <option value="Suporte ao Cliente">Suporte ao Cliente</option>
                                        <option value="Informações de Serviço">Informações de Serviço</option>
                                        <option value="Registro ou Inscrição">Registro ou Inscrição</option>
                                        <option value="Compra">Compra</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block mb-2 text-lg font-bold" htmlFor="conversionGoal">
                                        Objetivo de Conversão
                                    </label>
                                    <select
                                        id="conversionGoal"
                                        name="conversionGoal"
                                        value={leadData.conversionGoal}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-blue-500">
                                        <option value="">Selecione</option>
                                        <option value="Compra">Compra</option>
                                        <option value="Registro">Registro</option>
                                        <option value="Inscrição">Inscrição</option>
                                        <option value="Agendamento">Agendamento</option>
                                        <option value="Download">Download</option>
                                        <option value="Solicitação de Orçamento">Solicitação de Orçamento</option>
                                        <option value="Assinatura">Assinatura</option>
                                        <option value="Teste Gratuito">Teste Gratuito</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 dark:border-gray-700 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpen(false)}>
                                Cancelar
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleSubmit}>
                                {text}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-white"></div>
        </>
    )
}

export default AddUserModal
