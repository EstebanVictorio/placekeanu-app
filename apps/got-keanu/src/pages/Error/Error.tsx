import Glance from "assets/glance.png"
import Section from "blocks/Section"
import { Fragment } from "react"

type Props = {
  error: Error
}

const GeneralError = ({ error }: Props) => {

  return (
    <Fragment>
      <Section className="px-8 flex flex-col items-center gap-y-8 h-screen justify-center">
        <figure className="max-w-xs">
          <figcaption className="bg-red-400 rounded-md min-h-[80px] p-4">
            <h3 className="text-xl lg:text-5xl">Oops! Something happened... </h3>
            <span>Error: </span>
            <pre className="whitespace-pre-wrap max-w-xs text-center">
              {error.message}
            </pre>
          </figcaption>
          <img src={Glance} alt="glance" className="w-full h-full object-cover" />
        </figure>
      </Section>
    </Fragment>
  )
}

export default GeneralError