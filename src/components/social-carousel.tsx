"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
    {
      name: "Personal Instagram",
      href: "https://www.instagram.com/joao_spc02/",
      icon: Instagram,
      preview: "https://picsum.photos/400/300?random=1",
      handle: "@joao_spc02"
    },
    {
      name: "Business Instagram",
      href: "https://www.instagram.com/essencia__digital/",
      icon: Instagram,
      preview: "https://picsum.photos/400/300?random=2",
      handle: "@essencia__digital"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jo%C3%A3o-lucas-silva-proen%C3%A7a-da-costa-6060261a0/",
      icon: Linkedin,
      preview: "https://picsum.photos/400/300?random=3",
      handle: "João Lucas S. P. da Costa"
    },
    {
      name: "GitHub",
      href: "https://github.com/jlucas02s",
      icon: Github,
      preview: "https://picsum.photos/400/300?random=4",
      handle: "@jlucas02s"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/qr/RZELMF7TOTQ5C1",
      icon: MessageCircle,
      preview: "https://picsum.photos/400/300?random=5",
      handle: "Fale Comigo"
    },
  ];
  
  const SocialCard = ({ link }: { link: typeof socialLinks[0] }) => {
    const Icon = link.icon;
    return (
      <li className="w-80 max-w-full flex-shrink-0">
        <div className="group relative block h-full w-full rounded-2xl border border-primary/20 bg-card/50 p-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
                <Image 
                    src={link.preview} 
                    alt={`Preview of ${link.name}`} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint="social media profile"
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
            <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <p className="font-semibold text-foreground">{link.name}</p>
                    <p className="text-sm text-muted-foreground">{link.handle}</p>
                </div>
            </div>
        </div>
      </li>
    );
  };
  
  export const SocialCarousel = () => {
    return (
      <div
        className="group relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, white 20%, white 80%, transparent)' }}
      >
        <ul className="flex min-w-full animate-scroll flex-row gap-4 group-hover:[animation-play-state:paused]">
          {[...socialLinks, ...socialLinks].map((link, index) => (
            <SocialCard key={`${link.name}-${index}`} link={link} />
          ))}
        </ul>
      </div>
    );
  };
