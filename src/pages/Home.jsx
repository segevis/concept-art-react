import '../styles/Home.css'

export default function Home() {
  return (
    <header className="home-hero" role="banner">
      <div className="home-container">
        <div className="home-text">

          {/* כותרת בקשת */}
          <svg
            className="home-title-arc"
            viewBox="0 20 500 145"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* הקשת */}
            <path
              id="homeArc"
              d="M20 180 A300 350 0 0 1 450 180"
              fill="none"
              // stroke="red"   /* לבדיקה רואים את הקשת עצמה */
            />
            <text
              fontSize="62"
              fontFamily="'Varela Round','Segoe UI Rounded',system-ui,sans-serif"
              fill="#000"
            >
              <textPath href="#homeArc" startOffset="50%" textAnchor="middle">
                Snow White Ink
              </textPath>
            </text>
          </svg>

          {/* לוגו */}
          <img
            className="home-logo"
            src="/pic/shiraz-logo-Photoroom.png"
            alt="Snow White Ink logo"
            decoding="async"
            loading="eager"
            sizes="(max-width: 700px) 45vw, 260px"
          />

          {/* כותרת משנה */}
          <h2 className="home-subtitle">Shiraz Holender&apos;s Art Portfolio</h2>

          {/* תיאור */}
          <p className="home-description">
            Welcome to my creative space. Here you’ll find a collection of my concept art,
            tattoo designs, and personal sketches that showcase my artistic journey and style.
          </p>
        </div>
      </div>

      <main role="main" className="home-main">
        <div className="home-button">

          <a 
          className="btn btn--whatsapp"
          href="https://wa.me/972543352523?text=Hey%20Shiraz%2C%20I%20came%20from%20your%20website!"
          target="_blank"
          rel="noopener noreferrer"
          >
          WhatsApp
          </a>

          <a 
          className="btn btn--instegram"
          href="https://instagram.com/__snowhite__ink"
          target="_blank"
          rel="noopener noreferrer"
          >
          Instegram
          </a>

          <a
          className="btn btn--phone"
          href="tel:+972543352523"
          >
          Phone
          </a>
        </div>
      </main>
    </header>
  )
}
