import Head from 'next/head'
import { useEffect , useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NextJsCarousel from './components/NextJsCarousel'

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};
  return (
    <div className={styles.container}>
      <Head>
        <title>Catalogo</title>
        <meta name="description" content="Catalogo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al <a href="#">Catálogo!</a>
        </h1>

        <p className={styles.description}>
         Califique los diseños segun su agrado: {' '}
          <code className={styles.code}>Rango(1 - 5) </code>
        </p>

        <div className={styles.grid}>
       < NextJsCarousel/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
         Desarrollado por{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={48} height={48} />
          </span>
        </a>
      </footer>
      {showTopBtn && (
              <span    onClick={goToTop} className={styles.toTop} data-href="#">
             
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><g strokeWidth="72" stroke="hsl(0, 0%, 100%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-0.7071067811865477,-0.7071067811865475,0.7071067811865475,-0.7071067811865477,400.0000000000001,998.685424949238)"><line x1="372.5" y1="372.5" x2="427.5" y2="427.5" markerEnd="url(#SvgjsMarker1469)"></line></g><defs><marker markerWidth="9.5" markerHeight="9.5" refX="4.75" refY="4.75" viewBox="0 0 9.5 9.5" orient="auto" id="SvgjsMarker1469"><polygon points="0,9.5 3.1666666666666665,4.75 0,0 9.5,4.75" fill="hsl(0, 0%, 100%)"></polygon></marker></defs></svg>

             </span>
            
            )}

          <div className={styles.burbuja}>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
            <div className={styles.burbuja}></div>
          </div>
    </div>
  )
}
