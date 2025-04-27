import React from "react";

import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import { useVideoScroll } from "./hooks/useVideoScroll";
import useScrollSpy from './hooks/useScrollSpy';
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import WorkSection from './components/WorkSection';
import useAnimateOnScroll from './hooks/useAnimateOnScroll';
import Footer from './components/Footer';

import './css/main.css';


function App() {
  useVideoScroll();
  useScrollSpy();
  useAnimateOnScroll();

  return (
    <div>
      <Header/>
      <main>
        <VideoPlayer/>
        <HomeSection/>
        <AboutSection/> 
        <SkillsSection/>
        <WorkSection/>
      </main>
       <Footer/>
    </div>
  );
}

export default App;
