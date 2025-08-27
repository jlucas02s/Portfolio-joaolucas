"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
    {
      name: "Personal Instagram",
      href: "https://www.instagram.com/joao_spc02/",
      icon: Instagram,
      preview: "https://picsum.photos/400/300?random=1",
      handle: "@joao_spc02",
      dataAiHint: "social media profile"
    },
    {
      name: "Business Instagram",
      href: "https://www.instagram.com/essencia__digital/",
      icon: Instagram,
      preview: "https://picsum.photos/400/300?random=2",
      handle: "@essencia__digital",
      dataAiHint: "business profile"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jo%C3%A3o-lucas-silva-proen%C3%A7a-da-costa-6060261a0/",
      icon: Linkedin,
      preview: "https://picsum.photos/400/300?random=3",
      handle: "João Lucas S. P. da Costa",
      dataAiHint: "professional network"
    },
    {
      name: "GitHub",
      href: "https://github.com/jlucas02s",
      icon: Github,
      preview: "https://picsum.photos/400/300?random=4",
      handle: "@jlucas02s",
      dataAiHint: "code repository"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/qr/RZELMF7TOTQ5C1",
      icon: MessageCircle,
      preview: "https://picsum.photos/400/300?random=5",
      handle: "Fale Comigo",
      dataAiHint: "messaging app"
    },
];

const SocialCard = ({ link, style }: { link: typeof socialLinks[0], style: React.CSSProperties }) => {
    const Icon = link.icon;
    return (
        <div style={style} className="group absolute top-1/2 left-1/2 w-64 h-64 -m-32 transition-all duration-300 ease-in-out">
            <div className="relative w-full h-full rounded-2xl border border-primary/20 bg-card/50 p-4 transition-transform duration-300 ease-in-out group-hover:scale-110 shadow-lg backdrop-blur-sm">
                <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg">
                    <Image 
                        src={link.preview} 
                        alt={`Preview of ${link.name}`} 
                        width={400}
                        height={300}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={link.dataAiHint}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="z-10"
                    >
                        <Button variant="default" size="lg">Visitar</Button>
                    </a>
                </div>
                <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Icon className="h-4 w-4" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-foreground">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.handle}</p>
                    </div>
                </div>
            </div>
      </div>
    );
};


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
        setAngle(prevAngle => prevAngle + 0.001);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseEnter = () => { isHovering.current = true; };
  const handleMouseLeave = () => { isHovering.current = false; };
  
  if (!isClient) return null;

  const numIcons = socialLinks.length;
  const radius = 350; 
  const perspective = 1500;

  return (
    <div 
        className="relative w-full h-96 flex items-center justify-center" 
        style={{ perspective: `${perspective}px` }}
        ref={orbitRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-10deg) rotateY(0deg)' }}>
        {socialLinks.map((social, index) => {
          const currentAngle = angle + (index / numIcons) * 2 * Math.PI;
          const x = Math.cos(currentAngle) * radius;
          const z = Math.sin(currentAngle) * radius;
          const y = Math.sin(currentAngle * 2) * 50;
          
          const scale = (z + radius) / (2 * radius) * 0.7 + 0.5;
          const opacity = (z + radius) / (2 * radius) * 0.8 + 0.2;
          
          const cardStyle = {
            transform: `translateX(${x}px) translateY(${y}px) translateZ(${z}px) rotateY(${-currentAngle}rad) rotateY(${Math.PI}rad) scale(${scale})`,
            opacity: opacity,
            zIndex: Math.floor(scale * 100)
          };

          return (
            <SocialCard
              key={social.name}
              link={social}
              style={cardStyle}
            />
          );
        })}
      </div>
    </div>
  );
};
