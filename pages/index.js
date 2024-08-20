import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/ASIA.JPG";
import Image from "next/image";
import abra from "../public/abra.PNG";
import alien from "../public/alien.PNG";
import anim from "../public/anim.PNG";
import repo1 from "../public/repo1.PNG";
import snmc2 from "../public/snmc2.png";
import polidex from "../public/polidex.png";
import eye from "../public/eye.png";
import backend from "../public/back-end.png";
import others from "../public/others.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jermaine T. Asia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 dark:bg-black">
        <section className="min-h-screen">
          <nav className={`fixed top-0 left-0 right-0 py-5 mb-1 flex justify-between items-center z-10 border-b ${
            darkMode
              ? 'bg-black bg-black/40 text-white backdrop-blur-md border-ash'
              : 'bg-gray/80 text-gray-800 backdrop-blur-md border-black'
          }`}>
            <h1 className="font-burtons text-xl px-10 lg:px-40">My Portfolio</h1>
            <ul className="flex items-center space-x-4 px-10 lg:px-40">
              <li className="relative">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-shadow duration-300 ${
                    darkMode
                      ? 'bg-transparent hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                      : 'bg-transparent-200 hover:shadow-[0_0_10px_rgba(44,44,44,0.5)]'
                  }`}
                >
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className={`text-2xl ${
                      darkMode
                        ? 'text-gray-300 hover:text-teal-400'
                        : 'text-gray-700 hover:text-black'
                    }`}
                  />
                </div>
              </li>
              <li>
                <a
                  className="bg-blue-500 text-white border border-blue-600 px-4 py-2 pr-0 rounded-md flex items-center space-x-2 transition-colors duration-400 hover:bg-blue-600 dark:bg-metal dark:border-stone-700 dark:text-white dark:hover:bg-stone-900"
                  href="/Asia-Resume.pdf"
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // Security enhancement for external links
                >
                  Resume
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute -top-4 -right-1 inline-flex h-full w-full rounded-full bg-teal-900 opacity-75 dark:bg-gray-400 dark:opacity-75"></span>
                    <span className="relative inline-flex -top-4 -right-1 rounded-full h-4 w-4 bg-teal-400 dark:bg-gray-400"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="pt-40"></div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-200 dark:from-black via-transparent z-0 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-200 dark:from-black via-transparent z-0 pointer-events-none"></div>
            <div className="text-center p-10 py-0">
              <div className="absolute inset-y-0 left-0 w-3/12 border-r border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none dashed-circle right hidden 2xl:block"></div>
              <div className="absolute inset-y-0 right-0 w-3/12 border-l border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none dashed-circle left hidden 2xl:block"></div>

              <p className="pt-6 pb-4 text-md leading-8 dark:text-ash max-w-xl mx-auto md:text-xl">
                Hi, I am
              </p>
              
              <h2 className="text-5xl py-5 font-sans font-bold md:text-6xl bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-400 bg-gradient-to-b from-teal-600 to-blue-300 border-t border-b border-dashed border-gray-600 dark:border-stone-800 z-1">
              <TypeAnimation sequence={[
                "Jermaine T. Asia",
                3000,
                "A Software Developer",
                1000,
                "A Freelance Web Developer",
                1000,
              ]}
                wrapper="span"
                speed={50}
                className=""
                repeat={Infinity}
              />
              </h2>
              <div className="border-b border-dashed border-gray-600 dark:border-stone-800 border-t-0">
                <h3 className="text-2xl py-2 dark:text-ash md:text-3xl">
                  BS Information Technology (Recent Graduate)
                </h3>
                <p className="text-md py-5 leading-8 dark:text-ash max-w-xl mx-auto md:text-xl">
                  Freelancer providing services for <span className="text-teal-600 dark:text-white">programming and design</span> content
                  needs.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-2/6 border-r border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-2/6 border-l border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none"></div>
                <div className="pb-12 text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                  <AiFillGithub />
                  <AiFillLinkedin />
                  <AiFillFacebook />
                </div>
              </div>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 w-2/6 border-r border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-2/6 border-l border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none"></div>

                  <div className="absolute inset-y-20 right-0 w-full border-b border-dashed border-gray-600 dark:border-stone-800 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 left-1/2 z-0"></div>
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-200 dark:from-black via-transparent z-0 pointer-events-none"></div>
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-200 dark:from-black via-transparent z-0 pointer-events-none"></div>
                  
                <div className="mx-auto rounded-full relative overflow-hidden mt-0 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 border-dashed border border-gray-600 dark:border-stone-800">
                  <div className="relative w-full h-full">
                    <Image
                      src={deved}
                      layout="fill"
                      objectFit="contain"
                      alt="deved"
                      className="transition-transform duration-300 ease-in-out"
                      style={{
                        objectPosition: 'center', // Adjust this if necessary
                        transform: 'scale(1.6) translateY(8%) translateX(-1%)', // Adjust the zoom level and position
                        transformOrigin: 'center center', // Adjust the zoom origin point
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-44">
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-ash">
              I am Jermaine T. Asia, a recent graduate from Universidad de Manila with a Bachelor of Science in Information Technology.
              As an aspiring <span className="text-teal-600 dark:text-white"> Software Developer </span>
              and <span className="text-teal-600 dark:text-white"> IT professional</span>, 
              I have walked the path of creation, forging digital products in collaboration with talented minds, 
              shaping tools that serve both the ambitions of businesses and the desires of the individual.
            </p>
            <h3 className="text-3xl py-1 pt-10 dark:text-white ">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-ash">
              In the pursuit of excellence, I have embraced the diversity of skill and knowledge. 
              Each challenge is a step towards mastery, a reflection to the will to overcome and create. 
              My following skills are the tools through which I manifest my vision :
            </p>
          </div>

          <div className="px-44 mb-10 lg:flex gap-10">
            <div className="text-center p-10 rounded-xl my-10 border border-ash dark:bg-black flex-1 transition-colors duration-400 hover:bg-gray-300 dark:hover:bg-stone-900">
              <Image src={eye} width={100} height={100} alt="eye" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 dark:text-white">
                Frontend
              </h3>
              <p className="py-2 dark:text-ash">
                Creating decent web designs suited for your needs.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">Tools I Use</h4>
              <p className="dark:text-ash py-1">Vanilla Javascript</p>
              <p className="dark:text-ash py-1">ReactJS</p>
              <p className="dark:text-ash py-1">React Native</p>
              <p className="dark:text-ash py-1">NextJS</p>
              <p className="dark:text-ash py-1">TailwindCSS</p>
              <p className="dark:text-ash py-1">CSS</p>
            </div>

            <div className="text-center p-10 rounded-xl my-10 border border-ash dark:bg-black flex-1 transition-colors duration-400 hover:bg-gray-300 dark:hover:bg-stone-900">
              <Image src={backend} width={100} height={100} alt="backend" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 dark:text-white">
                Backend
              </h3>
              <p className="py-2 dark:text-ash">
                Proper functional implementation and constant quality checking for efficiency.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">Tools I Use</h4>
              <p className="dark:text-ash py-1">PHP</p>
              <p className="dark:text-ash py-1">Vanilla Javascript</p>
              <p className="dark:text-ash py-1">NodeJS</p>
              <p className="dark:text-ash py-1">Java</p>
              <p className="dark:text-ash py-1">C#</p>
              <p className="dark:text-ash py-1">Python</p>
            </div>

            <div className="text-center p-10 rounded-xl my-10 border border-ash dark:bg-black flex-1 transition-colors duration-400 hover:bg-gray-300 dark:hover:bg-stone-900">
              <Image src={others} width={100} height={100} alt="others" />
              <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 dark:text-white ">Others</h3>
              <p className="py-2 dark:text-ash">
                Others that serves as bonus.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-white">Tools I Use</h4>
              <p className="dark:text-ash py-1">MySQL Database</p>
              <p className="dark:text-ash py-1">MongoDB</p>
              <p className="dark:text-ash py-1">Linux Operating Systems</p>
              <p className="dark:text-ash py-1">Computer Troubleshooting</p>
              <p className="dark:text-ash py-1">Computer Networking</p>
              <p className="dark:text-ash py-1">Cybersecurity </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="px-44">
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-ash">
              Each project embodies the drive to innovate, 
              embracing challenges as opportunities to grow.
            </p>
          </div>
          <div className="px-44 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 flex flex-col">
                <Image
                    className="rounded-t-lg object-cover border-t border-x border-ash dark:bg-black"
                    width={"100%"}
                    height={"60%"}
                    alt="repo1"
                    layout="responsive"
                    src={repo1}
                />
                <div className="p-5 rounded-b-lg border-b border-x border-ash dark:bg-black flex-1 flex flex-col">
                    <h3 className="text-lg font-medium pb-3 text-teal-600 dark:text-white">Research Repository with Descriptive Analytics</h3>
                    <p className="text-sm leading-tight text-ellipsis dark:text-ash overflow-hidden">
                        This project uses Node.js for server-side logic, EJS for templating, and plain CSS for styling.
                        It integrates with the Google Drive API to store and organize PDF thesis papers by course and research type.
                        MongoDB manages the data, providing a secure and efficient way to store, manage, and view thesis papers for researchers.
                    </p>
                </div>
            </div>
            <div className="basis-1/4 flex-1 flex flex-col">
                <Image
                    className="rounded-t-lg object-cover border-t border-x border-ash dark:bg-black"
                    width={"100%"}
                    height={"60%"}
                    layout="responsive"
                    alt="abra"
                    src={abra}
                />
                <div className="p-5 rounded-b-lg border-b border-x border-ash dark:bg-black flex-1 flex flex-col">
                    <h3 className="text-lg font-medium pb-3 text-teal-600 dark:text-white">Abreños Sectoral Management System</h3>
                    <p className="text-sm leading-tight text-ellipsis dark:text-ash overflow-hidden">
                        This website was developed as part of our On-the-Job training at Publicus Asia Inc.
                        We utilized PHP for server-side scripting and MySQL for the backend within phpMyAdmin,
                        while the frontend was built using HTML, CSS, and JavaScript.
                    </p>
                </div>
            </div>
            <div className="basis-1/4 flex-1 flex flex-col">
                <Image
                    className="rounded-t-lg object-cover border-t border-x border-ash dark:bg-black"
                    width={"100%"}
                    height={"60%"}
                    layout="responsive"
                    alt="polidex"
                    src={polidex}
                />
                <div className="p-5 rounded-b-lg border-b border-x border-ash dark:bg-black flex-1 flex flex-col">
                  <h3 className="text-lg font-medium pb-3 text-teal-600 dark:text-white">Polidex (Web-based Survey Creator)</h3>
                    <p className="text-sm leading-tight text-ellipsis dark:text-ash overflow-hidden">
                    Polidex Survey is a web application designed to streamline the process of creating, distributing, and analyzing surveys. 
                    Built using Node.js for the backend, Tailwind CSS for styling, and other modern web technologies, 
                    Polidex Survey offers a user-friendly interface that makes it easy for users to design and manage surveys.
                    </p>
                </div>
            </div>
            <div className="basis-1/4 flex-1 flex flex-col">
                <Image
                    className="rounded-t-lg object-cover border-t border-x border-ash dark:bg-black"
                    width={"100%"}
                    height={"60%"}
                    layout="responsive"
                    alt="snmc2"
                    src={snmc2}
                />
                <div className="p-5 rounded-b-xl border-b border-x border-ash dark:bg-black flex-1 flex flex-col">
                  <h3 className="text-lg font-medium pb-3 text-teal-600 dark:text-white">Operators and Drivers Management System</h3>
                    <p className="text-sm leading-tight text-ellipsis dark:text-ash overflow-hidden">
                    Operators and Drivers Management System is a specialized web application designed 
                    to manage and organize information related to tricycle operators and drivers, 
                    commonly known as &quot;TODA&quot; (Tricycle Operators and Drivers Association). 
                    The system is built using PHP for server-side scripting, 
                    MySQL for database management, and Tailwind CSS for a responsive and modern user interface.
                    </p>
                </div>
            </div>
            <div className="basis-1/4 flex-1 flex flex-col">
                <Image
                    className="rounded-t-lg object-cover border-t border-x border-ash dark:bg-black"
                    width={"100%"}
                    height={"60%"}
                    layout="responsive"
                    alt="anim"
                    src={anim}
                />
                <div className="p-5 rounded-b-xl border-b border-x border-ash dark:bg-black flex-1 flex flex-col">
                  <h3 className="text-lg font-medium pb-3 text-teal-600 dark:text-white">Alyansa ng Nagkakaisang Mamamayan(ANIM)</h3>
                    <p className="text-sm leading-tight text-ellipsis dark:text-ash overflow-hidden">
                    Alyansa ng Nagkakaisang Mamamayan (ANIM) is a dedicated web page designed to serve as a gallery for political campaigns. 
                    The primary purpose of this page is to showcase images and other media related to the political activities, events, and campaigns organized by ANIM.
                    </p>
                </div>
            </div>
            <div className="basis-1/4 flex-1 flex flex-col">
                <Image
                    className="rounded-t-lg object-cover border-t border-x border-ash dark:bg-black"
                    width={"100%"}
                    height={"60%"}
                    layout="responsive"
                    alt="alien"
                    src={alien}
                />
                <div className="p-5 rounded-b-xl border-b border-x border-ash dark:bg-black flex-1 flex flex-col">
                  <h3 className="text-lg font-medium pb-3 text-teal-600 dark:text-white">2D Space Invaders</h3>
                    <p className="text-sm leading-tight text-ellipsis dark:text-ash overflow-hidden">
                    2D Space Invaders is a classic arcade-style game recreated using Python, a popular programming language known for its simplicity and versatility. 
                    The game is a 2D shooter where the player controls a spaceship and must defend Earth from waves of descending alien invaders.
                    </p>
                </div>
            </div>
          </div>

        </section>
        <footer className="border-t border-black dark:border-t dark:border-ash footer footer-center bg-base-300 text-base-content p-4 text-black dark:text-ash">
        <center>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Jermaine T. Asia</p>
        </center>
        </footer>
      </main>
    </div>
  );
}
