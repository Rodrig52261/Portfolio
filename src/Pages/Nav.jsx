import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Nav = () =>  {

    const [Nav, setNav] = useState(false)

    const links = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "skills",
      },
      {
        id: 3,
        link: "projetos",
      },
];

  return (
    <div className='flex items-center justify-around bg-teal-600 w-full fixed z-50 shadow-black shadow h-20 '>
      <div>
        <h1 className='text-white text-3xl capitalize'>portifólio</h1>
      </div>
      <ul className='hidden md:flex gap-4'>
      {links.map(({ id,link}) =>(
            <li 
            key={id}
            className='text-white text-xl capitalize cursor-pointer hover:scale-105 duration-200'
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
      </ul>

      <div onClick={() => setNav(!Nav)} 
      className="cursor-pointer pr-4 z-10 ease-in duration-200 md:hidden"
      >
        {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {Nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 right-0 bg-teal-600 w-96 h-96'
        >
          {links.map(({ id, link }) => (
            <li key={id} className='text-white text-center text-xl capitalize cursor-pointer hover:scale-100 duration-200 px-4 py-4'>
              <Link to={link} smooth duration={500}>{link}</Link>
              <hr className='border-white w-96 my-3' />
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default Nav
