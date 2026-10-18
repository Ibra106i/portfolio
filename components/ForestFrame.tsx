import Image from "next/image";

// The four foliage layers are decorative and swappable:
// replace the files in /public/frame (same names) with new art — nothing else changes.
// Required files: top.webp, left.webp, right.webp, bottom.webp
export default function ForestFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
    >
      <div className="absolute left-0 top-0 w-full animate-frame-sway [transform-origin:top_center]">
        <Image
          src="/frame/top.webp"
          alt=""
          width={1600}
          height={360}
          className="h-[140px] w-full object-fill md:h-[200px] lg:h-[260px]"
        />
      </div>

      <div className="absolute left-0 top-0 hidden h-full animate-frame-sway-rev [transform-origin:left_center] lg:block lg:w-24 xl:w-28">
        <Image
          src="/frame/left.webp"
          alt=""
          width={240}
          height={2400}
          className="h-full w-full object-fill"
        />
      </div>

      <div className="absolute right-0 top-0 hidden h-full animate-frame-sway [transform-origin:right_center] lg:block lg:w-24 xl:w-28">
        <Image
          src="/frame/right.webp"
          alt=""
          width={240}
          height={2400}
          className="h-full w-full object-fill"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full animate-frame-sway-rev [transform-origin:bottom_center]">
        <Image
          src="/frame/bottom.webp"
          alt=""
          width={1600}
          height={380}
          className="h-[150px] w-full object-fill md:h-[200px] lg:h-[240px]"
        />
      </div>
    </div>
  );
}
