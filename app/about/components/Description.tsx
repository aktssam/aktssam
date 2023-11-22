import React from 'react'

export default function Description() {
  return (
    <div className="w-full self-end mt-10 md:mb-auto md:mt-0 md:w-3/5">
      <section className="text-center md:text-left mb-8">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b">About me</h2>
        <p className="text-xl">
          I’m a fresh graduate of Informatics Department and I have gained experience in web programming, having worked as an intern in a Flutter development for 3 month. Loved to exploring new technologies and currently learning NextJS. I am a proactive, responsible, and motivated individual to learn and grow.

        </p>
      </section>
      <section className="text-left mb-8">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b">Educations</h2>
        <div className="flex flex-wrap justify-between">
          <div>
            <h2 className="text-lg font-medium pb-1 md:text-xl self-start">Universitas Internasional Semen Indonesia</h2>
            <p className="w-full text-md text-gray-500 md:text-lg self-end">Bachelor Degree - Informatika</p>
          </div>
          <p className="text-sm text-gray-500 md:text-lg">
            2018-2023
          </p>
        </div>
      </section>
      <section className="text-left">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b">Experience</h2>
        <div className="flex flex-wrap justify-between">
          <div>
            <h2 className="text-lg font-medium pb-1 md:text-xl self-start">Flutter Developer (Internship)</h2>
            <p className="w-full text-md text-gray-500 md:text-lg self-end">PT. PJB UBJOM PLTU Rembang - Rembang, Indonesia</p>
          </div>
          <p className="text-sm text-gray-500 md:text-lg">
            Sep-Nov 2021
          </p>
        </div>
      </section>

    </div>
  )
}
