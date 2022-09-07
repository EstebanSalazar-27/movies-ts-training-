import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const navigateTo = useNavigate()
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigateTo(`/search?query=${inputValue}`)
    }
    return (
        <form className='h-12 shadow-lg flex mt-4 mb-4' onSubmit={handleSubmit} >
            <input className='w-full p-2 h-full' type="text" onChange={handleChange} />
            <input className='w-20 text-slate-100 font-bold capitalize bg-sky-500 h-full' type='submit' value='search' />
        </form>
    )
}
