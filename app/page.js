import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Startanator
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Where tech dreams find their perfect match ✨
          </p>
        </div>

        <div className="max-w-2xl text-center sm:text-left">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Hey there! I'm a 17-year-old developer who built Startanator to help tech enthusiasts like you find their tribe. 
            Whether you're looking for co-founders, friends, or just someone to geek out about the latest tech trends with, 
            you're in the right place!
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white gap-2 hover:opacity-90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/signup"
          >
            Join the Community
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Find Co-founders</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Connect with like-minded tech enthusiasts</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Build Together</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Collaborate on exciting projects</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="font-semibold mb-2">Grow Your Network</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Make friends in the tech community</p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        <p>Made with 💜 by a 17-year-old developer</p>
      </footer>
    </div>
  );
}
