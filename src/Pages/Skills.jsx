import React from 'react'
import Tailwind from '../assets/img/Tailwind.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import react from '../assets/img/react.png'

const Skills = () => {

    const lingua = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-600'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-cyan-600'
        },
        {
            id: 3,
            src: js,
            title: 'JavaScript',
            style: 'shadow-amber-300'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-cyan-600'
        },
        {
            id: 5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-600'
        },
    ] 

  return (
    <div 
    name='skills'
    className='bg-gradient-to-r from-slate-800 to-slate-950 w-full h-full'
    >
      <div 
      className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'
      >
        <div className='text-center'>
            <h2 className='text-6xl capitalize mb-5 text-cyan-600'>skills</h2>
            <span className='text-3xl capitalize'>linguagens que eu estudo</span>
        </div>

        <div 
        className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'
        >
            
            {lingua.map(({ id, src, title, style }) =>(
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rouded-lg ${style}`}
                    >
                        <img src={src} alt={title} className='w-36 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
        
        </div>
      </div>
        
    </div>
  )
}

export default Skills
