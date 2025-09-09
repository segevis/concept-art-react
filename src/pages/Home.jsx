import './Home.css'

export default function Home() {
  return (
    <header className="home-hero" role="banner">
      <div className="home-container">
        <div className="home-text">

          {/* כותרת בקשת */}
          <svg
            className="home-title-arc"
            viewBox="0 20 500 140"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* הקשת — אפשר לשחק עם המספרים */}
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
            Welcome to my creative space. Here you’ll find a curated collection of concept art,
            tattoo designs, and personal sketches that showcase my artistic journey and style.
          </p>
        </div>
      </div>
    </header>
  )
}
