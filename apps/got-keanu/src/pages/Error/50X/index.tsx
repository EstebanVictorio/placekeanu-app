import Waiting from "assets/waiting.png"
import { useTranslation } from "react-i18next"
import Section from "blocks/Section"
import useErrorBoundary from "pages/hooks/useErrorBoundary"

const Error = () => {
  const { t } = useTranslation()
  const error = useErrorBoundary()

  return (
    <Section className="px-8">
      <figure>
        <img src={Waiting} alt="waiting" />
        <figcaption>
          {t(`pages.error.${error.message}`)}
        </figcaption>
      </figure>
    </Section>
  )
}

export default Error