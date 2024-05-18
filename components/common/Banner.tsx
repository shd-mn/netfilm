import Image from "next/image";
import Link from "next/link";
import bannerBg from "@/public/images/banner-bg.png";
function Banner() {
  return (
    <section className="mb-[150px]">
      <div className="container relative overflow-hidden px-20 py-[100px]">
        <div className="absolute left-0 top-1/2 -z-10 h-full w-full -translate-y-1/2 overflow-hidden rounded-xl border-[2px] border-black-15 after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-[linear-gradient(90deg,rgb(15,15,15)0%,rgba(20,15,15,0.97)25%,rgba(34,14,14,0.91)50%,rgba(229,0,0,0.2)100%)] ">
          <Image
            src={bannerBg}
            alt="movies banner"
            className="w-full object-cover object-left-top"
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-5xl font-bold mb-3">Start your free trial today!</h3>
            <p className="text-lg text-grey-60">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Link
            href="/Subscription"
            className="flex h-14 items-center gap-2 rounded-lg bg-primary-45 px-6 duration-200 hover:bg-primary-60"
          >
            Start a Free Trail
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
