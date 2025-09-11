import { useState } from 'react'
import Lightbox from '../components/Lightbox.jsx'
import '../styles/Headings.css';

const images = [
  'back.png','back2.png','back3.png','back4.png','back5.png','back6.png','back7.png','back8.png',
  'back9.png','back10.png','back11.png','back12.png','back13.png','back14.png','back15.png','back16.png',
]

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
                src={`pic/${name}`}
                data-full={`pic/${name}`}
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
