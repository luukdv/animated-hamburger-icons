import { Fade } from '../../lib'
import { Sling } from '../../lib'
import { Spiral } from '../../lib'
import { Turn } from '../../lib'
import { Twirl } from '../../lib'
import { Squash } from '../../lib'
import Hamburger from '../../lib'
import Card from './card'
import NewCard from './new-card'
import React from 'react'

export default () => (
  <>
    <h1
      className="
      leading-snug
      mb-12
      md:mb-24
      text-2xl
      md:text-3xl
      lg:text-4xl
      font-medium
      text-center
    "
    >
      Animated hamburger icons for React<span className="ml-4" role="img" aria-label="Hamburger">🍔</span>
    </h1>
    <div className="w-full">
      <Card title="Tilt">
        <Hamburger size={36} color="white" direction="right" />
        <div>
          Import
          <span className="text-white"> Hamburger </span>
          from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Hamburger size={36} color="white" />
      </Card>

      <Card title="Fade">
        <Fade size={36} color="white" direction="right" />
        <div>
          Import {'{'}
          <span className="text-white"> Fade </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Fade size={36} color="white" />
      </Card>

      <Card title="Turn">
        <Turn size={36} color="white" direction="right" />
        <div>
          Import {'{'}
          <span className="text-white"> Turn </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Turn size={36} color="white" />
      </Card>

      <Card title="Sling">
        <Sling size={36} color="white" direction="right" />
        <div>
          Import {'{'}
          <span className="text-white"> Sling </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Sling size={36} color="white" />
      </Card>

      <Card title="Twirl">
        <Twirl size={36} color="white" direction="right" />
        <div>
          Import {'{'}
          <span className="text-white"> Twirl </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Twirl size={36} color="white" />
      </Card>

      <Card title="Spiral">
        <Spiral size={36} color="white" direction="right" />
        <div>
          Import {'{'}
          <span className="text-white"> Spiral </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Spiral size={36} color="white" />
      </Card>

      <NewCard title="Squash">
        <Squash size={36} color="white" />
        <div>
          Import {'{'}
          <span className="text-white"> Squash </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
      </NewCard>
    </div>
  </>
)
