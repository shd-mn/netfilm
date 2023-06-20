import Image from "next/image";
const HomePage = () => {
  return (
    <div className="container h-[2000px]">
      <Image
        className="absolute left-0 top-0 -z-10 h-1/2 w-full object-cover lg:h-screen"
        src="/Shadow.jpg"
        alt="bg"
        width={1920}
        height={1080}
      />
      HomePage
    </div>
  );
};
export default HomePage;
