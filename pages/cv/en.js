import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiLightBulb } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';
import { RiHome4Fill, RiHome4Line } from 'react-icons/ri';
import { AiOutlineDownload } from 'react-icons/ai';
import Popover from '@/components/Cv/Popover';
import HeaderCv from '@/components/Cv/HeaderCv';
import BodyCv from '@/components/Cv/BodyCv';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function CvPage(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Santiago Rodríguez Couto - CV',
    description: `Desarrollador y diseñador de páginas web.`,
    image: 'https://srcouto.ar/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://srcouto.ar${router.asPath}`}
        />
        <link rel="canonical" href={`https://srcouto.ar${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Santiago Couto" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@santuuan" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="relative px-4 pt-12 pb-8 overflow-x-hidden font-sans print:text-gray-900 md:pt-20 print:pt-3 print:md:pt-3 cvPage">
        <a
          href="/static/cv-smrc-2022.pdf"
          target="_blank"
          data-tip="Download PDF"
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
          <Link href="/cv">
            <a
              data-tip="Translate to Spanish"
              className="absolute z-50 w-8 h-8 m-1 font-mono text-lg font-medium text-gray-900 rounded kush-center hover:ring-2 ring-transparent hover:ring-gray-300 dark:text-white right-3"
            >
              EN
            </a>
          </Link>
          <Popover />
          {/* <button
            aria-label="Change Light"
            type="button"
            data-tip="Change Light"
            className="fixed z-50 w-8 h-8 m-1 border-0 rounded right-2 kush-center focus:outline-none top-1 ring-2 ring-transparent hover:ring-gray-300"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <div className="text-xl text-zinc-800 dark:text-zinc-200">
                {resolvedTheme === 'dark' ? (
                  <MdLightbulbOutline />
                ) : (
                  <HiLightBulb />
                )}
              </div>
            )}
          </button> */}
        </div>
        <HeaderCv />
        <BodyCv />
      </div>
    </>
  );
}
