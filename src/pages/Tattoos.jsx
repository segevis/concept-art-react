import { useState } from 'react'
import Lightbox from '../components/Lightbox.jsx'
import '../styles/Headings.css';

const images = ['t0.jpg','t1.jpg','t2.jpg','t3.jpg','t4.jpg','t5.jpg','t6.jpg','t7.jpg','t8.jpg','t9.jpg','t10.jpg','t11.jpg','t13.jpg','t14.jpg','t15.jpg','t16.jpg','t17.jpg','t18.jpg','t19.jpg']

export default function Tattoos() {
  const [preview, setPreview] = useState(null)
  
    return (
      <>
        <header className="tattoo-header" role="banner">
          <div className="tattoo-header-text">
            <h1 className="section-title">Tattoo Portfolio</h1>
            <h2 className="section-subtitle">A Showcasing real tattoos inked on my clients</h2>
          </div>
        </header>
  
        <section className="gallery" aria-label="Concept art gallery">
          {images.map((name, i) => (
            <div className="card" key={name}>
              <img
                src={`Tpic/${name}`}
                data-full={`Tpic/${name}`}
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
