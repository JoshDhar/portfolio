import {
  BriefcaseIcon,
  CodeIcon,
  DownloadIcon,
  MailIcon,
  MailOpenIcon,
  PhoneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import Header from "./components/Header";
import { FaGithub, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Header />
      {/*---- Hero ----*/}
      <section className="max-w-3xl mx-auto pt-16" id="home">
        <div className="container mx-auto px-4 pt-10 pb-16 flex flex-col-reverse sm:flex-row items-center justify-between md:px-6 md:py-20">
          {/* Content */}
          <div className="flex flex-1 flex-col md:self-center items-start mt-7 sm:mt-0 font-display">
            <p className="text-3xl md:text-4xl">Hi. I am Joshua.</p>
            <p className="text-white text-opacity-80 text-lg lg:text-xl mt-3 md:mt-4">
              Fullstack Web Developer.
            </p>

            {/* Button */}
            <div className="flex justify-center mt-8 md:mt-10 gap-4">
              <a href="/cv.pdf" download="Joshua CV">
                <button className="btn btn-primary flex">
                  Résumé
                  <DownloadIcon className="h-4 w-4 self-center ml-2 opacity-70" />
                </button>
              </a>
              <a href="#contact">
                <button className="btn btn-alt flex">
                  Contact
                  <MailOpenIcon className="h-4 w-4 self-center ml-2 opacity-70" />
                </button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center sm:justify-end flex-1">
            <img
              className="w-44 sm:w-52 md:w-72"
              src="./ProfilePic.svg"
              alt="joshua"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        className="max-w-3xl container mx-auto pb-16 px-4 md:px-6"
        id="about"
      >
        <div className="flex flex-col">
          <div>
            <p className="heading">About me</p>
            <p className="opacity-50 text-center text-sm mb-12 md:mb-16 mt-2">
              who I am
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
            <img
              src="./selfie.png"
              alt="selfie"
              className="mx-auto w-52 md:w-72 h-auto rounded-md"
            />
            <div className="px-2 flex flex-col gap-2">
              <p className="text-white text-opacity-70">
                I am Joshua Dhar, a thinker, a dreamer, a problem solver and
                also, a web developer.
              </p>
              <p className="text-white text-opacity-70">
                I’ve spent over 5 years creating different web applications
                using different stacks.
              </p>
              <p className="text-white text-opacity-70">
                I am currently working in Cogito Software Pvt Ltd as a React
                Native Developer.
              </p>
              <p className="text-white text-opacity-70">
                Outside of work, I am usually reading, gaming, or providing
                guidance to juniors.
              </p>
              <div className="mx-auto md:mx-0 mt-6">
                <a href="/cv.pdf" download="Joshua CV">
                  <button className="btn btn-primary flex">
                    Résumé
                    <DownloadIcon className="h-4 w-4 self-center ml-2 opacity-70" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="max-w-3xl container mx-auto pb-16 px-4 md:px-6"
        id="skills"
      >
        <div className="flex-col">
          <div>
            <p className="heading mt-10">Skills</p>
            <p className="opacity-50 text-sm text-center mb-12 md:mb-16 mt-2">
              stacks I know
            </p>
          </div>
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-dark flex flex-col px-4 pb-6">
              <div className="flex mb-6">
                <CodeIcon className="text-alt h-8 w-8 mr-3 self-center" />
                <p className="font-display text-alt text-3xl">Frontend</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  Html
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  Css
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  Javascript
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  React
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  React Native
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  Tailwind Css
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold ">
                  BootStrap
                </span>
              </div>
            </div>
            <div className="bg-dark flex flex-col px-4 pb-6">
              <div className="flex mb-6">
                <ServerIcon className="text-alt h-8 w-8 mr-3 self-center" />
                <p className="font-display text-alt text-3xl">Backend</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  Node
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  C#
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  Php
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  .Net
                </span>
              </div>
            </div>
            <div className="bg-dark flex flex-col px-4 pb-6">
              <div className="flex mb-6">
                <BriefcaseIcon className="text-alt h-8 w-8 mr-3 self-center" />
                <p className="font-display text-alt text-3xl">Tools</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  Figma
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  Photoshop
                </span>
                <span className="rounded-full text-white bg-darkAcc px-4 py-2 text-xs font-bold">
                  VS Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Work */}
      <section
        className="max-w-3xl container mx-auto pb-16 px-4 md:px-6"
        id="work"
      >
        <div>
          <p className="heading">Work</p>
          <p className="opacity-50 text-center text-sm mb-12 md:mb-16 mt-2">
            what I have done
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          <div className="bg-darkAcc rounded-lg flex flex-col justify-around items-center overflow-hidden">
            <img
              className="h-64 w-full object-contain object-top"
              src="./yelp.jpg"
              alt="work"
            />

            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 pb-4 relative">
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-lg font-normal pt-4 text-white font-sans">
                  Restaurant Finder App
                </h1>
                <p className="text-xs mt-2 text-white text-opacity-80 ">
                  A Restaurant Finder App using Yelp API
                </p>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    React Native
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Yelp
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Api
                  </span>
                </div>
              </div>

              <a
                href="https://github.com/JoshDhar/food"
                className="absolute top-6 right-6"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-white opacity-60 hover:opacity-80 h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="bg-darkAcc rounded-lg flex flex-col justify-around items-center overflow-hidden">
            <img
              className="h-64 w-full object-cover object-top"
              src="./Portfolio.png"
              alt="work"
            />

            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 pb-4 relative">
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-lg font-normal pt-4 text-white font-sans">
                  Portfolio
                </h1>
                <p className="text-xs mt-2 text-white text-opacity-80 ">
                  My Portfolio Website. Created using React and Tailwindcss.
                </p>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    React
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Tailwindcss
                  </span>
                </div>
              </div>

              <a
                href="https://github.com/JoshDhar/portfolio"
                className="absolute top-6 right-6"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-white opacity-60 hover:opacity-80 h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="bg-darkAcc rounded-lg flex flex-col justify-around items-center overflow-hidden">
            <img
              className="h-64 w-full object-cover object-top"
              src="./npmSearch.png"
              alt="work"
            />

            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 pb-4 relative">
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-lg font-normal pt-4 text-white font-sans">
                  Npm search web application
                </h1>
                <p className="text-xs mt-2 text-white text-opacity-80 ">
                  Simple application to search for names of npm packages using
                  Redux and npm API
                </p>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    React
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    TypeScript
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Redux
                  </span>
                </div>
              </div>

              <a
                href="https://github.com/JoshDhar/npmSearch"
                className="absolute top-6 right-6"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-white opacity-60 hover:opacity-80 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Projects */}
      <section
        className="max-w-3xl container mx-auto pb-16 px-4 md:px-6"
        id="work"
      >
        <div>
          <p className="heading">Production Work</p>
          <p className="opacity-50 text-center text-sm mb-12 md:mb-16 mt-2">
            Projects done for production
          </p>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
          <div className="bg-darkAcc rounded-lg flex flex-col justify-around items-center overflow-hidden">
            <img
              className="h-64 w-full object-contain object-top"
              src="./GofbaScreenshot.jpg"
              alt="work"
            />

            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 pb-4 relative">
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-lg font-normal pt-4 text-white font-sans">
                  Gofba Chat
                </h1>
                <p className="text-xs mt-2 text-white text-opacity-80 ">
                  A Chat App with additional features like nearby restaurant
                  search on map using Mapbox API.
                </p>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    React Native
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Mapbox
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Chat
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    API
                  </span>
                </div>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.gofba.v2.chat&hl=en_IN&gl=US">
                <img
                  className="opacity-80 hover:opacity-100 w-32 rounded-lg"
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
          <div className="bg-darkAcc rounded-lg flex flex-col justify-around items-center overflow-hidden">
            <img
              className="h-64 w-full object-contain object-top"
              src="./Quickbase.png"
              alt="work"
            />

            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 pb-4 relative">
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-lg font-normal pt-4 text-white font-sans">
                  Quickbase
                </h1>
                <p className="text-xs mt-2 text-white text-opacity-80 ">
                  Quickbase App for the website. The App relies heavily on
                  webview with complex customization. Worked on conversion of
                  Web View components to Native components.
                </p>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    React Native
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Web View
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Customization
                  </span>
                </div>
              </div>

              <a href="https://play.google.com/store/apps/details?id=com.qbmobile">
                <img
                  className="opacity-80 hover:opacity-100 w-32 rounded-lg"
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
          <div className="bg-darkAcc rounded-lg flex flex-col justify-around items-center overflow-hidden">
            <img
              className="h-64 w-full object-contain object-top"
              src="./Synergy.png"
              alt="work"
            />

            <div className="flex-1 w-full flex flex-col items-baseline justify-around h-1/2 px-6 pb-4 relative">
              <div className="flex flex-col justify-start items-baseline">
                <h1 className="text-lg font-normal pt-4 text-white font-sans">
                  Synergy
                </h1>
                <p className="text-xs mt-2 text-white text-opacity-80 ">
                  A facility management application. Uses QR scan.
                </p>
                <div className="flex flex-wrap mt-4 gap-2">
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    React Native
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    QR Scan
                  </span>
                  <span className="rounded-full text-white bg-dark px-4 py-2 text-xs text-opacity-80">
                    Nativebase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Say hi */}
      <section
        className="max-w-3xl container mx-auto pb-16 px-4 md:px-6"
        id="contact"
      >
        <div className="flex-col">
          <div>
            <p className="heading mt-10">Contact me</p>
            <p className="opacity-50 text-sm text-center mb-12 md:mb-16 mt-2">
              say hi !
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 ">
            <div className="flex">
              <PhoneIcon className="h-5 w-5 mr-3 text-blue-500 opacity-70" />
              <a
                href="tel:+919038294698"
                className="text-white text-opacity-90 hover:text-alt"
              >
                9038294698
              </a>
            </div>
            <div className="flex">
              <MailIcon className="h-5 w-5 mr-3 text-white opacity-70" />
              <a
                href="mailto:joshdharofficial@gmail.com"
                className="text-white text-opacity-90 hover:text-alt"
              >
                joshdharofficial@gmail.com
              </a>
            </div>
            <div className="flex">
              <FaWhatsapp className="h-5 w-5 mr-3 text-green-500 opacity-70" />
              <a
                href="https://wa.me/+919038294698"
                className="text-white text-opacity-90 hover:text-alt"
              >
                wa.me/+919038294698
              </a>
            </div>
            <div className="flex">
              <FaTelegramPlane className="h-5 w-5 mr-3 text-blue-500 opacity-70" />
              <a
                href="https://www.t.me/joshdhar"
                className="text-white text-opacity-90 hover:text-alt"
              >
                t.me/joshdhar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
