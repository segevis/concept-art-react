import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ConceptArt from './pages/ConceptArt.jsx'
import Tattoos from './pages/Tattoos.jsx'
import Sketches from './pages/Sketches.jsx'

export default function App() {
  return (
    <div className="app">
      {/* <header className="site-header" role="banner">
        <div className="container brand">
          <div className="brand-text" aria-label="שם המותג">
            <h1 className="brand-title">CONCEPT ART</h1>
            <h2 className="brand-subtitle">
              A showcase of Shiraz Holender’s original concept illustrations and artistic explorations
            </h2>
          </div>
          <img className="brand-logo" src="/pic/logo.png" alt="לוגו אמנות — Snow White Art" />
        </div>
      </header> */}

      <nav className="subnav" aria-label="secondary">
        <ul className="subnav-list">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/concept-art">Concept Art</NavLink></li>
          <li><NavLink to="/tattoos">Tattoos</NavLink></li>
          <li><NavLink to="/sketches">Sketches</NavLink></li>
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept-art" element={<ConceptArt />} />
          <Route path="/tattoos" element={<Tattoos />} />
          <Route path="/sketches" element={<Sketches />} />
        </Routes>
      </main>
    </div>
  )
}
