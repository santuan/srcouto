import '@/styles/globals.css';
import '@/styles/Offcanvas.css';
import '@/styles/Header.css';
import '@/styles/Prose.css';
import '@fontsource/fira-sans';
import '@fontsource/space-mono';
import '@fontsource/vollkorn';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';
import SimpleReactLightbox from 'simple-react-lightbox';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SimpleReactLightbox>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </SimpleReactLightbox>
    </ThemeProvider>
  );
}
