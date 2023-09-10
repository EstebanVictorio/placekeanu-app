import { useEffect, useState } from "react"

const useGallery = () => {
  const [gallery, setGallery] = useState<Maybe<KeanuGallery>>(null)

  useEffect(() => {
    const checkLocalStorage = () => {
      if(typeof document !== "undefined") {
        const prev = localStorage.getItem('gallery')
        if(prev) {
          const prevItems: KeanuGallery = JSON.parse(prev)
          setGallery(prevItems)
          return
        }

        setGallery({ items: [] })
      }
    }

    checkLocalStorage()
  }, [setGallery])

  return gallery
}

export default useGallery