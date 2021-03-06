import Head from "next/head";
import { useTheme } from "next-themes";
import Image from "next/image";
import Projects from "../components/Projects";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";

export default function Home() {
  const { theme, setTheme } = useTheme("dark");
  return (
    <div className="">
      <Head>
        <title>Prabhav</title>
        <meta name="description" content="Prabhav's Personal profile" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <nav className="sm:flex sm:justify-between dark:bg-black sm:space-x-4 sm:py-6 sm:bg-gray-50 sm:w-screen sm:rounded-b-md">
        <div className="logo font-mono ml-4">
          <h2 className="text-3xl">
            <span className="text-blue-700 dark:text-blue-300">&lt;</span>
            <span className="text-pink-400 dark:text-terminal">PK</span>
            <span className="text-blue-700 dark:text-blue-300">/&gt;</span>
          </h2>
        </div>
        <div className="flex justify-center items-center">
          {[
            ["Home", "#home", 1],
            ["Projects", "#projects", 2],
            ["Works", "#works", 3],
            ["Contact", "#contact", 3],
          ].map(([title, url, index]) => (
            <a
              href={url}
              className="px-3 py-2 text-blue-500 dark:text-rose-300 dark:hover:text-black font-semibold text-xl hover:font-bold hover:decoration-4 dark:hover:text-rose-500 duration-250 border-b-2 border-double border-transparent hover:border-current cursor-pointer select-none"
              key={index}
            >
              {title}
            </a>
          ))}
        </div>
        <div className="px-4 flex justify-center items-center" id="home">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 rounded-full bg-slate-200 dark:bg-gray-900 border-4 border-pink-400 dark:border-terminal flex justify-center items-center"
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
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="flex justify-center w-full sm:w-1/2 items-center py-16">
          <div className="w-full sm:w-1/2">
            <Image alt="profile" src="/profile2.jpg" width="80%" height="100%" layout="responsive" className="rounded-lg"></Image>
          </div>
        </div>
        <div className="pt-16 text-center text-lg w-full sm:w-1/2">
          <header className="mb-4 group text-blue-700">
            <h2 className="mb-1 font-mono text-xl dark:text-terminal md:text-2xl">
              Hello <br className="block md:hidden" />
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change">
                world!
              </span>
              <span className="box-border inline-block w-1 h-10 ml-2 mb-2 bg-black dark:bg-white md:-mb-4 md:h-12 animate-cursor will-change"></span>
            </h2>
          </header>
          <p className="text-left font-montserrat w-11/12 pl-4">
            I am a growing full-stack developer with a passion for building web applications. I have a strong background in back-end development and have worked on a wide range of projects. I am currently a second year student at the University of Waterloo.
            Right now I am trying to explore the world of software development and its various features and technologies. From a middle school student who build a &ldquo;Fake Virus&rdquo; to scare my teacher, I have grown into a developer who is keen on solving problems to help people.
            Currently, I am working with a student design team in Waterloo called Midnight Sun, where I lead my team in helping optimize the performance of a solar car. This job is not only a great learning experience but also a great opportunity to learn new technologies and work on projects that I have never seen before.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <svg className="animate-bounce w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </svg>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="works">
        <Works />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <Scroll showBelow={200} />
    </div>
  );
}
