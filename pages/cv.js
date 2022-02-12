import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiLightBulb } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';
import { RiHome4Fill, RiHome4Line } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';

export default function CvPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="px-2 pt-12 pb-6 md:pt-20 print:pt-3 print:md:pt-3 cvPage">
      <ReactTooltip
        place="top"
        type="dark"
        effect="solid"
        delayHide={300}
        delayShow={300}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-12 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 print:hidden"
        style={{ backdropFilter: 'blur(2px)' }}
      >
        <Link href="/">
          <a className="absolute top-0 left-0 theme-switch">
            {resolvedTheme === 'dark' ? (
              <RiHome4Line className="text-xl" />
            ) : (
              <RiHome4Fill className="text-xl" />
            )}
          </a>
        </Link>
        <span className="hidden font-mono text-xs font-bold print:hidden md:block">Print: Ctrl + P / Page: A4 / Margin: Default </span>
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
      <div className="relative z-0 grid w-full max-w-4xl gap-2 px-2 mx-auto print:max-w-full md:grid-cols-5 print:grid-cols-5">
        <div className="relative col-span-2 w-96 print:w-auto">
          <h1 className="relative z-10 flex flex-col font-mono text-4xl uppercase print:text-md">
            <span className="font-black">santiago</span>
            <span className="font-normal">rodríguez</span>
            <span className="font-light">couto</span>
          </h1>
          <div className="absolute top-0 right-0 z-0 font-serif tracking-tighter text-white transform scale-150 -translate-x-20 translate-y-5 opacity-90 dark:text-zinc-900 text-7xl print:hidden print:opacity-10">
            <span
              className="opacity-30"
              style={{ textShadow: '2px 2px #555555' }}
            >
              {'}'}
            </span>
            <span
              className="opacity-10"
              style={{ textShadow: '2px 2px #555555' }}
            >
              {'}'}
            </span>
            <span
              className="opacity-5"
              style={{ textShadow: '2px 2px #555555' }}
            >
              {'}'}
            </span>
          </div>
        </div>
        <div className="grid flex-1 w-full col-span-3 gap-3 mt-3 font-bold md:grid-cols-2 print:grid-cols-2 md:h-28">
          <div className="flex flex-col my-2 space-y-3 text-base">
            <span>33 years</span>
            <span>Buenos Aires (Argentina)</span>
            <span>Designer {'&'} Developer</span>
          </div>
          <div className="flex flex-col my-2 space-y-3 text-base md:text-right">
            <span>www.srcouto.ar</span>
            <span>santuan.bot@gmail.com</span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-4xl min-h-screen grid-cols-1 gap-2 px-2 mx-auto text-sm print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-12 print:pr-12 ">
          <div className="mt-3">
            <div className="border-b-2 border-dotted border-zinc-300">
              <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-lg dark:border-white">
                knowledge
              </h2>
            </div>
            <h3 className="mt-2 text-base font-bold uppercase">
              ux and ui designer
            </h3>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Advanced use of Adobe {'&'} Windows</p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-bold">
                  <span
                    data-tip="illustrator - 80%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #illustrator
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="photoshop - 80%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #photoshop
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="afterEffects - 50%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #afterEffects
                    <hr className="w-[50%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="vscode - 90%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #vscode
                    <hr className="w-[90%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="inDesign - 50%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #inDesign
                    <hr className="w-[50%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="blender - 33%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #blender
                    <hr className="w-[33%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Accessible design approach adapted to any device.</p>
              </div>
            </div>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Compatibility working with web standards.</p>
              </div>
            </div>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Advanced web layout.</p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-bold">
                  <span
                    data-tip="html5 - 90%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #html5
                    <hr className="w-[90%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="svg - 80%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #svg
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="tailwindCss - 80%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #tailwindCss
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="sass - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #sass
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="figma - 60%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #figma
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="cssModules - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #cssModules
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="designSystems - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #designSystems
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                </div>
              </div>
            </div>
            <h3 className="mt-12 text-base font-bold uppercase">
              frontend developer
            </h3>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>
                  Intermediate level using Linux terminal and git version
                  control.
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>
                  Intermediate experience creating models for headless cms and
                  connecting to frontends.
                </p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-bold">
                  <span
                    data-tip="contentful - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #contentful
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="sanityIo - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #sanityIo
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="jekyll - 40%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #jekyll
                    <hr className="w-[40%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="netlifyCms - 40%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #netlifyCms
                    <hr className="w-[40%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="django - 10%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #django
                    <hr className="w-[10%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>
                  Experience working with a variety of development frameworks.
                </p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-bold">
                  <span
                    data-tip="gatsby.js - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #gatsby.js
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="next.js - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #next.js
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="ember.js - 60%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #ember.js
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="jekyll - 60%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #jekyll
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="vue.js - 50%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #vue.js
                    <hr className="w-[50%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Deploying and optimization</p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-bold">
                  <span
                    data-tip="netlify - 60%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #netlify
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="gh-pages - 70%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #gh-pages
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="vercel - 60%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #vercel
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="lighthouse - 80%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #lighthouse
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                  <span
                    data-tip="purgeCss - 80%"
                    className="mt-2 mr-2 font-bold duration-300 border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70"
                  >
                    #purgeCss
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-300" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="mt-3">
            <div className="border-b-2 border-dotted border-zinc-300">
              <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-lg dark:border-white">
                Work Experience
              </h2>
            </div>
          </div>
          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              public prosecutor's office
            </h3>
            <h4 className="text-sm font-bold uppercase opacity-70">
              ux/ui designer and frontend developer
            </h4>
            <p className="pt-1 pr-12 print:pr-6">
              Updating and enhancing the current development design process and
              user experience for the websites and applications for the
              institution.
            </p>
            <time className="relative left-0 flex flex-col items-start justify-end text-xs italic opacity-50 md:items-end md:text-right md:left-auto md:right-0 top-2 md:top-0 md:absolute print:text-xs print:absolute print:right-0 print:items-end print:top-0 print:z-0">
              Nov. 2018 ‒ present
              <span>public sector</span>
            </time>
          </div>
          <hr className="my-2 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              chamber of deputies (argentina)
            </h3>
            <h4 className="text-sm font-bold uppercase opacity-70">
              ux designer and frontend developer
            </h4>
            <p className="pt-1 pr-12 print:pr-6">
              Improve the user experience on the Digital Parliamentary System .
              Enhanced the parliamentary processes from web to print. Create
              internal and external websites for the institution.
            </p>
            <time className="relative left-0 flex flex-col items-start justify-end text-xs italic opacity-50 md:items-end md:text-right md:left-auto md:right-0 top-2 md:top-0 md:absolute print:text-xs print:absolute print:right-0 print:items-end print:top-0 print:z-0">
              Feb. 2014 ‒ Dec. 2015
              <span>public sector</span>
            </time>
          </div>
          <hr className="my-2 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">estudio criteria</h3>
            <h4 className="text-sm font-bold uppercase opacity-70">
              junior web designer
            </h4>
            <p className="pt-1 pr-12 print:pr-6">
              Designer and developer of corporate websites. Brand design and
              corporate brochures.
            </p>
            <time className="relative left-0 flex flex-col items-start justify-end text-xs italic opacity-50 md:items-end md:text-right md:left-auto md:right-0 top-2 md:top-0 md:absolute print:text-xs print:absolute print:right-0 print:items-end print:top-0 print:z-0">
              Feb. 2013 ‒ Mar. 2014
              <span>private sector</span>
            </time>
          </div>
          <hr className="my-2 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              revision alpha hosting
            </h3>
            <h4 className="text-sm font-bold uppercase opacity-70">
              junior web designer
            </h4>
            <p className="pt-1 pr-12 print:pr-6">
              Designer of newsletters / Company websites. Server Technical
              support / Basic management of hosting servers.
            </p>
            <time className="relative left-0 flex flex-col items-start justify-end text-xs italic opacity-50 md:items-end md:text-right md:left-auto md:right-0 top-2 md:top-0 md:absolute print:text-xs print:absolute print:right-0 print:items-end print:top-0 print:z-0">
              Feb. 2011 ‒ Mar. 2013
              <span>private sector</span>
            </time>
          </div>

          <div className="pb-3 mt-3">
            <div className="border-b-2 border-dotted border-zinc-300">
              <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-lg dark:border-white">
                Education
              </h2>
            </div>
          </div>
          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              student in graphic design (uba)
            </h3>
            <h4 className="text-base">7 years and made 76,47% of the career</h4>
            <time className="absolute top-0 right-0 italic opacity-50">
              2007 - 2014
            </time>
          </div>
          <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />
          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              tipitos argentinos{' '}
              <i className="text-sm normal-case opacity-50 print:text-xs">
                by Aldo de Losa
              </i>
            </h3>
            <h4 className="text-base">Orthotypography course.</h4>
            <time className="absolute top-0 right-0 italic opacity-50">
              2013
            </time>
          </div>
          <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              clover english centre
            </h3>
            <h4 className="text-base">First Certificate Exam</h4>
            <time className="absolute top-0 right-0 italic opacity-50">
              1999 - 2007
            </time>
          </div>
          <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-4">
            <h3 className="text-base font-black uppercase">
              instituto privado pio ix
            </h3>
            <h4 className="text-base">
              High school with a focus in computer programming.
            </h4>
            <time className="absolute top-0 right-0 italic opacity-50">
              2002 - 2007
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
