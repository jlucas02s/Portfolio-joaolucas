"use client"

import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    name: "Personal Instagram",
    href: "https://www.instagram.com/joao_spc02/",
    icon: Instagram
  },
  {
    name: "Business Instagram",
    href: "https://www.instagram.com/essencia__digital/",
    icon: Instagram
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jo%C3%A3o-lucas-silva-proen%C3%A7a-da-costa-6060261a0/",
    icon: Linkedin
  },
  {
    name: "GitHub",
    href: "https://github.com/jlucas02s",
    icon: Github
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/qr/RZELMF7TOTQ5C1",
    icon: MessageCircle
  },
];

export const SocialSpiral = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const numIcons = socialLinks.length;
    const radiusGrowth = 35;
    const angleStep = Math.PI * 0.8;

    return (
        <div className="relative w-80 h-80" aria-label="Social Media Links">
            {socialLinks.map((social, index) => {
                const angle = index * angleStep;
                const radius = radiusGrowth + index * 18;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const Icon = social.icon;

                return (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="absolute top-1/2 left-1/2 w-12 h-12 -m-6 rounded-full bg-primary/20 text-primary-foreground flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-primary hover:shadow-lg hover:scale-110"
                        style={{
                            transform: `translate(${x}px, ${y}px)`,
                        }}
                    >
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </a>
                )
            })}
        </div>
    );
};
