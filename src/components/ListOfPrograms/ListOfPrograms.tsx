
// ? Components

import { Queries, useQueryParams } from "../../hooks/useQueryParams"
import { NATIVES_JSX_TYPES } from "@/models/JSX_TYPES"
import { Wrapper } from "../../layout/Wrapper"

import { Title } from "../Title/Title"

interface ListOfProgramsProps {
    children: NATIVES_JSX_TYPES["children"]
}


export const ListOfPrograms = ({ children }: ListOfProgramsProps) => {
    const { query } = useQueryParams(Queries["category"])

    return (
        <Wrapper>
            <div>
                <Title
                    stylesTitle={{
                        color: "text-stone-800",
                        font_size: "text-2xl",
                        font_weight: "font-bold"
                    }}
                >
                    {query ? query : "home"}
                </Title>
                {/* !!! Render list of programs */}
                {children}
            </div>
        </Wrapper>

    )
}