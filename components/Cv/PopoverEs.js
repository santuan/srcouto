import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { BsKeyboard } from 'react-icons/bs';

const DesktopControls = [
  {
    name: 'Imprimir',
    command: 'Ctrl P',
    description: 'Página A4 - Margen por defecto',
    href: '##',
    icon: IconOne
  },
  {
    name: 'Zoom',
    command: 'Ctrl + / Ctrl -',
    description: 'Ampliar (+) o Disminuir (-)',
    href: '##',
    icon: IconTwo
  }
];

export default function PopoverEs() {
  return (
    <div className="fixed z-40 items-center justify-end hidden w-full h-12 max-w-sm px-2 print:hidden md:flex top-0.5 right-16">
      <Popover className="relative text-right ">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'ring-2 ring-gray-700' : 'text-opacity-90'}
                text-white group bg-transparent items-center justify-center rounded p-1 inline-flex font-medium hover:text-opacity-100 hover:ring-2 ring-gray-300 duration-150 focus:outline-none focus-visible:ring-2 z-50 focus-visible:ring-gray-300 focus-visible:ring-opacity-75`}
            >
              <BsKeyboard
                className={`${open ? '' : 'text-opacity-70'}
                  text-gray-900 dark:text-white h-6 w-6 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-2 mt-3 text-left transform -translate-x-64 left-1/2 sm:px-0 ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative hidden gap-5 p-4 bg-gray-100 dark:bg-gray-800 md:grid lg:grid-cols-1">
                    {DesktopControls.map((item) => (
                      <div
                        key={item.name}
                        // href={item.href}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-zinc-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-200 rounded dark:bg-gray-700 print:bg-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="relative w-full ml-2">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {item.name}
                          </p>
                          <span className="absolute top-0 right-0 px-2 text-sm font-medium text-gray-900 bg-gray-300 rounded">
                            {item.command}
                          </span>
                          <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        className="text-gray-800 stroke-current dark:text-gray-400"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        className="text-gray-800 stroke-current dark:text-gray-400"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
      />
    </svg>
  );
}
