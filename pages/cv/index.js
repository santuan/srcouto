import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiLightBulb } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';
import { RiHome4Fill, RiHome4Line } from 'react-icons/ri';
import { AiOutlineDownload } from 'react-icons/ai';
import Popover from '@/components/Cv/PopoverEs';
import HeaderCv from '@/components/Cv/HeaderCv';
import BodyCv from '@/components/Cv/BodyCvEs';

export default function CvPageEs() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative px-4 pt-12 pb-8 overflow-x-hidden font-sans bg-white print:bg-white dark:bg-gray-900 print:text-gray-900 md:pt-20 print:pt-3 print:md:pt-3 cvPage">
      <a
        href="/static/cv-smrc-2022-es.pdf"
        target="_blank"
        data-tip="Descargar PDF"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0 z-50 p-2 m-2 text-2xl duration-150 bg-gray-200 rounded dark:bg-gray-800 print:hidden ring-black dark:ring-white hover:ring-2 ring-0 text-zinc-800 dark:text-zinc-200"
      >
        <AiOutlineDownload />
      </a>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-12 bg-white lg:bg-transparent bg-opacity-90 dark:bg-gray-900 lg:dark:bg-transparent dark:bg-opacity-90 print:hidden lg:backdrop-blur-0">
        <Link href="/">
          <a className="absolute top-0 left-0 text-gray-900 theme-switch dark:text-white">
            {resolvedTheme === 'dark' ? (
              <RiHome4Line className="text-xl" />
            ) : (
              <RiHome4Fill className="text-xl" />
            )}
          </a>
        </Link>
        <Link href="/cv/en">
          <a data-tip="English" className="absolute top-0 z-50 p-2 m-1 text-lg text-gray-900 dark:text-white right-16 md:right-32">EN</a>
        </Link>
        <Popover />
        <button
          aria-label="Cambiar de blanco a negro"
          type="button"
          className="theme-switch"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <div className="p-4 pr-5 text-xl text-zinc-800 dark:text-zinc-200">
              {resolvedTheme === 'dark' ? (
                <MdLightbulbOutline />
              ) : (
                <HiLightBulb />
              )}
            </div>
          )}
        </button>
      </div>
      <HeaderCv />
      <BodyCv />
    </div>
  );
}
