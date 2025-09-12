// import React from 'react'
// import Title from './Title'

// const Newsletter = () => {
//     return (
//         <div className='flex flex-col items-center mx-4 my-36'>
//             <Title title="Join Newsletter" description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week." visibleButton={false} />
//             <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
//                 <input className='flex-1 pl-5 outline-none' type="text" placeholder='Enter your email address' />
//                 <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-103 active:scale-95 transition'>Get Updates</button>
//             </div>
//         </div>
//     )
// }

// export default Newsletter
'use client'
import React, { useEffect, useRef } from 'react'
import Title from './Title'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Newsletter = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Animate input only
      gsap.from(inputRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className='flex flex-col items-center mx-4 my-36'>
      <div ref={titleRef}>
        <Title
          title="Join Newsletter"
          description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week."
          visibleButton={false}
        />
      </div>

      <div className='flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200'>
        <input
          ref={inputRef}
          className='flex-1 pl-5 outline-none'
          type="text"
          placeholder='Enter your email address'
        />
        <button className='font-medium bg-green-500 text-white px-7 py-3 rounded-full transition'>
          Get Updates
        </button>
      </div>
    </div>
  )
}

export default Newsletter
