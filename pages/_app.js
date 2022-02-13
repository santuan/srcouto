import '@/styles/globals.css';
import '@/styles/Offcanvas.css';
import '@/styles/Header.css';
import '@/styles/Prose.css';
import '@/styles/Print.css';
import '@fontsource/fira-sans';
import '@fontsource/fira-sans/400-italic.css'
import '@fontsource/fira-sans/300-italic.css'
import '@fontsource/fira-sans/300.css'
import '@fontsource/fira-sans/500.css'
import '@fontsource/fira-sans/500-italic.css'
import '@fontsource/fira-sans/600.css'
import '@fontsource/fira-sans/800.css'
import '@fontsource/fira-sans/800-italic.css'
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
