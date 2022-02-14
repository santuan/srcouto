import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { HiLightBulb } from 'react-icons/hi';
import { MdLightbulbOutline } from 'react-icons/md';
import { RiHome4Fill, RiHome4Line } from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';
import Popover from '@/components/Cv/Popover';

export default function CvPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative px-2 pt-12 pb-8 overflow-x-hidden font-sans print:text-gray-900 md:pt-20 print:pt-3 print:md:pt-3 cvPage">
      <ReactTooltip
        place="top"
        type="dark"
        effect="solid"
        delayHide={300}
        delayShow={300}
      />

      
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-12 bg-white lg:bg-transparent bg-opacity-90 dark:bg-gray-900 lg:dark:bg-transparent dark:bg-opacity-90 print:hidden lg:backdrop-blur-0"
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
      <div className="relative z-0 grid w-full max-w-4xl grid-cols-1 mx-auto md:gap-2 print:max-w-full md:grid-cols-5 print:grid-cols-5">
        <div className="relative w-full col-span-2 print:w-auto">
          <h1 className="relative z-10 flex flex-col font-sans text-2xl leading-relaxed tracking-widest uppercase print:text-xl">
            <span className="font-extrabold">santiago</span>
            <span className="font-medium">rodríguez</span>
            <span className="font-light">couto</span>
          </h1>
          <div className="absolute top-0 right-0 z-0 flex items-center justify-center w-32 h-32 font-serif tracking-tighter text-white transform dark:text-zinc-900 print:hidden">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              className="w-32 h-32 mx-auto"
              viewBox="0 0 60 74"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="opacity-25 dark:opacity-75">
                <path
                  className="text-white fill-current dark:text-gray-900 print:text-white"
                  d="M203.61 63.64c4.79 0 7.26 2.78 7.26 8.26 0 4.49-1.46 11-1.46 14.61 0 4.41 2.24 6.72 7.26 7.34v1.39c-5 .62-7.26 2.94-7.26 7.35 0 3.63 1.46 10.12 1.46 14.6 0 5.49-2.47 8.27-7.26 8.27a24.34 24.34 0 0 1-2.81-.24V64a15.68 15.68 0 0 1 2.81-.36Z"
                  transform="translate(-166.91 -63.64)"
                  style={{
                    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
                  }}
                />
              </g>
              <g className="opacity-25 dark:opacity-75">
                <path
                  className="text-white fill-current dark:text-gray-900 print:text-white"
                  d="M186.29 63.64c4.79 0 7.27 2.78 7.27 8.26 0 4.49-1.47 11-1.47 14.61 0 4.41 2.24 6.72 7.26 7.34v1.39c-5 .62-7.26 2.94-7.26 7.35 0 3.63 1.47 10.12 1.47 14.6 0 5.49-2.48 8.27-7.27 8.27a24.07 24.07 0 0 1-2.8-.24V64a15.51 15.51 0 0 1 2.8-.36Z"
                  transform="translate(-166.91 -63.64)"
                  style={{
                    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
                  }}
                />
              </g>
              <g className="opacity-25 dark:opacity-75">
                <path
                  className="text-white fill-current dark:text-gray-900 print:text-white"
                  d="M169.72 63.64c4.79 0 7.26 2.78 7.26 8.26 0 4.49-1.47 11-1.47 14.61 0 4.41 2.24 6.72 7.27 7.34v1.39c-5 .62-7.27 2.94-7.27 7.35 0 3.63 1.47 10.12 1.47 14.6 0 5.49-2.47 8.27-7.26 8.27a24.34 24.34 0 0 1-2.81-.24V64a15.68 15.68 0 0 1 2.81-.36Z"
                  transform="translate(-166.91 -63.64)"
                  style={{
                    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
                  }}
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="grid flex-1 w-full col-span-3 gap-3 mt-2 font-medium print:mt-0 md:grid-cols-2 print:grid-cols-2 md:h-28">
          <div className="flex flex-col my-2 space-y-4 text-sm print:space-y-1">
            <span>33 years</span>
            <span>Buenos Aires (Argentina)</span>
            <span>Full Stack Developer </span>
          </div>
          <div className="flex flex-col my-2 space-y-4 text-sm print:space-y-1 md:text-right">
            <span>www.srcouto.ar</span>
            <span>santuan.bot@gmail.com</span>
            <span>{'&'} Designer</span>
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-4xl min-h-screen grid-cols-1 mx-auto mt-3 text-sm md:gap-2 print:max-w-full print:grid-cols-5 md:grid-cols-5 print:min-h-full print:text-xs">
        <div className="relative flex-initial col-span-2 md:pr-12 print:pr-12 ">
          <div className="mt-3">
            <div className="border-b-2 border-dotted border-zinc-300">
              <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-lg dark:border-white top-0.5">
                knowledge
              </h2>
            </div>
            <h3 className="mt-2 text-base font-medium uppercase">
              ux and ui designer
            </h3>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Advanced use of Adobe {'&'} Windows</p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">
                  <span
                    data-tip="illustrator - 80%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #illustrator
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="photoshop - 80%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #photoshop
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="afterEffects - 50%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #afterEffects
                    <hr className="w-[50%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="vscode - 90%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #vscode
                    <hr className="w-[90%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="inDesign - 50%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #inDesign
                    <hr className="w-[50%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="blender - 33%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #blender
                    <hr className="w-[33%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
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
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">
                  <span
                    data-tip="html5 - 90%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #html5
                    <hr className="w-[90%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="svg - 80%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #svg
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="tailwindCss - 80%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #tailwindCss
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="sass - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #sass
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="figma - 60%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #figma
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="cssModules - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #cssModules
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="designSystems - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #designSystems
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-base font-medium uppercase">
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
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">
                  <span
                    data-tip="contentful - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #contentful
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="sanityIo - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #sanityIo
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="jekyll - 40%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #jekyll
                    <hr className="w-[40%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="netlifyCms - 40%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #netlifyCms
                    <hr className="w-[40%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="django - 10%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #django
                    <hr className="w-[10%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
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
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">
                  <span
                    data-tip="gatsby.js - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #gatsby.js
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="next.js - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #next.js
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="ember.js - 60%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #ember.js
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="jekyll - 60%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #jekyll
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="vue.js - 50%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #vue.js
                    <hr className="w-[50%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-3">
              <span className="w-6 mt-0.5 font-black">*</span>
              <div className="flex flex-col w-full">
                <p>Deploying and optimization</p>
                <div className="flex flex-wrap items-start justify-start w-full text-sm italic font-medium">
                  <span
                    data-tip="netlify - 60%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #netlify
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="gh-pages - 70%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #gh-pages
                    <hr className="w-[70%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="vercel - 60%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #vercel
                    <hr className="w-[60%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="lighthouse - 80%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #lighthouse
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                  <span
                    data-tip="purgeCss - 80%"
                    className="mt-2 mr-2 font-medium border-b-2 text-zinc-700 border-zinc-200 dark:text-zinc-300 dark:border-zinc-700 hover:opacity-70 print:border-zinc-300 print:opacity-100"
                  >
                    #purgeCss
                    <hr className="w-[80%] border-t-0 border-b-2 top-0.5 relative border-zinc-600 dark:border-zinc-300 print:border-zinc-500" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ">
          <div className="mt-3">
            <div className="border-b-2 border-dotted border-zinc-300">
              <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-lg dark:border-white top-0.5">
                Work Experience
              </h2>
            </div>
          </div>
          <div className="relative my-3 print:mt-1">
            <h3 className="text-lg font-bold">Public Prosecutor's Office</h3>
            <h4 className="relative text-sm italic font-medium opacity-70 -top-1">
              ux/ui designer and frontend developer
            </h4>
            <p className="pt-0 pr-0 md:pr-12 print:pr-6 print:pt-0">
              Updating and enhancing the current development design process and
              user experience for the websites and applications for the
              institution.
            </p>
            <time className="relative top-0 right-0 flex items-center my-3 space-x-3 text-xs italic print:space-x-0 print:items-end print:m-0 print:flex-col md:space-x-0 md:m-0 md:items-end md:flex-col md:absolute print:absolute">
              <span className="md:mb-0.5 text-xs uppercase md:ml-0">public sector</span>
              Nov. 2018 ‒ Present
            </time>
          </div>
          <hr className="my-2 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">
              Chamber of Deputies - Argentina
            </h3>
            <h4 className="relative text-sm italic font-medium opacity-70 -top-1">
              ux designer and junior frontend developer
            </h4>
            <p className="pt-0 pr-0 md:pr-12 print:pr-6 print:pt-0">
              Improve the user experience on the Digital Parliamentary System.
              Enhanced the parliamentary processes from web to print. Create
              internal and external websites for the institution.
            </p>
            <time className="relative top-0 right-0 flex items-center my-3 space-x-3 text-xs italic print:space-x-0 print:items-end print:m-0 print:flex-col md:space-x-0 md:m-0 md:items-end md:flex-col md:absolute print:absolute">
              <span className="md:mb-0.5 text-xs uppercase md:ml-0">public sector</span>
              Feb. 2014 ‒ Dec. 2015
            </time>
          </div>
          <hr className="my-2 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">Estudio Criteria</h3>
            <h4 className="relative text-sm italic font-medium opacity-70 -top-1">
              junior web designer
            </h4>
            <p className="pt-0 pr-0 md:pr-12 print:pr-6 print:pt-0">
              Designer and developer of corporate websites. Brand design and
              corporate brochures.
            </p>
            <time className="relative top-0 right-0 flex items-center my-3 space-x-3 text-xs italic print:space-x-0 print:items-end print:m-0 print:flex-col md:space-x-0 md:m-0 md:items-end md:flex-col md:absolute print:absolute">
              <span className="md:mb-0.5 text-xs uppercase md:ml-0">private sector</span>
              Feb. 2013 ‒ Mar. 2014
            </time>
          </div>
          <hr className="my-2 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">Revision Alpha Hosting</h3>
            <h4 className="relative text-sm italic font-medium opacity-70 -top-1">
              junior web designer
            </h4>
            <p className="pt-0 pr-0 md:pr-12 print:pr-6 print:pt-0">
              Designer of newsletters / Company websites. Server Technical
              support / Basic management of hosting servers.
            </p>
            <time className="relative top-0 right-0 flex items-center my-3 space-x-3 text-xs italic print:space-x-0 print:items-end print:m-0 print:flex-col md:space-x-0 md:m-0 md:items-end md:flex-col md:absolute print:absolute">
              <span className="md:mb-0.5 text-xs uppercase md:ml-0">private sector</span>
              Feb. 2011 ‒ Mar. 2013
            </time>
          </div>

          <div className="pb-3 mt-3">
            <div className="border-b-2 border-dotted border-zinc-300">
              <h2 className="relative inline-block py-2 text-xl font-black uppercase border-b-2 border-zinc-500 print:text-lg dark:border-white top-0.5">
                Education
              </h2>
            </div>
          </div>
          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">Graphic Design student (UBA)</h3>
            <h4 className="text-base">7 years and made 76,47% of the career</h4>
            <time className="absolute right-0 italic opacity-50 top-1">
              2007 - 2014
            </time>
          </div>
          <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />
          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">
              Tipitos Argentinos{' '}
              <i className="text-sm italic font-normal normal-case opacity-50 print:text-xs">
                by Aldo de Losa
              </i>
            </h3>
            <h4 className="text-base">Orthotypography course.</h4>
            <time className="absolute right-0 italic opacity-50 top-1">
              2013
            </time>
          </div>
          <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">Clover english centre</h3>
            <h4 className="text-base">First Certificate Exam</h4>
            <time className="absolute right-0 italic opacity-50 top-1">
              1999 - 2007
            </time>
          </div>
          <hr className="mb-3 border-dashed border-zinc-900 opacity-30" />

          <div className="relative my-3 print:mt-2">
            <h3 className="text-lg font-bold ">High school</h3>
            <h4 className="text-base">Focus on computer programming.</h4>
            <time className="absolute right-0 italic opacity-50 top-1">
              2002 - 2007
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
