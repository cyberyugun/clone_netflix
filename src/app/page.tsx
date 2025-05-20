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

const trendingShows = [
  { title: "You", number: "1" },
  { title: "FOREVER", number: "2" },
  { title: "Black Mirror", number: "3" },
  { title: "Nonnas", number: "4" },
  { title: "Havoc", number: "5" },
  { title: "Love, Death & Robots", number: "6" },
  { title: "Exterritorial", number: "7" },
  { title: "Peppa Pig", number: "8" },
  { title: "The Four Seasons", number: "9" },
  { title: "All American", number: "10" }
];

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-b from-black via-black/80 to-transparent">
        <h1 className="text-red-600 text-4xl font-bold tracking-wider">NETFLIX</h1>
        <div className="flex items-center gap-4">
          <Select defaultValue="en">
            <SelectTrigger className="w-[120px] bg-transparent border border-white/30 text-white hover:bg-white/10">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-1">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/60 before:via-black/40 before:to-black"
        style={{
          backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/US-en-20250512-TRIFECTA-perspective_a6515802-34a4-4f19-947a-47380b934c44_large.jpg')"
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Unlimited movies, TV shows, and more
          </h2>
          <p className="text-xl md:text-2xl mb-6">
            Starts at $7.99. Cancel anytime.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-[600px] mx-auto">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-black/60 border-[0.5px] border-gray-600 text-white h-14 text-lg px-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white text-lg h-14 px-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Ad-supported Plan Banner */}
      <section className="bg-[#1a1a1a] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            The Netflix you love for just $7.99.
          </h3>
          <p className="text-lg mb-6">Get our most affordable, ad-supported plan.</p>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium">
            Learn More
          </Button>
        </div>
      </section>

      {/* Trending Shows */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Trending Now</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {trendingShows.map((show) => (
              <div key={show.number} className="relative aspect-[2/3] bg-[#141414] rounded-md overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-600 group-hover:text-gray-400">
                  {show.number}
                </div>
                <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black">
                  <p className="text-sm font-medium">{show.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
              <i className="fas fa-tv text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Enjoy on your TV</h4>
            <p className="text-gray-300">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
              <i className="fas fa-download text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Download your shows</h4>
            <p className="text-gray-300">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
              <i className="fas fa-globe text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Watch everywhere</h4>
            <p className="text-gray-300">
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-600 rounded-full flex items-center justify-center">
              <i className="fas fa-child text-3xl"></i>
            </div>
            <h4 className="text-xl font-bold mb-4">Create profiles for kids</h4>
            <p className="text-gray-300">
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-0"
              >
                <AccordionTrigger className="px-6 py-6 text-xl font-medium bg-[#2D2D2D] hover:bg-[#4D4D4D]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-6 text-lg bg-[#2D2D2D] mt-[1px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer Email Section */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-[600px] mx-auto">
            <Input
              type="email"
              placeholder="Email address"
              className="bg-black/60 border-[0.5px] border-gray-600 text-white h-14 text-lg px-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white text-lg h-14 px-8">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
