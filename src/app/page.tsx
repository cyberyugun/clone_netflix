"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const faqData = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $7.99 to $24.99 a month (pre-tax). No extra costs, no contracts."
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
  },
  {
    question: "Is Netflix good for kids?",
    answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
  }
];

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 flex items-center justify-between px-8 py-6 bg-gradient-to-b from-black/80 via-black/60 to-transparent">
        <svg viewBox="0 0 111 30" className="h-6 md:h-8 text-[#e50914] fill-current" aria-hidden="true" focusable="false">
          <g>
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
          </g>
        </svg>
        <div className="flex items-center gap-4">
          <div className="w-[120px]">
            <Select defaultValue="en">
              <SelectTrigger className="h-8 bg-transparent border border-white/30 text-white text-sm hover:bg-black/30">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent className="bg-[#000000E6] border border-white/10">
                <SelectItem value="en" className="text-white hover:bg-white/10">English</SelectItem>
                <SelectItem value="id" className="text-white hover:bg-white/10">Bahasa Indonesia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="h-8 px-4 bg-[#e50914] hover:bg-[#c11119] text-white text-sm font-medium rounded">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center px-4 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/US-en-20250512-TRIFECTA-perspective_a6515802-34a4-4f19-947a-47380b934c44_large.jpg')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60"
      >
        <div className="relative z-10 max-w-3xl mx-auto pt-[72px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-5">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-5">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-[640px] mx-auto px-8">
            <div className="relative flex-grow min-w-[240px]">
              <Input
                type="email"
                placeholder="Email address"
                className="w-full h-14 px-4 bg-black/60 border border-[#ffffff4d] rounded text-white placeholder:text-[#ffffffb3] focus:outline-none focus:border-[#0071eb] focus:ring-1 focus:ring-[#0071eb]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="absolute left-4 top-1 text-xs text-[#ffffffb3]">
                Email address
              </label>
            </div>
            <Button className="h-14 px-8 bg-[#e50914] hover:bg-[#c11119] text-white text-xl sm:text-2xl font-medium rounded">
              Get Started
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t-8 border-[#232323] bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Enjoy on your TV
              </h2>
              <p className="text-lg sm:text-xl text-[#ffffffb3]">
                Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="TV"
                className="relative z-10"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <video 
                  className="w-[73%] h-[54%] object-cover"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source 
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Feature */}
      <section className="py-16 border-t-8 border-[#232323] bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1">
              <div className="relative max-w-[400px] mx-auto">
                <img 
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                  alt="Mobile"
                  className="relative z-10"
                />
                <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex items-center bg-black border-2 border-[#232323] rounded-xl p-2 w-[60%]">
                  <img 
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    alt="Stranger Things"
                    className="h-16 mr-4"
                  />
                  <div className="flex-grow">
                    <div className="text-white font-medium">Stranger Things</div>
                    <div className="text-blue-500 text-sm">Downloading...</div>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                      alt="Download"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Download your shows to watch offline
              </h2>
              <p className="text-lg sm:text-xl text-[#ffffffb3]">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Watch Everywhere */}
      <section className="py-16 border-t-8 border-[#232323] bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Watch everywhere
              </h2>
              <p className="text-lg sm:text-xl text-[#ffffffb3]">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                alt="Devices"
                className="relative z-10"
              />
              <div className="absolute top-[34%] left-[19%] w-[62%]">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source 
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Profile */}
      <section className="py-16 border-t-8 border-[#232323] bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="order-2 md:order-1">
              <img 
                src="https://occ-0-6707-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQcTxEKX8MfoiGUCQZn9mghDCXWtkphE0O3cHAmpDHgqG4Dh7NCjF2_r2ieEdQRo8q9HlGghZTi1KUeh01dg18S.png?r=df6"
                alt="Kids"
                className="w-full"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                Create profiles for kids
              </h2>
              <p className="text-lg sm:text-xl text-[#ffffffb3]">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t-8 border-[#232323] bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-0"
              >
                <AccordionTrigger className="px-6 py-6 text-xl sm:text-2xl font-medium bg-[#2D2D2D] hover:bg-[#4D4D4D] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 text-lg sm:text-xl bg-[#2D2D2D] mt-[1px] text-[#ffffffb3]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg sm:text-xl mb-4">
              Ready to watch? Enter your email to create or restart your membership.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center max-w-[640px] mx-auto">
              <div className="relative flex-grow min-w-[240px]">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-14 px-4 bg-black/60 border border-[#ffffff4d] rounded text-white placeholder:text-[#ffffffb3] focus:outline-none focus:border-[#0071eb] focus:ring-1 focus:ring-[#0071eb]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="absolute left-4 top-1 text-xs text-[#ffffffb3]">
                  Email address
                </label>
              </div>
              <Button className="h-14 px-8 bg-[#e50914] hover:bg-[#c11119] text-white text-xl sm:text-2xl font-medium rounded">
                Get Started
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t-8 border-[#232323] bg-black text-[#ffffffb3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            Questions? Call <a href="tel:007-803-321-2130" className="hover:underline">007-803-321-2130</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Speed Test</a></li>
            </ul>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Ways to Watch</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
              <li><a href="#" className="hover:underline">Only on Netflix</a></li>
            </ul>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="mt-8">
            <div className="w-[120px]">
              <Select defaultValue="en">
                <SelectTrigger className="h-8 bg-transparent border border-[#ffffff4d] text-white text-sm hover:bg-black/30">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent className="bg-[#000000E6] border border-[#ffffff4d]">
                  <SelectItem value="en" className="text-white hover:bg-white/10">English</SelectItem>
                  <SelectItem value="id" className="text-white hover:bg-white/10">Bahasa Indonesia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 text-sm">
            Netflix Indonesia
          </div>
        </div>
      </footer>
    </div>
  );
}
