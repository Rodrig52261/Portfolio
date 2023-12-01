import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaGithub, FaLinkedinIn  } from 'react-icons/fa'
import foto from '../assets/img/foto.jpg'


function Home() {
  return (
    <div className='p-20' name='home'>
      <h1 className='text-5xl font-bold mt-10'>Olá, meu nome é Rodrigo</h1>
      <span className='text-3xl text-slate-600'>
        <TypeAnimation
        sequence={[
          'Dev Front-End',
          1000,
          'Dev Html',
          1000,
          'Dev Css',
          1000,
          'Dev React.js',
          1000,
          'Dev Tailwind',
          1000
        ]}
        wrapper="span"
        speed={30}
        style={{ fontSize: '1em', display: 'inline-block' }}
        repeat={Infinity}
        />
      </span>
        <div className="my-4">
              <div className="flex items-center justify-between">
                <span className='w-96 text-2xl text-justify'>Busco um estágio e estou cursando Sistema da Informação pela Unoeste.
                Procuro constantemente expandir meu conhecimento no campo da tecnologia 
                me mantendo sempre atualizado e estudando alguma stack para me aprofundar
                na área de programação e me desenvolver profissionalmente.
                <div className="flex gap-5 mt-10">
                  <a href="https://github.com/Rodrig52261" target='_blank' className='text-5xl w-16 h-16 rounded-xl flex justify-center items-center bg-black text-white hover:scale-90 transition-all duration-200'>
                    <FaGithub />
                  </a>

                  <a href="https://www.linkedin.com/in/rodrigo-sousa-729431226/" target='_blank' className='text-5xl w-16 h-16 rounded-xl flex justify-center items-center bg-cyan-600 text-white hover:scale-90 transition-all duration-200'>
                    <FaLinkedinIn  />
                  </a>

                  <a href="https://www.instagram.com/drigas_digo/" target='_blank' className='text-5xl w-16 h-16 rounded-xl flex justify-center items-center bg-gradient-to-br from-indigo-500 to-red-500 text-white hover:scale-90 transition-all duration-200'>
                    <FaInstagram />
                  </a>
        </div> 
                </span>
                <div className="">
                  <img src={foto} alt="perfil" 
                  className='rounded-full w-[400px] h-[400px] hidden md:block'
                  />
                </div>
              </div>
        </div> 
    </div>
  )
}

export default Home