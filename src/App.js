import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      {/*---- Hero ----*/}
      <section>
        <div className="container px-4 md:px-8 py-12 mx-auto flex flex-col-reverse sm:flex-row items-center mt-8 ">
          {/* Content */}

          <div className="flex flex-1 flex-col items-center sm:items-start mt-7 lg:py-10 lg:gap-3 font-display">
            <p className="pb-4 text-4xl text-center sm:text-left sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Hi. I'm Joshua.
            </p>
            <p className="text-2xl text-center sm:text-left sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              A Web Developer.
            </p>

            {/* Button */}
            <div className="flex justify-center mt-8 md:mt-12 ">
              <a href="/">
                <button className="btn btn-primary mr-4 sm:mr-6 lg:mr-8 2xl:mr-10 flex">
                  Résumé&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 self-center"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </a>
              <button className="btn btn-alt">Contact</button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center sm:justify-end flex-1">
            <img
              className="w-5/6 px-4 sm:px-0 sm:pl-6 sm:py-6 max-w-sm"
              src="./ProfilePic.svg"
              alt="joshua"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto my-10 px-4 md:px-8">
        <div className="bg-darkAcc rounded-lg flex flex-col p-8 md:p-12 lg:p-9 xl:p-10 gap-4">
          <p className="heading mb-2">About Me</p>
          <p>
            I am Joshua Dhar, Passionate web designer & developer creating
            beautiful websites and apps with love.
          </p>
          <p>
            I’ve Spent over 2 years working on backend development, creating
            websites using asp.net and php (CodeIgniter). I’ve also worked on
            desktop applications using C#.
          </p>
          <p>
            Learning new Technology and creative problem solving has always been
            my passion. Currently I am progressing forward on the path to
            becoming a fullstack developer using javascript.
          </p>
          <p>
            Outside of Work, i am usually Gaming on my PC, or playing my Guitar.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="container mx-auto my-10 px-4 md:px-8">
        <div className="bg-darkAcc rounded-lg flex-col p-8 md:p-12 lg:p-9 xl:p-10 ">
          <p className="heading mb-6">What i do</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
            <div className="bg-dark flex flex-col gap-7 px-6 py-8 rounded-lg">
              <img
                className="w-52 h-40 mx-auto"
                src="./frontend.svg"
                alt="frontend development"
              />
              <p className="font-display text-alt text-3xl">
                Frontend Development
              </p>
              <p>Website design and conversion into code.</p>
            </div>
            <div className="bg-dark flex flex-col gap-7 px-6 py-8 rounded-lg">
              <img
                className="w-52 h-40 mx-auto"
                src="./backend.svg"
                alt="frontend development"
              />
              <p className="font-display text-alt text-3xl">
                Backend Development
              </p>
              <p>
                Server and database design and coding according to client
                requirements.
              </p>
            </div>
            <div className="bg-dark flex flex-col gap-7 px-6 py-8 rounded-lg">
              <img
                className="w-52 h-40 mx-auto"
                src="./mobile.svg"
                alt="frontend development"
              />
              <p className="font-display text-alt text-3xl">
                Mobile Apps development
              </p>
              <p>
                Both Frontend and Backend design and developement, linking with
                database and later hosting with preffered hosting website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Work */}
      <section className="container mx-auto my-10 px-4 md:px-8">
        <div className="bg-darkAcc rounded-lg flex flex-col p-4 md:p-8 lg:p-9 xl:p-10 gap-4">
          <p className="heading mb-4">My work</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
            <div className="bg-dark flex flex-col gap-7 px-6 py-8 rounded-lg">
              <img
                className="w-52 mx-auto"
                src="./fullstack.svg"
                alt="frontend development"
              />
              <p className="heading">Fullstack development with hosting</p>
              <p>
                Both Frontend and Backend design and developement, linking with
                database and later hosting with preffered hosting website.
              </p>
            </div>

            <div className="bg-dark flex flex-col gap-7 px-6 py-8 rounded-lg">
              <img
                className="w-52 mx-auto"
                src="./fullstack.svg"
                alt="frontend development"
              />
              <p className="heading">Fullstack development with hosting</p>
              <p>
                Both Frontend and Backend design and developement, linking with
                database and later hosting with preffered hosting website.
              </p>
            </div>

            <div className="bg-dark flex flex-col gap-7 px-6 py-8 rounded-lg">
              <img
                className="w-52 mx-auto"
                src="./fullstack.svg"
                alt="frontend development"
              />
              <p className="heading">Fullstack development with hosting</p>
              <p>
                Both Frontend and Backend design and developement, linking with
                database and later hosting with preffered hosting website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Say hi */}
      <section className="container mx-auto my-10 px-4 md:px-8">
        <div className="bg-darkAcc rounded-lg flex flex-col p-4 md:p-8 lg:p-9 xl:p-10 gap-4">
          <p className="heading">Say hi</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <p className="my-auto">Whatsapp:</p>
            <a href="https://wa.me/9038294698" className="hover:text-alt ">
              <img
                src="./whatsapp.svg"
                alt="whatsapp"
                className=" h-10 w-10 md:h-16 md:w-16"
              />
            </a>
            <p className="my-auto">Telegram:</p>
            <a href="https://t.me/joshdhar" className="">
              <img
                src="./telegram.svg"
                alt="telegram"
                className=" h-10 w-10 md:h-16 md:w-16"
              />
            </a>
            <p className="my-auto">Github:</p>
            <a href="https://github.com/JoshDhar">
              <img
                src="./github.svg"
                alt="github"
                className=" h-10 w-10 md:h-16 md:w-16"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
