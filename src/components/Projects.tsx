import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Marketplace Platform - P-store.net",
      description: "Marketplace for digital products built with Laravel, Vue.js, NuxtJS, and mySQL.",
      image: "/public/assets/images/projects/pstore.png",
      technologies: ["Laravel", "Vue.js", "NuxtJS", "mySQL"],
      github: "#",
      demo: "https://p-store.net/"
    },
    {
      title: "Payment Gateway - Tripay Payment Gateway",
      description: "Payment gateway built with Laravel, Vue.js, NuxtJS, and mySQL.",
      image: "/public/assets/images/projects/tripay-pg.png",
      technologies: ["Laravel", "Vue.js", "NuxtJS", "mySQL"],
      github: "#",
      demo: "https://tripay.co.id/"
    },
    {
      title: "Logistic Ecosystem Application - AGROS",
      description: "Logistic ecosystem application built with Laravel, Vue.js, NuxtJS, and mySQL.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Chart.js", "WebSocket", "TypeScript"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in full-stack 
            development and modern DevOps practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-3 hover:border-primary/40 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="transition-colors duration-300 group-hover:text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 hover:-rotate-12" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}