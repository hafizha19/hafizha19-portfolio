import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Parser from 'rss-parser'

async function getData() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://medium.com/feed/@mzhaaf');

  if (!feed.items) {
    throw new Error('Failed to fetch data');
  }

  const blogs = feed.items
  .slice(0, 3);

  return blogs;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      {/* <Skills /> */}
      <AboutSection />
      <Experience />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};