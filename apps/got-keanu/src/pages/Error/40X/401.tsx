import { useTranslation } from "react-i18next"
import Waiting from "assets/waiting.png"
import Section from "blocks/Section"
import { GuestNavbar } from "blocks/navigation/Navbar"
import { Fragment } from "react"
import { Button } from "@nextui-org/button"
import { Link } from "react-router-dom"

type Props = {
  error: Error
}

const Unauthorized = (_: Props) => {
  const { t } = useTranslation()

  return (
    <Fragment>
      <GuestNavbar />
      <Section className="px-8 flex flex-col items-center gap-y-8">
        <figure className="max-w-xs">
          <img src={Waiting} alt="waiting" className="w-full h-full object-cover" />
          <figcaption>
            {t("pages.error.unauthorized.message")}
          </figcaption>
        </figure>
        <Button as={Link} to="/login" className="w-full">
          {t("pages.error.unauthorized.controls.signIn")}
        </Button>
      </Section>
    </Fragment>
  )
}

export default Unauthorized