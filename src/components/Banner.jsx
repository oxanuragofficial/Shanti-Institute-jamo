import Carousel from './Carousel.jsx'
import { LogoRound } from './Icons.jsx'
import { bannerImages, bannerMobileImages, logoSrc } from '../data/media.js'
import useMediaQuery from '../hooks/useMediaQuery.js'
import { SITE } from '../data/site.js'

// Full-width banner under the navbar with the round logo centred on its bottom edge.
// Laptop/desktop/tablet (768px and up): 3:1 banners from src/assets/banner/.
// Phones (under 768px): taller 3:2 banners from src/assets/banner-mobile/. Same width, more height.
// Every banner fills its box completely (cover). The logo overlaps only the empty bottom-centre.
export default function Banner() {
  const wide = useMediaQuery('(min-width: 768px)')
  const usePhone = !wide && bannerMobileImages.length > 0
  const images = usePhone ? bannerMobileImages : bannerImages
  const aspect = usePhone ? 'aspect-[3/2]' : 'aspect-[3/1]'
  return (
    <section aria-label="Shanti Institute Technical Degree College, Jamo">
      <div className="bg-navy-950">
        <div className="relative mx-auto max-w-[1500px]">
          {images.length ? (
            <Carousel
              key={usePhone ? 'phone' : 'wide'}
              images={images}
              interval={5500}
              aspect={aspect}
              fit="cover"
              rounded="rounded-none"
              bordered={false}
              priority
              label="Institute banner"
            />
          ) : (
            <div className={`${aspect} bg-navy-900`} aria-hidden="true" />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex translate-y-1/2 justify-center">
            <div className="h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full bg-white p-1 shadow-[0_8px_24px_-6px_rgba(6,23,51,.55)] ring-4 ring-white sm:h-28 sm:w-28 sm:p-1.5 lg:h-32 lg:w-32">
              {logoSrc ? (
                <img src={logoSrc} alt="Shanti Institute logo" className="h-full w-full rounded-full object-contain" />
              ) : (
                <LogoRound className="h-full w-full" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container-x pb-2 pt-12 text-center sm:pt-[4.5rem]">
        <h1 className="mx-auto max-w-3xl !text-[clamp(1.5rem,1.1rem+1.8vw,2.4rem)]">Shanti Institute Technical Degree College, Jamo</h1>
        <p className="mt-2 text-muted">{SITE.address.short}</p>
      </div>
    </section>
  )
}
