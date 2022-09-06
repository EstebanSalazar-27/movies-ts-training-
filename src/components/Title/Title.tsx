import { NATIVES_JSX_TYPES } from '@/models/JSX_TYPES'
import React from 'react'

type TitleProps = {
    children: NATIVES_JSX_TYPES["children"] | string | number | null,
    stylesTitle: {
        font_size: number | string,
        font_weight: string,
        color: string,

    }

}

export const Title = ({ children, stylesTitle }: TitleProps) => {
    return (

        <h2 className={` ${stylesTitle.font_size} ${stylesTitle.font_weight} ${stylesTitle.color} `}>
            {children}
        </h2>
    )
}
