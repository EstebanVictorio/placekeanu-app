import { Image } from "@nextui-org/image"
import { useEffect, useRef, useState } from "react"
import { Kbd } from "@nextui-org/kbd"
import clsx from "clsx"

interface Props {
  gallery: KeanuImg[]
}

const baseStrokeUtils = "w-12 h-12 hidden xl:block"

const KeanuGallery = ({ gallery }: Props) => {
  const ref = useRef<HTMLUListElement>(null)
  const [leftStroke, setLeftStroke] = useState(false)
  const [rightStroke, setRightStroke] = useState(false)

  useEffect(() => {
    let handleKeyDown: Maybe<(e: KeyboardEvent) => void> = null
    let handleKeyUp: Maybe<(e: KeyboardEvent) => void> = null

    if (typeof document !== "undefined" && ref.current) {
      const { current:galleryElement } = ref
      handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'ArrowRight' ) {
          galleryElement.scrollLeft += 224
          setRightStroke(true)
        }
        if(e.key === 'ArrowLeft') {
          galleryElement.scrollLeft -= 224
          setLeftStroke(true)
        }
      }

      handleKeyUp = (e: KeyboardEvent) => {
        if(e.key === 'ArrowRight') {
          galleryElement.scrollLeft += 224
          setRightStroke(false)
        }
  
        if(e.key === 'ArrowLeft') {
          galleryElement.scrollLeft -= 224
          setLeftStroke(false)
          
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    }

    return () => {
      handleKeyDown && window.removeEventListener('keydown',handleKeyDown)
      handleKeyUp && window.removeEventListener('keyup', handleKeyUp)
    }
  }, [setLeftStroke, setRightStroke, ref])

  if (gallery.length === 0) {
    return (
      <p>You have no Keanu images stored. Shame :c</p>
    )
  }

  const leftStrokeClassName = clsx(
    baseStrokeUtils,
    leftStroke && "border border-solid border-primary-500 rounded-md"
  )

  const rightStrokeClassName = clsx(
    baseStrokeUtils,
    rightStroke && "border border-solid border-primary-500 rounded-md"
  )

  return (
    <div className="w-full flex gap-x-4 items-center justify-center">
      <Kbd className={leftStrokeClassName}>←</Kbd>
      <ul ref={ref} className="scroll-smooth w-[202px] h-[200px] flex overflow-x-auto rounded-md p-4 snap-x snap-mandatory gap-x-3">
        {gallery.map(item => (
          <li
            key={item?.url}
            className="!basis-[200px] max-h-[200px] !flex-grow !flex-shrink-0 snap-center"
          >
              <Image
                src={item?.url}
                alt="Keanu Reeves"
                className="!max-w-none"
                classNames={{
                  wrapper: "!max-w-none !w-full !h-full",
                  img: "!w-full !h-full"
                }}
              />
          </li>
        ))}
      </ul>
      <Kbd className={rightStrokeClassName}>→</Kbd>
    </div>
  )
}


export default KeanuGallery