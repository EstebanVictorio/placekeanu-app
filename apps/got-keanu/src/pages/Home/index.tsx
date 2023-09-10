import { Card } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import Section from "blocks/Section"
import { Link } from "react-router-dom"

const randomCap200AtLeast100 = () => Math.floor(Math.random() * 201) + 100

const Home = () => {
  return (
    <Section>
      <Card className="p-12 gap-y-8">
        <h1 className="text-5xl text-center">
          Welcome to the Keanu Reeves Gallery app!
        </h1>
        <div className="flex gap-x-4">
          <Button
            as={Link}
            variant="bordered"
            color="primary"
            to="/keanus"
            className="w-1/3 hover:text-white hover:border-white"
          >
              Go to Gallery
          </Button>
          <Button
            as={Link}
            color="default"
            to={`/keanus/${randomCap200AtLeast100()}x${randomCap200AtLeast100()}`}
            className="w-1/3 whitespace-pre-wrap text-center"
          >
              Add random image
          </Button>
          <Button
            as={Link}
            color="primary"
            to="/keanus/new"
            className="w-1/3 whitespace-pre-wrap text-center"
          >
              Add new image
          </Button>
        </div>
      </Card>
    </Section>
  )
}

export default Home