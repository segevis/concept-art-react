import './Home.css'

export default function Home() {
  return (
  
    <header className="home-hero" role="banner">
      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">Snow White Ink</h1>

          <img 
          className="home-logo" 
          src="pic/shiraz-logo-Photoroom.png" 
          alt="Snow White Ink logo" 
          decoding='async'
          loading='eager'
          sizes='(max-width: 700px) 45vw, 260px'
        />
      
          <h2 className="home-subtitle">Shiraz Holender — Art Portfolio</h2>
          <p className="home-description">
            Welcome to my creative space. Here you’ll find a curated collection of concept art, tattoo designs, 
            and personal sketches that showcase my artistic journey and style.
          </p>
        </div>
      </div>
    </header>

  )
}
