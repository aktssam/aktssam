import Image from 'next/image'
import Link from 'next/link'
import { socials } from '@/lib/static'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div
        className="mx-auto max-w-7xl space-y-6 px-6 py-8 lg:space-y-16 lg:px-8"
      >
        <div className="flex items-start justify-between text-gray-400">
          <Image src="assets/logo/black.svg" width={86} height={16} alt="Aktssam" />

          <ul className="flex justify-start gap-6">
            {socials.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sky-700">{item.icon}</Link>
              </li>
            ))}
          </ul>
        </div>


        <p className="text-md text-gray-500 ">
          &copy; 2023. aktssam.
        </p>
      </div>
    </footer >
  )
}
