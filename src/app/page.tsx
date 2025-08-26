"use client";

import React, { useState, useEffect } from 'react';
import { Intro } from '@/components/sections/intro';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { TetrisSection } from '@/components/sections/tetris-section';
import { Section } from '@/components/section';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Set initial scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Total height of the scrollable area, determines the "length" of the animation.
  const sceneHeight = 6000;
  // Each section's "active" scroll duration.
  const sectionHeight = sceneHeight / 4;

  const getSectionStyle = (sectionIndex: number): React.CSSProperties => {
    const sectionStart = sectionIndex * sectionHeight;
    const progress = (scrollY - sectionStart) / sectionHeight;

    let opacity = 0;
    let scale = 0.95;
    let y = 20;

    // Animate based on progress within the section's scroll area
    if (progress >= -0.5 && progress <= 1.5) {
      // Fade in
      if (progress < 0.25 && progress > -0.5) {
        opacity = (progress + 0.5) / 0.75;
        scale = 1 - (0.25 - progress) * 0.1;
        y = (0.25 - progress) * 40;
      } 
      // Fully visible
      else if (progress >= 0.25 && progress <= 0.75) {
        opacity = 1;
        scale = 1;
        y = 0;
      } 
      // Fade out
      else if (progress > 0.75 && progress <= 1.5) {
        opacity = (1.5 - progress) / 0.75;
        scale = 1 - (progress - 0.75) * 0.1;
        y = -(progress - 0.75) * 40;
      }
    }
    
    return {
      opacity: Math.max(0, Math.min(1, opacity)),
      transform: `scale(${scale}) translateY(${y}px)`,
      willChange: 'transform, opacity',
    };
  };

  return (
    <div className="bg-background">
      <div style={{ height: `${sceneHeight}px` }} />
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
        <Section style={getSectionStyle(0)}><Intro /></Section>
        <Section style={getSectionStyle(1)}><About /></Section>
        <Section style={getSectionStyle(2)}><Contact /></Section>
        <Section style={getSectionStyle(3)}><TetrisSection /></Section>
      </div>
    </div>
  );
}
