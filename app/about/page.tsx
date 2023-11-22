import React from 'react'
import Profile from './components/Profile'
import Description from './components/Description'

export default function About() {
  return (
    <div className="relative isolate px-6 pt-32 max-w-6xl mx-auto h-full pb-16 md:min-h-screen ">
      <div className="container">
        <div className="flex flex-wrap">
          <Profile />
          <Description />
        </div>
      </div>
    </div>
  )
}
