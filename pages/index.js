import Head from "next/head";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme("dark");
  return (
    <div className="">
      <Head>
        <title>Prabhav</title>
        <meta name="description" content="Prabhav's Personal profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sm:flex sm:justify-between sm:space-x-4 sm:py-6 sm:bg-gray-50 sm:w-screen sm:rounded-b-md">
        <img
          src="./logo-nobg-new.png"
          width="5%"
          height="2%"
          className="ml-4"
        ></img>
        <div className="flex justify-center items-center">
          {[
            ["Home", "/dashboard", 1],
            ["Projects", "/projects", 2],
            ["Contact", "/contact", 3],
          ].map(([title, url, index]) => (
            <a
              // href={url}
              className="rounded-lg px-3 py-2 text-slate-400 font-semibold text-xl hover:bg-slate-100 hover:decoration-4 hover:text-slate-900 cursor-pointer duration-250"
              key={index}
            >
              {title}
            </a>
          ))}
        </div>
        {/* <div class="flex flex-col justify-center">
          <div class="form-check form-switch ml-16">
            <input
              className="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div>
            <label
              className="form-check-label inline-block text-gray-800"
              for="flexSwitchCheckDefault"
            >
              Theme
            </label>
          </div>
        </div> */}
        <div className="px-4 flex justify-center items-center">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 rounded-full bg-slate-400 flex justify-center items-center"
            id="flexSwitchCheckDefault"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          </button>
        </div>
      </nav>
      {/* <h1 className="text-3xl font-bold text-center underline">Hello world!</h1> */}
      <div className="flex flex-row justify-around">
        <div className="flex justify-center w-1/2 items-center py-16">
          <div className="w-1/2">
            <img src="./profile.jpg" width="90%" className="rounded-lg"></img>
          </div>
        </div>
        <div className="pt-16 text-center text-lg w-1/2">
          <header className="mb-4 group text-blue-700">
            <h2 className="mb-1 font-mono text-xl dark:text-green-400 md:text-2xl">
              Welcome to <br className="block md:hidden" />
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change">
                Prabhav's world!
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-12 animate-cursor will-change"></span>
            </h2>
            {/* <div className="text-xl font-semibold md:text-3xl">
              developer by choice and designer for fun
            </div> */}
          </header>
          <p className="text-left">
            I am a growing front-end developer with a keen interest in learning
            backend programming in python. I have worked on many personal sample
            website projects with HTML5, CSS3, JavaScript in the past 3 years,
            and I am learning ReactJS for the past few months. I created the
            website for my school Model United Nations which was a state-level
            event. The website attracted almost 30% more delegates than our
            previous edition of the MUN. I am also a website designer as I have
            a working knowledge of Adobe XD and can work in UI/UX design roles.
            I have an orientation towards leadership roles as I build my
            school's first Computer Club, which currently has more than 200
            students as members, and I trained them in Web Development and UI/UX
            design. I am currently interested in building new projects so I am
            trying to take part in a lot of Hackathons and delving into
            competitive coding.
          </p>
        </div>
      </div>
    </div>
  );
}
