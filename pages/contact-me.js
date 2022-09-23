import Head from "next/head";
import styles from "../styles";
import Navbar from "./Navbar";

export default function ContactMe() {
  function handleSubmit(e) {
    const formData = new FormData(e.target);
  }
  return (
    <>
      <Head>
        <title>Chamberrr | Contact Me</title>
      </Head>
      <div
        className={`${styles.boxWidth} bg-gradient-to-r from-green-300 via-blue-500 to-purple-600`}
      >
        <Navbar textColor="white" />
        <div
          className={`${styles.flexCenter} rounded-lg bg-white flex-col ${styles.paddingY} ${styles.marginX} gap-3`}
        >
          <div className="flex flex-col">
            <p className="font-bold text-3xl text-slate-700 text-center">
              Contact Me
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="flex gap-5 flex-row">
                <div className="flex flex-col">
                  <label
                    className="mt-3 font-bold text-slate-600 text-xl text-start"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="bg-slate-700 shadow-lg text-gray-200 text-lg w-96 max-w-full px-5 py-3 outline-none border-b-2 rounded-md font-semibold"
                    placeholder="Email"
                    required
                  />
                  <label
                    className="mt-3 font-bold text-slate-700 text-xl text-start"
                    htmlFor="reason"
                  >
                    Alasan
                  </label>
                  <select
                    className="bg-slate-700 py-3 px-2 font-bold text-white text-lg border-b-2 rounded-md outline-none"
                    id="reason"
                  >
                    <option selected disabled>
                      Pilih satu
                    </option>
                    <option>Mengirim pesan</option>
                    <option>Ingin menulis Blog</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    className="mt-3 font-bold text-slate-600 text-xl text-start"
                    htmlFor="email"
                  >
                    Name
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="bg-slate-700 shadow-lg text-gray-200 text-lg w-96 max-w-full px-5 py-3 outline-none border-b-2 rounded-md font-semibold"
                    placeholder="Name"
                    required
                  />
                  <label
                    className="mt-3 font-bold text-slate-600 text-xl text-start"
                    htmlFor="jenis"
                  >
                    Jenis Kelamin
                  </label>
                  <select
                    className="bg-slate-700 py-3 px-2 font-bold text-white text-lg border-b-2 rounded-md outline-none"
                    id="jenis"
                  >
                    <option selected disabled>
                      Pilih satu
                    </option>
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
              <label
                className="mt-3 font-bold text-slate-700 text-xl text-start"
                htmlFor="message"
              >
                Pesan
              </label>
              <textarea
                className="bg-slate-700 shadow-lg text-gray-200 text-lg w-full h-32 max-w-full px-5 py-3 outline-none border-b-2 rounded-md font-semibold"
                name="message"
                id="message"
                placeholder="Pesan"
              />
              <button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2 px-3 text-white text-md w-96 font-bold rounded-md">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
