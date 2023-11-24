import { Metadata } from "next"
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Projects | Aktssam',
  description: 'Aktssam\'s Personal Website',
}

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Exciting journey my coding adventures
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

          <article className="flex max-w-xl flex-col items-start justify-between">

            <Image src="/assets/img/blog/1.png" alt="Portfolio" width={600} height={400} className="rounded-md mb-5 border" />
            <div className="flex w-full justify-between">
              <div className="flex w-full text-xs gap-x-2">
                <a href="/" className="relative z-10 rounded-full bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-800">Demo</a>
                <a href="#" className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-800  hover:bg-gray-100">Source Code</a>
              </div>
              <ul className="flex items-center gap-x-2 text-gray-500">
                <li><SiVercel size={18} /></li>
                <li><SiNextdotjs size={18} /></li>
                <li><SiTailwindcss size={18} /></li>
              </ul>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href="#">
                  <span className="absolute inset-0" />
                  Portfolio Website
                </a>
              </h3>
            </div>
            <time dateTime="2023-11-21" className="text-gray-500">
              Nov 21, 2023
            </time>
          </article>

        </div>
      </div>
    </div>
  )
}
