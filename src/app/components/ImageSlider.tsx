'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image1.jpg',
]

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="contain" // objectFitをcontainに変更
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
