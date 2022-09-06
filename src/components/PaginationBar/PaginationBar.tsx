import { CustomizableBtn } from "../CustomizableBtn/CustomizableBtn"
import { Title } from "../Title/Title"

type PaginationProps = {
    fnActions: {
        prevPage?: () => void,
        nextPage?: () => void,
    },
    page: number | null,
    totalPage: number | null,

}
export const PaginationBar = ({ fnActions, page, totalPage }: PaginationProps) => {
    return (
        <div className='flex gap-2'>
            <Title stylesTitle={{ color: "text-stone-800", font_size: 'text-md', font_weight: "font-semibold" }} >
                {`page ${page} of ${totalPage}`}
            </Title>
            <CustomizableBtn
                fnActions={{ prevPage: fnActions?.prevPage }}
                stylesBtn={{
                    bgColor: "bg-sky-600",
                    color: "text-slate-200",
                    fontSize: "text-md",
                    fontWeight: "font-bold",
                    height: "h-8",
                    width: "w-24",
                    padding: "px-2",
                }}
            >
                Previosly
            </CustomizableBtn>
            <CustomizableBtn
                fnActions={{ nextPage: fnActions?.nextPage }}
                stylesBtn={{
                    bgColor: "bg-sky-600",
                    color: "text-slate-200",
                    fontSize: "text-md",
                    fontWeight: "font-bold",
                    height: "h-8",
                    width: "w-26",
                    padding: "px-2",
                }}
            >
                Next
            </CustomizableBtn>
        </div>
    )
}