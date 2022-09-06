import { NATIVES_JSX_TYPES } from '@/models/JSX_TYPES'
import React from 'react'


export const Wrapper = ({ children }: NATIVES_JSX_TYPES) => {
    return (
        <div className='w-4/5 mx-auto'>
            {children}
        </div>
    )
}
