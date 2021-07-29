import styles from './Trinomia.module.css';
import React from 'react';
import { BsFillCircleFill, BsSquareFill, BsTriangleFill } from 'react-icons/bs';
import ReactTooltip from 'react-tooltip';
import Confetti from 'react-dom-confetti';

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 19,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 8000,
  stagger: 13,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#2f85c0', '#52a3d9', '#e74446', '#d52b2a', '#f8c843', '#f8a834']
};

export default function Trinomia() {
  const [isCopied, setIsCopied] = React.useState(false);
  return (
    <div className="flex flex-col items-center justify-center text-sm text-blue-600 duration-300 grayscale hover:grayscale-0 hover:translate-y-2 hover:rotate-2 group">
      <button
        onClick={() => {
          copyToClipboard('https://www.santuan.com.ar/');
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 3000);
        }}
        className={
          'relative flex justify-center items-center flex-col mt-1 mx-2 rounded-md pb-1 font-bold font-sans dark:text-white text-gray-800  transform duration-700 ' +
          (isCopied
            ? '' + isCopied
            : '')
        }
      >
        
        <div className="flex space-x-1 ">
          <BsFillCircleFill className="text-blue-500" />
          <BsSquareFill className="text-red-500" />
          <BsTriangleFill className="text-yellow-500" />
        </div>
        <span className="mt-2">{isCopied ? '🎉 Link copiado' : 'Web a color'}</span>
        <span className="mb-2 font-sans text-xs font-bold text-gray-800 duration-300 md:opacity-0 dark:text-white group-hover:opacity-100">
          santuan.com.ar
        </span>
        <div className="transform -translate-y-12">
          <Confetti active={isCopied} config={config} />
        </div>
      </button>
    </div>
  );
}
