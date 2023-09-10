import { PayloadAction } from "@reduxjs/toolkit"

export function* gallerySaga (
  action: PayloadAction<KeanuImg>
) {
  const { payload: keanu } = action

  if(typeof document !== "undefined") {
    const prev = localStorage.getItem('gallery')
    let next: KeanuGallery = { items: [] }

    if(prev) {
      
      const prevItems: KeanuGallery = JSON.parse(prev)
      const [found] = prevItems.items.filter(prevItem => prevItem?.url === keanu?.url)

      if(found) return

      next.items = [...prevItems.items, keanu]
      localStorage.setItem('gallery', JSON.stringify(next))
      return
    }

    next.items.push(keanu)
    localStorage.setItem('gallery', JSON.stringify(next))
  }
}