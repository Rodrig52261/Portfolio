import React from 'react'

import gofilmes from '../assets/filme/go-filmes.png'
import credja from '../assets/credja/credja.png'
import NodejsMongodb from '../assets/nodejs-mongodb/node-mongo.png'
import pagegames from '../assets/page-games/page-games.png'
import Clima_API from '../assets/Clima_API/Clima_API.png'

const Projetos = () => {

  const projects = [
    {
        id: 1,
        link: 'https://github.com/Rodrig52261/Go-filmes',
        src: gofilmes,
        title: 'Go-filmes',
        sub: 'html, css, react.js',
    },
    {
      id: 2,
      link: 'https://github.com/Rodrig52261/tcc-credja',
      src: credja,
      title: 'Credja',
      sub: 'html, css, php',
    },
    {
      id: 3,
      link: 'https://github.com/Rodrig52261/Nodejs-mongodb',
      src: NodejsMongodb,
      title: 'Nodejs-Mongodb',
      sub: 'html, css, node.js, express, nodemon, mongodb, handlebars',
    },
    {
      id: 4,
      link: 'https://github.com/Rodrig52261/pag-games?tab=readme-ov-file',
      src: pagegames,
      title: 'Page-Games',
      sub: 'html, css',
    },
    {
      id: 5,
      link: 'https://github.com/Rodrig52261/Clima_API',
      src: Clima_API,
      title: 'Clima_API',
      sub: 'html, css, react, react-router, api, axios',
    },
  ]

  return (
    <div
    name='projetos' 
    className='w-full h-full bg-slate-950 text-white'
    >
      <div 
      className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'
      >
        
        <div className='text-center'>
            <h3 className='text-6xl capitalize text-cyan-600'>projetos</h3>
        </div>

        <div 
        className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 py-8 px-12 sm:px-0'
        >
          {projects.map(({ id, src, title, sub, link }) => (
            <div
            key={id} 
            className='hover:scale-105 duration-500 py-2 rouded-lg'
            >
              <a href={link} target='_blank'><img src={src} alt={title} /></a>

              <div 
              className='flex flex-col text-justify md:w-full rounded-sm bg-slate-800'
              >
                <span className='text-2xl p-2 capitalize'>{title}</span>
                <p className='text-xl p-2'>{sub}</p>
              </div>

            </div>
          ))}
        </div>


        

      </div>
    </div>
  )
}

export default Projetos
