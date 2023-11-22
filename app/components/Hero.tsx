import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


const socials = [
  { label: "GitHub", icon: <FaGithub size={32} />, href: "https://github.com/aktssam" },
  { label: "LinkedIn", icon: <FaLinkedin size={32} />, href: "https://linkedin.com/in/aktssam" },
  { label: "Email", icon: <FaEnvelope size={32} />, href: "mailto:aktssam.alfarisi@gmail.com" }
]


export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-52 ">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Hi, Aktssam Here 👋
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm a fresh graduate with a passion for programming. Join me on this exciting journey as I explore the latest trends, share my insights & coding adventures. Currently learning about Next.JS
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            {socials.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-800 hover:text-sky-700" target="_blank">
                {item.icon}
              </Link>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              My Resume &nbsp; ↓
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Contact me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
