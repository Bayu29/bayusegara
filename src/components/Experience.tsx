import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "PT Antar Global Prospero (AGROS)",
      location: "Gresik, Jawa Timur, Indonesia",
      period: "2022 - Present",
      description: "Full-stack development projects using PHP, Laravel, NestJS, React, Node.js, and TypeScript.",
      technologies: ["React", "Node.js", "TypeScript", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      title: "Full Stack Developer",
      company: "PT Trijaya Digital Grup",
      location: "Ngawi, Jawa Timur, Indonesia",
      period: "2020 - 2022",
      description: "Developed and maintained web applications using modern JavaScript frameworks.",
      technologies: ["JavaScript", "PHP", "Laravel", "CI3", "Vue.js", "Nuxt.js", "Git"]
    },
    {
      title: "Intenship Backend Developer",
      company: "Agee Computer",
      location: "Madiun, Jawa Timur, Indonesia",
      period: "01 May 2019 - 31 July 2019",
      description: "Built responsive web applications and RESTful APIs. Worked with cross-functional teams using Agile methodologies to deliver high-quality software solutions.",
      technologies: ["PHP", "JavaScript", "SQL", "Agile"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 5 years of experience building scalable web applications and 
            leading development teams in fast-paced environments.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-x-2 hover:border-primary/30 group cursor-pointer overflow-hidden relative"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                      <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary mt-1 transition-all duration-300 group-hover:translate-x-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300 group-hover:text-foreground">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="transition-all duration-200 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}