import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Rocket, BrainCircuit } from 'lucide-react';

export const About = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Sobre Mim</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80 mb-12">
        Sou um desenvolvedor apaixonado por tecnologia, sempre em busca de criar soluções inovadoras e experiências digitais incríveis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Code className="text-accent" />
              Desenvolvimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Construindo aplicações web modernas e performáticas com as tecnologias mais recentes do mercado.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Rocket className="text-accent" />
              Inovação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Explorando novas ideias e abordagens para resolver problemas complexos de forma criativa e eficiente.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-accent">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <BrainCircuit className="text-accent" />
              Estratégia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Foco em resultados, combinando conhecimento técnico com visão de negócio para entregar valor.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
