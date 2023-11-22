import Image from 'next/image'
import Link from 'next/link'

import { FaLocationDot } from "react-icons/fa6";
import { socials } from '@/lib/static'

export default function Profile() {
  return (
    <div className="w-full self-center px-5 md:w-2/5 text-center md:text-left mb-auto">
      <Image src="/profile.jpg" width={215} height={215} alt="Muhammad Aktssam Alfarisi" className="rounded-full mx-auto md:mx-0" />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-4xl mt-4">
        Muhammad Aktssam <br /> Alfarisi
      </h1>

      <div className="flex gap-x-2 mt-3 text-gray-500 justify-center md:justify-start">
        <FaLocationDot size={18} />
        <p className="text-lg align-top">Gresik, Indonesia</p>
      </div>

      <div className="flex mt-5 gap-x-5 justify-center md:justify-start">
        {socials.map((item) => (
          <Link key={item.href} href={item.href} className="text-gray-600 hover:text-sky-700" target="_blank">
            {item.icon}
          </Link>
        ))}

      </div>
    </div>
  )
}
