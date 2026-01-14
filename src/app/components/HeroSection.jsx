import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 place-self-center">
        <section>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 text-white">
            Hello, I am Chetan
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-2 text-[#64ffda]">
            Full Stack Developer & Tech Enthusiast
          </h2>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            I build modern, scalable web applications and love exploring new technologies. Let's create something amazing together!
          </p>

          <div className="flex gap-4 mb-6">
            <a
              href="https://mail.google.com/mail/u/0/?to=chetandevkar.engg@gmail.com&fs=1&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#64ffda] text-black font-semibold rounded shadow hover:bg-[#52e0c4] transition"
            >
              Contact Me
            </a>
            <a
              href="/files/Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-[#64ffda] text-[#64ffda] font-semibold rounded hover:bg-[#64ffda] hover:text-black duration-300 transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ChetanDevkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                className="text-[#ADB7BE] hover:text-[#64ffda] transition"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/chetan-devkar-3a80bb287/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="28"
                height="28"
                fill="currentColor"
                className="text-[#ADB7BE] hover:text-[#64ffda] transition"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
              </svg>
            </a>

            <a
              href="https://leetcode.com/u/ChetanDevkar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <Image
                src="/leetcode.svg"
                width={28}
                height={28}
                alt="LeetCode"
                className="text-[#ADB7BE] hover:text-[#64ffda] transition bg-[#ADB7BE] hover:bg-[#64ffda] rounded-md"
              />
            </a>
          </div>
        </section>
      </div>

      {/* CHANGED PART: circular photo */}
      <div className="col-span-5">
        <div className="p-4 w-[300px] h-[300px] mx-auto flex items-center justify-center rounded-full overflow-hidden shadow-lg bg-[#181818] hover:shadow-gray-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <Image
            src="/images/coder.png"   // or your own photo path
            alt="hero Image"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
