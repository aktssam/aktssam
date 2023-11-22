import React from 'react'

export default function Description() {
  return (
    <div className="w-full self-end mt-10 md:mb-auto md:mt-0 md:w-3/5">
      <section className="text-center md:text-left mb-8">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b">About me</h2>
        <p className=" text-xl ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe, aliquid odit deserunt exercitationem culpa totam, quisquam voluptates earum iste amet repellendus nemo in tempora minus quo laborum? Cumque ab tenetur libero saepe exercitationem consequatur eius nihil sapiente quam, assumenda tempore, at laboriosam recusandae! Molestiae molestias totam repudiandae est eius!
        </p>
      </section>
      <section className="text-left">
        <h2 className="text-2xl font-semibold mb-4 pb-3 border-b">Educations</h2>
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-medium pb-1 md:text-xl">Universitas Internasional Semen Indonesia</h2>
            <p className="text-sm text-gray-500 md:text-lg">Bachelor Degree - Informatika</p>
          </div>
          <p className="text-sm text-gray-500 md:text-lg">
            2018-2023
          </p>
        </div>

      </section>

    </div>
  )
}
