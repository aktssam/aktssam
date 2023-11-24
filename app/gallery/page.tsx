import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Gallery | Aktssam',
  description: 'Aktssam\'s Personal Website',
}

const galleries = [
  { label: 'Photo 1', src: "https://picsum.photos/id/9/600" },
  { label: 'Photo 2', src: "https://picsum.photos/id/26/600" },
  { label: 'Photo 3', src: "https://picsum.photos/id/119/600" },
  { label: 'Photo 4', src: "https://picsum.photos/id/258/600" },
  { label: 'Photo 5', src: "https://picsum.photos/id/350/600" },
  { label: 'Photo 6', src: "https://picsum.photos/id/351/600" },
  { label: 'Photo 7', src: "https://picsum.photos/id/366/600" },
  { label: 'Photo 8', src: "https://picsum.photos/id/370/600" },
  { label: 'Photo 9', src: "https://picsum.photos/id/385/600" },
  { label: 'Photo 10', src: "https://picsum.photos/id/456/600" },
]


export default function Gallery() {
  return (
    <div className="py-32 min-h-screen max-w-7xl mx-auto">
      <div className="mx-auto max-w-2xl lg:mx-0 px-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gallery</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Share photos or images here
        </p>
      </div>
      <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 border-gray-200 lg:max-w-none md:grid-cols-4 px-0">
        {galleries.map((photo) => (
          <a key={photo.src} href={photo.src} className="col-span-1 aspect-square inset-0 border">
            <img src={photo.src} alt={photo.label} className='object-cover h-full w-full object-center overflow-hidden' />
          </a>
        ))}

      </div>
    </div>
  )
}
