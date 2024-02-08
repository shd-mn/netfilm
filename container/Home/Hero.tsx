import Image from "next/image";
import Link from "next/link";
import { HiPlay } from "react-icons/hi2";

function Hero() {
  return (
    <section className="mb-44 flex h-[900px] w-full justify-start">
      <figure className="absolute top-0 -z-10 h-full w-full">
        <Image
          className="h-full w-full object-cover"
          src={"/images/home-cover.png"}
          alt="movies cover"
          width={1920}
          height={860}
          priority
        />
      </figure>
      <div className="container">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <figure className="h-[470px] w-[470px]"></figure>
          <div className="flex flex-col items-center px-56">
            <h1 className="mb-4 text-6xl font-bold">
              The Best Streaming Experience
            </h1>
            <p className="mb-14 text-center text-grey-60">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <Link
              href="/movies"
              className="flex h-14 items-center gap-1 rounded-lg bg-primary-45 px-[14px]"
            >
              <span className="flex items-center justify-center">
                <HiPlay size={28} />
              </span>
              <span className="text-lg font-semibold">Start Watching Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
