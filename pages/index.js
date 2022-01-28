import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Prabhav</title>
        <meta name="description" content="Prabhav's Personal profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex sm:justify-between space-x-4 py-6 bg-gray-500 w-screen rounded-b-md">
        <button>Logo</button>
        <div className="flex justify-center">
          {[
            ["Home", "/dashboard"],
            ["Team", "/team"],
            ["Projects", "/projects"],
            ["Reports", "/reports"],
          ].map(([title, url]) => (
            <a
              // href={url}
              className="rounded-lg px-3 py-2 text-white text-xl hover:bg-slate-100 hover:text-slate-600 cursor-pointer duration-500"
            >
              {title}
            </a>
          ))}
        </div>

        <button className="border bg-blue-200 rounded-lg text-slate-600 px-1 py-2 hover:bg-blue-500 hover:text-gray-100 duration-500 mr-4">Get Resume</button>
      </nav>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
