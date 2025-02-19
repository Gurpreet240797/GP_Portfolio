import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const ContactSection = ({
  email = "hello@example.com",
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  twitterUrl = "https://twitter.com",
}: ContactSectionProps) => {
  return (
    <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
            using the form below or through social media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>{email}</span>
                </a>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(githubUrl, "_blank")}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(linkedinUrl, "_blank")}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(twitterUrl, "_blank")}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  I typically respond within 24-48 hours. For urgent matters,
                  please reach out via LinkedIn or Twitter for faster response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
