import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ImageCaption from '@/components/Plugs/ImageCaption'
import Quote from '@/components/Plugs/Quote'
import Youtube from '@/components/Plugs/Youtube'

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
  a: CustomLink,
  Image,
  ImageCaption,
  Quote,
  Youtube
};

export default MDXComponents;
