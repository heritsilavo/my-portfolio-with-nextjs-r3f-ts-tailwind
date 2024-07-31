'use client'
import { useContext, useState } from 'react';
import Link from 'next/link';
import { ShowNavContext } from '@/layout';
import '@/components/css/NavBar.css'
import { styled } from "@stitches/react"
import { animated } from '@react-spring/web';

const Nav = () => {
  const { showNav, toggleShowNav } = useContext(ShowNavContext)
  const [showvNav, setShowvNav] = useState(false);

  const showhamburger = () => setShowvNav(true);
  const hidehamburger = () => setShowvNav(false);

  return (
    <div onMouseLeave={hidehamburger} className={`flex items-center justify-between __nav_container__ ${showNav ? '' : '__hide_nav__'}`}>
      <div className="hidden md:inline __logo__">HERITSILAVO</div>
      <ul className="hidden md:inline-block m-1 mt-0 mb-0">
        <li>
          <Link href="/#_sec1_" passHref>
            <span>Accueil</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec2_" passHref>
            <span>Profil</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec5_" passHref>
            <span>Competences</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec3_" passHref>
            <span>Projets</span>
          </Link>
        </li>
        <li>
          <Link href="/#_sec4_" passHref>
            <span>Services</span>
          </Link>
        </li>
      </ul>

      <div className={`w-full __v_nav__ md:hidden ${showNav ? '' : ' __hide_v_nav__ '}`}>
        <ul className="m-0 w-full">
          <li className="m-2">
            <Link href="/#_sec1_" passHref>
              <span className="w-full">Accueil</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec2_" passHref>
              <span className="w-full">Profil</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec5_" passHref>
              <span className="w-full">Competences</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec3_" passHref>
              <span className="w-full">Projets</span>
            </Link>
          </li>
          <li className="m-0">
            <Link href="/#_sec4_" passHref>
              <span className="w-full">Services</span>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

const NavBar = styled(animated(Nav), {})
export default NavBar;
