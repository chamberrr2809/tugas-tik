import Head from "next/head";
import Image from "next/image";
import styles, { layout } from "../styles";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chamberrr | Home</title>
      </Head>
      <div className={`${styles.boxWidth} bg-hero overflow-y-hidden`}>
        <Navbar textColor={"white"} />
        <div
          className={`${styles.flexCenter} flex-row ${styles.paddingY} h-screen ${styles.paddingX} gap-24`}
        >
          <div>
            <p
              className={`text-5xl font-bold hero-animate delay-75 text-gradient`}
            >
              Hi, I&apos;m Chamberrr
            </p>
            <p className={`font-semibold hero-animate text-slate-200 text-2xl`}>
              Student • Fullstack Developer
            </p>
            <div className="flex hero-animate flex-row gap-3 mt-2">
              <div className="w-16 bg-opacity-0 cursor-pointer bg-slate-500 transition-all hover:bg-opacity-100 duration-300 flex justify-center align-center h-16 border p-3">
                <Image
                  src="/img/instagram.png"
                  width="128px"
                  height="128px"
                  alt="Instagram"
                />
              </div>
              <div className="w-16 bg-opacity-0 cursor-pointer bg-slate-500 transition-all hover:bg-opacity-100 duration-300 flex justify-center align-center h-16 border p-3">
                <Image
                  src="/img/github.png"
                  width="128px"
                  height="128px"
                  alt="Instagram"
                />
              </div>
            </div>
          </div>
          <Image
            draggable="false"
            src="/img/header-img.svg"
            width="512px"
            alt="Astronaut"
            className="image-animate transition-all"
            height="512px"
          />
        </div>
      </div>
    </>
  );
}
