import Link from "next/link";
import ListItem from "./ListItem";
import { homeLinks, moviesLinks, subscriptionLinks } from "./data/footerData";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black-06">
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-6 gap-10">
            <div>
              <h4 className="mb-4 text-xl font-semibold">Home</h4>
              <ul>
                {homeLinks.map((item, idx) => (
                  <ListItem key={idx} item={item} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Movies</h4>
              <ul>
                {moviesLinks.map((item, idx) => (
                  <ListItem key={idx} item={item} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Movies</h4>
              <ul>
                {moviesLinks.map((item, idx) => (
                  <ListItem key={idx} item={item} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Support</h4>
              <Link
                href="contact-us"
                className="py-1 text-lg font-medium text-grey-60 duration-200 hover:text-primary-60"
              >
                Contact Us
              </Link>
            </div>

            <div>
              <h4 className="mb-4 text-xl font-semibold">Subscription</h4>
              <ul>
                {subscriptionLinks.map((item, idx) => (
                  <ListItem key={idx} item={item} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Connect With Us</h4>
              <ul className="flex gap-2">
                <li>
                  <Link
                    href="#!"
                    className="group inline-block rounded-lg border-[2px] border-black-15 bg-black-10 p-3 duration-200 hover:border-primary-60"
                  >
                    <FaFacebook
                      size={24}
                      className="duration-200 group-hover:fill-primary-60"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#!"
                    className="group inline-block rounded-lg border-[2px] border-black-15 bg-black-10 p-3 duration-200 hover:border-primary-60"
                  >
                    <FaTwitter
                      size={24}
                      className="duration-200 group-hover:fill-primary-60"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#!"
                    className="group inline-block rounded-lg border-[2px] border-black-15 bg-black-10 p-3 duration-200 hover:border-primary-60"
                  >
                    <FaLinkedin
                      size={24}
                      className="duration-200 group-hover:fill-primary-60"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container flex h-20 items-center justify-between shadow-[0px_-1px_0_0_#404040] ">
          <div>
            <span className="text-grey-60">Made by </span>
            <Link
              className=" text-grey-75 underline underline-offset-4 duration-200 hover:text-primary-60 hover:no-underline"
              href="https://linkedin.com/in/shadman-alizada"
              target="_blank"
            >
              Shadman Alizada
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="#!"
              className="py-1 text-grey-60 duration-200 hover:text-primary-60"
            >
              Terms of Use
            </Link>
            <span className="inline-block w-[1px] bg-black-15"></span>
            <Link
              href="#!"
              className="py-1 text-grey-60 duration-200 hover:text-primary-60"
            >
              Privacy Policy
            </Link>
            <span className="inline-block w-[1px] bg-black-15"></span>
            <Link
              href="#!"
              className="py-1 text-grey-60 duration-200 hover:text-primary-60"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
