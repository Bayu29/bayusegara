import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Environment variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            toast.success("Message sent successfully!");
            form.current?.reset();
          },
          (error) => {
            toast.error("Failed to send message. Please try again.");
            console.error("FAILED...", error.text);
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my expertise 
            in full-stack development and DevOps can help achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">bayusegara623@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Phone</h4>
                    <p className="text-muted-foreground">+62 859-1069-69925</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">Available for Remote Work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="user_name" placeholder="Your Name" required />
                  <Input name="user_email" type="email" placeholder="Your Email" required />
                </div>
                <Input name="subject" placeholder="Subject" required />
                <Textarea name="message" placeholder="Your Message" rows={5} required />
                <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}