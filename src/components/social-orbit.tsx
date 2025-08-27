"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { name: "Personal Instagram", href: "https://www.instagram.com/joao_spc02/", icon: Instagram },
  { name: "Business Instagram", href: "https://www.instagram.com/essencia__digital/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jo%C3%A3o-lucas-silva-proen%C3%A7a-da-costa-6060261a0/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/jlucas02s", icon: Github },
  { name: "WhatsApp", href: "https://wa.me/qr/RZELMF7TOTQ5C1", icon: MessageCircle },
];

export const SocialOrbit = () => {
  const [isClient, setIsClient] = useState(false);
  const [angle, setAngle] = useState(0);
  const orbitRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    setIsClient(true);
    let animationFrameId: number;

    const animate = () => {
      if (!isHovering.current) {
        setAngle(prevAngle => prevAngle + 0.002);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseEnter = () => {
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };
  
  if (!isClient) {
    return null;
  }

  const numIcons = socialLinks.length;
  const radius = 150; 
  const perspective = 1000;

  return (
    <div 
        className="relative w-full h-80 flex items-center justify-center" 
        style={{ perspective: `${perspective}px` }}
        ref={orbitRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-15deg)' }}>
        {socialLinks.map((social, index) => {
          const currentAngle = angle + (index / numIcons) * 2 * Math.PI;
          const x = Math.cos(currentAngle) * radius;
          const z = Math.sin(currentAngle) * radius;
          const scale = (z + radius) / (2 * radius) * 0.8 + 0.6;
          const opacity = (z + radius) / (2 * radius) * 0.7 + 0.3;
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group absolute top-1/2 left-1/2 w-16 h-16 -m-8 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:shadow-lg hover:!scale-125 hover:!opacity-100"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.floor(scale * 100)
              }}
            >
              <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
