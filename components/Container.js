import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import Offcanvas from '@/components/Offcanvas';
import Footer from '@/components/Footer';
import Headroom from 'react-headroom';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Santiago Rodriguez Couto',
    description: `Desarrollador y diseñador de páginas web.`,
    image: 'https://srcouto.vercel.app/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://srcouto.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://srcouto.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Santiago Couto" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Offcanvas />
      <button
        aria-label="Cambiar de blanco a negro"
        type="button"
        className="theme-switch"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <div className="p-4 pr-5 text-xl text-gray-800 dark:text-gray-200">
            {resolvedTheme === 'dark' ? (
              <MdLightbulbOutline />
            ) : (
              <HiLightBulb />
            )}
          </div>
        )}
      </button>
      <Headroom disableInlineStyles>
        <div className="max-w-full px-8 mx-auto lg:px-4 lg:max-w-2xl">
          <nav className="flex items-center justify-between w-full py-6 lg:py-0 ">
            <a href="#skip" className="sr-only skip-nav">
              Skip to content
            </a>
            <div className="ml-0 text-xl font-bold tracking-wider ">
              <NextLink href="/">
                <a className="block font-mono hover:opacity-80">SRCOUTO</a>
              </NextLink>
            </div>
            <div className="justify-end hidden uppercase lg:flex">
              <NextLink href="/blog">
                <a className="p-1 font-mono text-sm font-bold text-gray-900 sm:py-4 sm:pl-6 dark:text-gray-100">
                  Blog
                </a>
              </NextLink>
              <NextLink href="/proyectos">
                <a className="p-1 font-mono text-sm font-bold text-gray-900 sm:py-4 sm:pl-6 dark:text-gray-100">
                  Proyectos
                </a>
              </NextLink>
              <NextLink href="/contacto">
                <a className="p-1 font-mono text-sm font-bold text-gray-900 sm:py-4 sm:pl-6 dark:text-gray-100">
                  Contacto
                </a>
              </NextLink>
            </div>
          </nav>
        </div>
      </Headroom>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        key={router.route}
        transition={{ type: 'spring', duration: 4.2 }}
        variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1
          }
        }}
      >
        <main
          id="skip"
          className="flex flex-col justify-center px-4 pt-24 bg-white lg:px-8 dark:bg-gray-900"
        >
          {children}
          <Footer />
        </main>
      </motion.div>
    </div>
  );
}
