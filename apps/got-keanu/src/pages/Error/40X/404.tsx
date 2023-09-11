import Waiting from "assets/waiting.png"
import Section from "blocks/Section"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Button } from "@nextui-org/button"


const NotFound = () => {
  return (
    <Fragment>
      <Section className="px-8 flex flex-col items-center gap-y-8 h-screen justify-center">
        <figure className="max-w-xs">
          <figcaption className="bg-red-400 rounded-md min-h-[80px] p-4">
            <h3 className="text-xl lg:text-5xl">Uh oh...</h3>
            <p className="whitespace-pre-wrap max-w-xs text-center">
              That content is not found here...
            </p>
          </figcaption>
          <img src={Waiting} alt="waiting" className="w-full h-full object-cover" />
        </figure>
        <Button as={Link} to="/" color="primary">Go back to Home</Button>
      </Section>
    </Fragment>
  )
}

export default NotFound