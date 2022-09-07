
import { usePaginator } from "../../hooks/usePaginator"
import { useState } from "react"
import { Title } from "../Title/Title"

type PaginationProps = {
    page: number | null,
    totalPage: number | null,



}
export const PaginationBar = ({ page, totalPage }: PaginationProps) => {
    const { currentPage, numberOfPages, lastIndexOf, setCurrentPage, setLastIndex } = usePaginator(page, totalPage)
  

    return (
        <div className='flex flex-col gap-2 '>
            <Title stylesTitle={{ color: "text-stone-800", font_size: 'text-md', font_weight: "font-semibold" }} >
                {`page ${page} of ${totalPage}`}
            </Title>
            <div className='flex max-w-3xl overflow-hidden gap-1 overflow-x-auto'>
                {numberOfPages && numberOfPages.map((number) => {
                    return <button onClick={() => setCurrentPage(number)} className={`px-2 font-semibold border-2 ${currentPage === number ? "bg-orange-400 rounded-sm text-slate-100" : ""}`} key={number}>{number} </button>
                })}
            </div>

        </div>
    )
}