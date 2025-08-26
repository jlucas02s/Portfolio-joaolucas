"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Intro } from '@/components/sections/intro';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { TetrisSection } from '@/components/sections/tetris-section';
import { Section } from '@/components/section';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const smoothedScrollY = useRef(0);
  const animationFrameId = useRef<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    const animate = () => {
      const lerpFactor = 0.08;
      smoothedScrollY.current += (scrollY - smoothedScrollY.current) * lerpFactor;
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [scrollY]);


  const sceneHeight = 6000;
  const sectionHeight = sceneHeight / 4;

  const getSectionStyle = (sectionIndex: number): React.CSSProperties => {
    const sectionStart = sectionIndex * sectionHeight;
    const progress = (smoothedScrollY.current - sectionStart) / sectionHeight;

    let opacity = 0;
    let scale = 0.95;
    let y = 20;

    if (progress >= -0.5 && progress <= 1.5) {
      if (progress < 0.25 && progress > -0.5) {
        opacity = (progress + 0.5) / 0.75;
        scale = 1 - (0.25 - progress) * 0.1;
        y = (0.25 - progress) * 40;
      } else if (progress >= 0.25 && progress <= 0.75) {
        opacity = 1;
        scale = 1;
        y = 0;
      } else if (progress > 0.75 && progress <= 1.5) {
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

  const getParallaxStyle = (depth: number): React.CSSProperties => {
    if (!isClient) {
      return { willChange: 'transform' };
    }
    const moveX = (mousePos.x - window.innerWidth / 2) * depth;
    const moveY = (mousePos.y - window.innerHeight / 2) * depth;
    return {
      transform: `translateX(${moveX}px) translateY(${moveY}px)`,
      willChange: 'transform',
    };
  };

  return (
    <div className="bg-background">
      <div style={{ height: `${sceneHeight}px` }} />
      <div 
        className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none"
        style={getParallaxStyle(0.01)}
      >
        <div className="w-full h-full relative" style={getParallaxStyle(0.02)}>
            <Section style={getSectionStyle(0)}><Intro /></Section>
            <Section style={getSectionStyle(1)}><About /></Section>
            <Section style={getSectionStyle(2)}><Contact /></Section>
            <Section style={getSectionStyle(3)}><TetrisSection /></Section>
        </div>
      </div>
    </div>
  );
}
