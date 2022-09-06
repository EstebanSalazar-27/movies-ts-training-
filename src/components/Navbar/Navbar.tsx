import { Link } from "react-router-dom"

export const Navbar = () => {

  return (
    <nav className='py-1 px-4 h-12 flex  items-center justify-between bg-sky-600'>
      <div>
        <h1 className='font-bold text-lg text-slate-200'>MoviesPedia</h1>
      </div>

      <ul className='flex  gap-2'>
        <Link to={'/'} className='text-slate-100'>Home</Link>
        <Link to={'/watch?category=popular'} className='text-slate-100'>Popular</Link>

      </ul>

    </nav>
  )
}