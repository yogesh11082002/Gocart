'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import CategoriesMarquee from './CategoriesMarquee'
import gsap from 'gsap'
import HeaderSlider from './HeaderSlider'

const Hero = () => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '$'

  // refs for animation
  const containerRef = useRef(null)
  const headlineRef = useRef(null)
  const newsRef = useRef(null)
  const buttonRef = useRef(null)
  const imageRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in container
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      })

      // Headline animation
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      // News badge
      gsap.from(newsRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.4,
        ease: 'back.out(1.7)',
      })

      // CTA button
      gsap.from(buttonRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'elastic.out(1, 0.5)',
      })

      // Hero Image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      })

      // Side cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className='mx-6 ' ref={containerRef}>
      <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10 '>
        {/* Left Hero */}
        
        <HeaderSlider/>

        {/* Right Side Cards */}
        <div className='flex flex-col md:flex-row xl:flex-col gap-5 w-full xl:max-w-sm text-sm text-slate-600'>
          {[assets.hero_product_img1, assets.hero_product_img2].map(
            (img, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`flex-1 flex items-center justify-between w-full rounded-3xl p-6 px-8 group ${
                  i === 0 ? 'bg-orange-200' : 'bg-blue-200'
                }`}
              >
                <div>
                  <p
                    className={`text-3xl font-medium bg-gradient-to-r from-slate-800 ${
                      i === 0
                        ? 'to-[#FFAD51]'
                        : 'to-[#78B2FF]'
                    } bg-clip-text text-transparent max-w-40`}
                  >
                    {i === 0 ? 'Best products' : '20% discounts'}
                  </p>
                  <p className='flex items-center gap-1 mt-4'>
                    View more{' '}
                    <ArrowRightIcon
                      className='group-hover:ml-2 transition-all'
                      size={18}
                    />{' '}
                  </p>
                </div>
                <Image className='w-35' src={img} alt='' />
              </div>
            )
          )}
        </div>
      </div>
      <CategoriesMarquee />
    </div>
  )
}

export default Hero


// 'use client'
// import { assets } from '@/assets/assets'
// import { ArrowRightIcon } from 'lucide-react'
// import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'
// import CategoriesMarquee from './CategoriesMarquee'
// import gsap from 'gsap'
// import HeaderSlider from './HeaderSlider'

// const Hero = () => {
//   const containerRef = useRef(null)
//   const cardsRef = useRef([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(containerRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         ease: 'power3.out',
//       })

//       gsap.from(cardsRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         delay: 0.5,
//         ease: 'power2.out',
//       })
//     })
//     return () => ctx.revert()
//   }, [])

//   return (
//     <section
//       ref={containerRef}
//       className="mx-6 flex flex-col justify-center min-h-screen max-w-7xl mx-auto"
//     >
//       {/* Left Hero (Slider) */}
//       <div className="flex-1 w-full">
//         <HeaderSlider />
//       </div>

//       {/* Right Side Cards (below slider, flex row on desktop) */}
//       <div className="mt-8 flex flex-col md:flex-row gap-5 w-full text-sm text-slate-600">
//         {[assets.hero_product_img1, assets.hero_product_img2].map((img, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardsRef.current[i] = el)}
//             className={`flex-1 flex items-center justify-between rounded-3xl p-6 px-8 group ${
//               i === 0 ? 'bg-orange-200' : 'bg-blue-200'
//             }`}
//           >
//             <div>
//               <p
//                 className={`text-3xl font-medium bg-gradient-to-r from-slate-800 ${
//                   i === 0 ? 'to-[#FFAD51]' : 'to-[#78B2FF]'
//                 } bg-clip-text text-transparent max-w-40`}
//               >
//                 {i === 0 ? 'Best products' : '20% discounts'}
//               </p>
//               <p className="flex items-center gap-1 mt-4">
//                 View more{' '}
//                 <ArrowRightIcon
//                   className="group-hover:ml-2 transition-all"
//                   size={18}
//                 />
//               </p>
//             </div>
//             <Image className="w-32 md:w-40" src={img} alt="" />
//           </div>
//         ))}
//       </div>

//       {/* Marquee under hero */}
//       <div className="mt-10">
//         <CategoriesMarquee />
//       </div>
//     </section>
//   )
// }

// export default Hero
