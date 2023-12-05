"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import arrow from  'src/app/Arrow 1.svg'
import scroll from 'src/app/scroll.svg'
import twitter from 'src/app/twitter.svg'
import instagram from 'src/app/instagram.svg' 
import linkedin from 'src/app/linkedin.svg'
import Typewriter from 'typewriter-effect'


export default function Home() {

  const pathname = usePathname()

  return (
    <div className="justify-between">
      <section className='flex justify-center items-center w-full'>
          <p className='text-[24px]'>Langi Creative®</p>
      </section>
      <navbar className='flex justify-center items-center w-full'>
        <div className='w-[682px] h-[62px] bg-[#1F1F1F] rounded-full container mt-3'>
          <ul className='flex justify-between items-center py-4 mx-10'>
            <Link
            className={`link ${pathname === '/app' ? 'active' : ''}`}
            href='/app'>
              <li className={`text-[24px] text-white`}>Home</li>
              </Link>
            <Link
            className={`link ${pathname === '/projects' ? 'active' : ''}`}
            href='/projects'>
              <li className='text-[24px] text-white'>Projects</li>
              </Link>
            <Link 
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href='/about'>
              <li className='text-[24px] text-white'>About</li>
              </Link>
            <Link 
            className={`link ${pathname === '/contact' ? 'active' : ''}`}
            href='/projects'>
              <li className='text-[24px] text-white'>Contact</li>
              </Link>
          </ul>
        </div>
      </navbar>

      <section className='justify-start w-full px-[20px] py-[60px]'>
        <h1 className='col-span-1 text-[170px] font-bold ml-[50px] pb-0'>Welcome! I'm a</h1>
          <div className='flex flex-row justify-between items-center ml-[80px]'>
            <h1 className='col-span-5 text-[170px] font-bold'>
            <Typewriter
            options={{
            strings: ['Web Developer', 'Web Designer', 'Photographer', 'Creative'],
            autoStart: true,
            loop: true,
            }}
              />
            </h1>
            
            <div className='justify-between'> 
                <Link
                href='https://twitter.com/langi_creative'>
                <Image
                src={twitter}
                className='w-[30px] h-[28px]'/>
                </Link>
                <Link
                href='https://instagram.com/langi_creative'>
                <Image
                src={instagram}
                className='w-[30px] h-[28px]'
                />
                </Link>
                <Link
                href='https://www.linkedin.com/in/abdulrahman-omboke/'>
                <Image
                src={linkedin}
                className='w-[30px] h-[28px]'
                />
                </Link>
              </div>
        </div>

        <section className='flex justify-between pt-[70px] ml-[50px]'>
          <div>
            <h3 className='text-[30px] font-bold'>Let's Talk!</h3>
            <p className='text-[20px] font-thin'>
            <Link href={`mailto:langi.creative@gmail.com`}> 
              langi.creative@gmail.com
            </Link>
            </p>
          </div>
          <div className='pr-[100px]'>
            <p className='text-[20px]'>Hey there! I’m Langi, a developer, photographer and all<br/>
            round creative with a focus on branding, photography,<br/>
            and design.</p></div>
        </section>

        <section>
          <h3 className='text-[40px] font-bold ml-[50px]'>Projects</h3>
          <div>
          </div>
        </section>

        <section className='pt-[100px]'>
          <h3 className='text-[40px] font-bold ml-[40px]'>Expertise</h3>
        </section>
        <section className='pt-[50px] pl-[80px] flex justify-between'>
          <div className='flex justify-center items-center'>
          <ul className='grid grid-rows-2 grid-flow-col list-none p-0 m-0'>
            <li className='text-[20px] ml-[50px] pt-[30px]'>
              <article>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-6 h-6">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <h3>Web Development</h3>
              <p className="font-thin">
              With a passion for clean, functional design and a knack for coding, I'm here to bring your web vision to life. From responsive layouts to seamless navigation, I specialize in creating websites that not only look fantastic but also perform flawlessly. 
              </p>
              </article>
              </li>
            <li className='text-[20px] ml-[50px] pt-[20px]'>
              <article>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-6 h-6">
              <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                 </svg>
              <h3>Cinematography</h3>
              <p className="font-thin">
              Storytelling through moving images is my forte. As a<br/>
              cinematographer, I have a deep appreciation for capturing the<br/>
              essence of a moment, a brand, or a narrative. My lens becomes<br/>
              the window to your imagination, ensuring your vision is brought<br/>
              to life on screen. Whether it's a short film, commercial, or<br/>
              documentary, I'm dedicated to translating your concepts into<br/>
              visually compelling, emotion-evoking cinema.
              </p>
              </article>  
            </li>
            <li className='text-[20px] ml-[50px] pt-[30px]'>
              <article>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              fill="currentColor" 
              class="bi bi-camera" 
              viewBox="0 0 16 16"> 
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/> 
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/> 
              </svg>
              <h3>Photography</h3>
              <p className="font-thin">
               As a seasoned creator, my work is composed of user<br/> 
               friendly designs and solutions as well using creative<br/>
               mediums. My goal is to assist you build and maintain<br/>
               the brand of your dreams.  
              </p>
              </article>
              </li>
            <li className='text-[20px] ml-[50px] pt-[30px]'>
              <article>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="w-6 h-6">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
              <h3>Branding</h3>
              <p className="font-thin">
              Building a brand that resonates is an art, and I'm your<br/>  
              artistic ally. My mission is to help you shape and maintain<br/> 
              the brand of your dreams. With a sharp eye for design, a <br/> 
              penchant for strategy, and a commitment to authentic <br/> 
              storytelling, I create memorable brand experiences that<br/> 
              connect with your audience on a deep level. 
              </p>
              </article>
              </li>
          </ul>
          </div>
        </section>

        <section className='pt-[100px]'>
          <h1 className='flex justify-center items-center text-[170px] '>Let's talk!</h1>
          <div className='flex justify-center items-center'> 
          <button 
          type='button'
          className='bg-[#1F1F1F] rounded-full px-[30px] py-[5px] font-thin flex'>
            <a href={`mailto:langi.creative@gmail.com`}> 
            langi.creative@gmail.com
            </a>
            <Image
                src={arrow}
                className='ml-[10px] h-[20px]'
            />
          </button>
          </div>
        </section>
        <footer className='flex justify-between mt-[100px]'>
          <div>
          2023 © - made by Langi Creative
          </div>
          <div className='flex'>
          </div>
            <a 
            href='https://instagram.com/langi_creative'>  
            instagram
            </a>
            <a
            href='https://twitter.com/langi_creative'>  
            twitter
            </a>
            <a
            href='https://www.linkedin.com/in/abdulrahman-omboke'>  
            linkedIn
            </a>
        </footer>
      </section>
    </div>
  )
}
