'use client'
import Link from 'next/link';
import '@/components/css/Acceuil.css'
import { Suspense, useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { OrbitControls } from '@react-three/drei'

const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <svg className='m-3 h-5 w-5 text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const MonLogo = dynamic(() => import('@/components/jsx/MonLogo').then((mod) => mod.MonLogo), { ssr: false })

const Accueil = () => {
  const [windowWidth, setWindowWidth] = useState<number>()
  useEffect(() => { setWindowWidth(window.innerWidth) }, [])
  useEffect(() => {
    const onResizeWindow = (event: UIEvent) => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResizeWindow)
    return () => { window.removeEventListener('resize', onResizeWindow) }
  }, [])

  return (
    <section style={{ userSelect: "none", MozUserSelect: "-moz-none" }} className="flex flex-col md:flex-row items-center justify-evenly w-full" id="_sec1_">

      {/* Grand Ecran */}
      <div style={{ paddingLeft: ((windowWidth && windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "10px" : "40px") : "60px") }} className="hidden sm:block flex-grow h-3/4 m-2">
        <h1 style={{ fontSize: ((windowWidth && windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "50px" : "60px") : "72px") }} className="mt-5 mb-0">Bonjour,</h1>
        <h1 style={{ fontSize: ((windowWidth && windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "50px" : "60px") : "72px") }} className="mt-2 mb-0">Je suis Tsilavo</h1>
        <h1 style={{ fontSize: ((windowWidth && windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "25px" : "30px") : "40px") }} className="mt-2 mb-0">Développeur web fullstack</h1>
        <h1 style={{ fontSize: ((windowWidth && windowWidth < 1300) ? ((windowWidth <= 970 && windowWidth >= 768) ? "15px" : "20px") : "24px") }} className="mt-4 mb-0">"Construisons votre avenir numérique ligne par ligne"</h1>
        <a href="/Heritsilavo ANDRIANTSILAVINA.pdf" className='mt-5 mb-0 p-2 rounded bg-green-700' download>Télécharger CV </a>
      </div>

      {/* Petit Ecran */}
      <div className="block sm:hidden flex-grow h-3/4 m-2 mt-5">
        <h1 style={{ fontSize: "45px" }} className="mt-5 mb-0">Bonjour,</h1>
        <h1 style={{ fontSize: "45px" }} className="mt-2 mb-0">Je suis Tsilavo</h1>
        <h1 style={{ fontSize: "23px" }} className="mt-2 mb-0">Développeur web fullstack</h1>
        <h1 style={{ fontSize: "15px" }} className="mt-4 mb-0">"Construisons votre avenir numérique ligne par ligne"</h1>
        <a href="/Heritsilavo ANDRIANTSILAVINA.pdf" className='mt-6 mb-0 p-2 rounded bg-green-700' download>Télécharger CV </a>
      </div>

      {/* Logo HT */}
      <div className={`w-full relative md:w-5/12 ` + ((windowWidth && windowWidth < 1300) ? ' h-1/2 ' : ' h-3/4 ')}>
        <View orbitControls={<OrbitControls enableZoom={false} />} className='h-full w-full flex flex-col items-center justify-center'>
          <Suspense fallback={null}>
            <MonLogo></MonLogo>
            <Common color={"#12092D"}></Common>
          </Suspense>
        </View>
      </div>

      {/* Barre des sociales */}
      <div className="hidden md:flex flex-col justify-between items-center">
        <Link href="https://www.facebook.com/her.tslav/" target="_blank">
          <div className="rounded m-3">
            <img src="/facebook.svg" alt="facebook" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/heritsilavo-andriantsilavina-86b4302b4/?originalSubdomain=mg" target="_blank">
          <div className="rounded m-3">
            <img src="/linkedin.svg" alt="linkedin" />
          </div>
        </Link>
        <Link href="https://github.com/heritsilavo" target="_blank">
          <div className="rounded m-3">
            <img src="/github.svg" alt="github" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Accueil;
