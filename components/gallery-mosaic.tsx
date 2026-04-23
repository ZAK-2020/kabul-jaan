import Image from "next/image";
import { galleryImages } from "@/lib/site-data";

export function GalleryMosaic() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {galleryImages.map((image) => (
        <figure
          key={image.src}
          className="group relative aspect-[4/5] overflow-hidden rounded-[6px] border border-kj-border bg-kj-bg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-kj-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.75))]" />
          <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
            <p className="border-l-2 border-kj-accent pl-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-kj-accent-hover md:text-xs">
              {image.title}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
