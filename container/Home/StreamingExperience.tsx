import Image from "next/image";
import SectionHeader from "./components/SectionHeader";
import { streamingData, streamingHeaderData } from "./constants";

function StreamingExperience() {
  return (
    <section className="mb-36">
      <div className="container">
        <SectionHeader data={streamingHeaderData} />
        <div className="grid grid-cols-3 gap-8">
          {streamingData.map((item, idx) => (
            <article
              key={idx}
              className="flex flex-col rounded-xl border-2 border-black-15 bg-gradient-to-bl from-primary-45/10 to-transparent to-45% p-12"
            >
              <div className="mb-8 flex items-center gap-4">
                <figure className="flex h-[72px] w-[72px] items-center justify-center rounded-xl border-2 border-black-15 bg-black-08">
                  <Image
                    src={item.icon}
                    className=""
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </figure>
                <h4>{item.title}</h4>
              </div>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StreamingExperience;
