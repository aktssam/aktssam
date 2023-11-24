import { Metadata } from 'next'

import Profile from './components/Profile'
import Description from './components/Description'

export const metadata: Metadata = {
  title: 'About me | Aktssam',
  description: 'Aktssam\'s Personal Website',
}

export default function About() {
  return (
    <div className="relative isolate px-6 pt-32 max-w-7xl mx-auto h-full pb-16 md:min-h-screen ">
      <div className="container">
        <div className="flex flex-wrap">
          <Profile />
          <Description />
        </div>
      </div>
    </div>
  )
}
