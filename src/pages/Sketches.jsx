import { useState } from 'react'
import Lightbox from '../components/Lightbox.jsx'
import '../styles/Headings.css';

const images = ['s0.jpg','s1.jpg','s2.jpg','s3.jpg','s4.jpg','s5.jpg','s6.jpg','s7.jpg','s8.jpg','s9.jpg','s10.jpg','s11.jpg','s13.jpg','s14.jpg','s15.jpg','s16.jpg','s17.jpg','s18.jpg']

export default function Sketches() {
    const [preview, setPreview] = useState(null)

  return (
    <>
        <header className="sketches-header" role="banner">
          <div className="sketches-header-text">
            <h1 className="section-title">Tattoo Sketches</h1>
            <h2 className="section-subtitle">Unique hand-drawn designs from my creative process</h2>
          </div>
        </header>
        
        <section className="gallery" aria-label="Concept art gallery">
          {images.map((name, i) => (
            <div className="card" key={name}>
              <img
                src={`Spic/${name}`}
                data-full={`Spic/${name}`}
                alt={`Concept art — piece ${i+1}`}
                loading="lazy"
                onClick={(e)=> setPreview({ src: e.currentTarget.dataset.full, alt: e.currentTarget.alt })}
              />
            </div>
          ))}
          
          <Lightbox
          src={preview?.src}
          alt={preview?.alt}
          onClose={() => setPreview(null)}
          />
        </section>
    </>     
  )
}
