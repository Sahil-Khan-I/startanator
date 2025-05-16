"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Animated Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-900 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-900 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-60 w-80 h-80 bg-violet-900 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative px-7 py-4 bg-gray-900 border border-indigo-800 rounded-lg">
              <span className="text-sm font-medium text-indigo-400">Made by a 17-year-old who gets it</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
              Startanator
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-300 max-w-2xl mx-auto font-medium">
              Where tech minds connect and build the future together
            </p>
          </div>

          <div className="max-w-2xl text-center">
            <p className="text-lg text-gray-400">
              Finding like-minded people in tech shouldn&apos;t be hard. Whether you want to build the next big thing or just a useful tool that makes life better, Startanator helps you find the people who share your vision and complement your skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Link 
              href="/signup"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-indigo-600 p-0.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-indigo-800"
            >
              <span className="relative px-8 py-3.5 transition-all ease-in duration-150 rounded-md">
                Find Your Tech Tribe
              </span>
            </Link>
            <Link
              href="/how-it-works"
              className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden text-sm font-medium text-white border-2 border-indigo-600 rounded-lg hover:bg-indigo-900 group"
            >
              <span className="relative z-10">How It Works</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Why Startanator Exists</h2>
            <p className="text-lg text-gray-400">
              I built Startanator because as a teen in tech, I realized how hard it is to find people who understand your ideas and share your passion. 
              The next wave of innovation won&apos;t come from lone wolves, but from collaborative teams with diverse skills and shared enthusiasm.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="relative group">
              <div className="relative px-6 py-8 bg-gray-900 border border-gray-800 rounded-lg flex flex-col h-full hover:border-indigo-600 transition-colors duration-300">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-900/30 mb-6">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">Connect Authentically</h3>
                <p className="text-gray-400 flex-grow">Find people who get your jokes, understand your references, and share your tech obsessions.</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative px-6 py-8 bg-gray-900 border border-gray-800 rounded-lg flex flex-col h-full hover:border-indigo-600 transition-colors duration-300">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-900/30 mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">Build What Matters</h3>
                <p className="text-gray-400 flex-grow">Whether it&apos;s a revolutionary AI system or a simple app that solves a real problem, build things that matter.</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative px-6 py-8 bg-gray-900 border border-gray-800 rounded-lg flex flex-col h-full hover:border-indigo-600 transition-colors duration-300">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-violet-900/30 mb-6">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">Learn & Grow Together</h3>
                <p className="text-gray-400 flex-grow">Accelerate your skills by working with others. The fastest way to level up is through collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="relative bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">How Startanator Works</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We&apos;ve made it simple to find your perfect tech match - whether you&apos;re looking for cofounders, project partners, or just friends who speak your language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-400">1</span>
              </div>
              <h3 className="font-semibold mb-3 text-white">Create Your Profile</h3>
              <p className="text-gray-400">Share your skills, interests, and the kind of projects you want to build.</p>
            </div>
            
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-400">2</span>
              </div>
              <h3 className="font-semibold mb-3 text-white">Match Algorithm</h3>
              <p className="text-gray-400">Our tech matches you with people who complement your skills and share your interests.</p>
            </div>
            
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-400">3</span>
              </div>
              <h3 className="font-semibold mb-3 text-white">Connect & Chat</h3>
              <p className="text-gray-400">Get to know your matches through our chat system designed for tech discussions.</p>
            </div>
            
            <div className="text-center">
              <div className="relative mx-auto w-16 h-16 rounded-full bg-indigo-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-indigo-400">4</span>
              </div>
              <h3 className="font-semibold mb-3 text-white">Build Together</h3>
              <p className="text-gray-400">Use our collaboration tools to turn your ideas into reality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Real Connections, Real Projects</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From simple browser extensions to full-scale startups, see what Startanator members are building together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-indigo-900 p-6 rounded-xl">
            <div className="flex gap-4 items-start mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-900 flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-400">AJ</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Ali & Josh</h3>
                <p className="text-sm text-gray-500">Met on Startanator 3 months ago</p>
              </div>
            </div>
            <p className="text-gray-400">
              &quot;We were both passionate about AR but working on separate projects. Now we&apos;re building an educational AR platform that just got its first school district pilot!&quot;
            </p>
          </div>

          <div className="bg-gray-900 border border-violet-900 p-6 rounded-xl">
            <div className="flex gap-4 items-start mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-violet-900 flex items-center justify-center">
                <span className="text-xl font-bold text-violet-400">SM</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Sarah & Mina</h3>
                <p className="text-sm text-gray-500">Found each other through shared interests</p>
              </div>
            </div>
            <p className="text-gray-400">
              &quot;I was a backend developer looking to learn AI. Mina was an AI researcher who needed help scaling. Now we&apos;re building our third project together!&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="relative bg-gray-900 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">From Simple to Extraordinary</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Whether you want to create something simple but useful or something that changes the world, you&apos;ll find your people here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-950 rounded-xl overflow-hidden">
              <div className="h-48 bg-indigo-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-white">Simple Browser Extensions</h3>
                <p className="text-gray-400 mb-4">Small tools that make a big difference in daily browsing experience.</p>
                <span className="text-xs font-medium bg-indigo-900/30 text-indigo-400 py-1 px-2 rounded-full">Beginner Friendly</span>
              </div>
            </div>
            
            <div className="bg-gray-950 rounded-xl overflow-hidden">
              <div className="h-48 bg-blue-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-white">Useful Mobile Apps</h3>
                <p className="text-gray-400 mb-4">Apps that solve real problems for specific communities or interests.</p>
                <span className="text-xs font-medium bg-blue-900/30 text-blue-400 py-1 px-2 rounded-full">Most Popular</span>
              </div>
            </div>
            
            <div className="bg-gray-950 rounded-xl overflow-hidden">
              <div className="h-48 bg-violet-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-white">World-Changing Startups</h3>
                <p className="text-gray-400 mb-4">Ambitious projects aiming to transform industries and create new possibilities.</p>
                <span className="text-xs font-medium bg-violet-900/30 text-violet-400 py-1 px-2 rounded-full">Ambitious</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join */}
      <div className="relative container mx-auto px-4 py-24">
        <div className="bg-gray-900 border border-indigo-800 p-8 sm:p-14 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Find Your Tech Tribe?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Join thousands of other tech enthusiasts who believe that together, we can build more, learn faster, and have more fun along the way.
            </p>
            <Link 
              href="/signup"
              className="inline-flex items-center rounded-md bg-indigo-600 px-8 py-4 text-base font-medium text-white hover:bg-indigo-700 transition-colors"
            >
              Join Startanator Today
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">1,000+</div>
              <div className="text-sm text-gray-400">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">120+</div>
              <div className="text-sm text-gray-400">Projects Started</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">45+</div>
              <div className="text-sm text-gray-400">Success Stories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="text-3xl font-bold text-white">
              Startanator
            </div>
            <p className="text-base text-gray-400 max-w-md">
              Building the future of tech, one connection at a time.
              Made with passion by a 17-year-old who believes in the power of collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">
                Blog
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-indigo-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-indigo-400 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              © 2023 Startanator. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Add these animations to your globals.css */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: scale(1); }
          33% { transform: scale(1.1); }
          66% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
