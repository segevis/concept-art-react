import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!src) return null
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose}>
      <button className="lightbox__close" aria-label="Close preview" type="button" onClick={onClose}>&times;</button>
      <img className="lightbox__img" src={src} alt={alt || ''} onClick={(e)=>e.stopPropagation()} />
    </div>
  )
}
