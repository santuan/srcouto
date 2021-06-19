import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ImageCaption from '@/components/ImageCaption';
import Youtube from '@/components/Plugs/Youtube'
import Quote from '@/components/Plugs/Quote'

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  ImageCaption,
  Youtube,
  Quote,
  a: CustomLink
};

export default MDXComponents;
