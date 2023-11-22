import { socials } from "@/lib/static";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-52 ">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi, <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-sky-300">Aktssam</span> Here 👋
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm a fresh graduate with a passion for programming. Join me on this exciting journey as I explore the latest trends, share my insights & coding adventures. Currently learning about Next.JS
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              My Resume &nbsp; ↓
            </a>
            <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              About me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
