import React, { useState } from 'react'
import { Title } from '../Title/Title'
import { Link } from "react-router-dom"
import "./programCard.scss"

export type ProgramCardProps = {
  loading: boolean,
  title?: string,
  posterPath: string,
  mediaType: string,
  overview?: string,
  id: number,
  popularity: number,

}

export const ProgramCard = ({ id, mediaType, overview, popularity, posterPath, title, loading }: ProgramCardProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)


  const modalVisibleStyles = showModal ? "modalVisible" : 'modalHidden'
  console.log(showModal)
  console.log(modalVisibleStyles)
  function handleVisibilityModal() {
    setShowModal(true)
  }
  function handleMouseOut() {
    setShowModal(false)
  }
  const skeleton = loading || !posterPath ? "animate-pulse" : ""
  function getPosterPath(posterPath: string): string {
    const posterBaseUrl = `https://image.tmdb.org/t/p/w200/${posterPath}`

    return posterBaseUrl
  }
  return (
    <Link
      to={``}
      onMouseOver={handleVisibilityModal}
      onMouseOut={handleMouseOut}
      className={` mb-2 flex flex-col min-w-[230px] basis-full before:scale-0 before:absolute before:w-full before:h-full before:bg-black/20 transition-all ${showModal && "before:scale-100"}  object-cover shrink-0 sm:basis-1/4 md:basis-1/5  shadow-md bg-slate-50 relative`}>
      <img
        className=
        {`h-[320px] /*  */ w-full min-w-[230px] ${skeleton}  bg-slate-800`} src={getPosterPath(posterPath)} alt={title}
      />
      <div className=' h-8 px-1 pt-1 overflow-hidden'>

        <Title
          stylesTitle={{
            color: 'text-stone-800',
            font_size: "text-md",
            font_weight: "font-semibold",
          }}>
          {title ? title : "Undefined"}
        </Title>
      </div>

      <div className={`
      absolute 
      -right-56
      w-60
      min-h-[80px]
      border-2
      border-sky-500
     bg-slate-700
      z-50
       py-2 
     rounded-md
     shadow-lg
     transition-all 
     origin-top-left
     px-3
     grid 
     gap-1
      ${modalVisibleStyles}
           `}>
        <Title
          stylesTitle={{
            color: 'text-slate-100',
            font_size: "text-lg",
            font_weight: "font-semibold",
          }}>
          {title ? title : "Undefined"}

        </Title>

        <div>
          <div className={` ${mediaType === "tv" ? " bg-sky-600" : "bg-orange-500"}  text-center w-14 py-[2px] rounded-full`}>
            <Title stylesTitle={{ color: "text-slate-100", font_size: "text-sm", font_weight: "font-semibold capitalize" }}>
              {mediaType}
            </Title>
          </div>
        </div>

        <p className='text-[12px] text-slate-300'>
          {overview}
        </p>
      </div>

    </Link>
  )

}
