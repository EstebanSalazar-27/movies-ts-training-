import { NATIVES_JSX_TYPES } from "@/models/JSX_TYPES"

export const FlexContainer = ({ children }: NATIVES_JSX_TYPES) => {
    return (
        <div className='flex flex-wrap items-center justify-start gap-2 py-2'>
            {children}
        </div>
    )
}