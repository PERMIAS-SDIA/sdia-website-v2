"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Globe,
  Award,
  Calendar,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about.JPG?height=800&width=1920&text=About+Us"
            alt="About Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-primary-700/40"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Badge className="mb-6 bg-secondary-400 px-4 py-2 text-sm font-medium text-secondary-900 hover:bg-secondary-500">
            About Our Community
          </Badge>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Our Story &
            <span className="block bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
              Heritage
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-200 md:text-2xl">
            Celebrating Indonesian culture and building lasting connections at
            San Diego since 2016.
          </p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary-100 text-primary-800 hover:bg-primary-200">
              Our Journey
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              Club History
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              From humble beginnings to a thriving community
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-primary-300 to-secondary-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2016",
                  title: "Foundation",
                  description:
                    "UCSD Indonesian Club was founded by a group of passionate Indonesian students who wanted to create a home away from home.",
                  side: "left",
                },
                {
                  year: "2018",
                  title: "First Cultural Night",
                  description:
                    "Organized our first major cultural showcase, featuring traditional dances, music, and Indonesian cuisine.",
                  side: "right",
                },
                {
                  year: "2020",
                  title: "Virtual Adaptation",
                  description:
                    "Successfully transitioned to virtual events during the pandemic, maintaining community connections online.",
                  side: "left",
                },
                {
                  year: "2022",
                  title: "Alumni Network",
                  description:
                    "Launched our formal alumni network, connecting current students with successful graduates.",
                  side: "right",
                },
                {
                  year: "2024",
                  title: "150+ Members",
                  description:
                    "Reached our milestone of 150+ active members, making us one of the largest cultural clubs at UCSD.",
                  side: "left",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${item.side === "right" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-1/2 ${item.side === "right" ? "pl-8" : "pr-8"}`}
                  >
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600">
                            <Calendar className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary-600">
                              {item.year}
                            </div>
                            <div className="text-lg font-semibold text-gray-800">
                              {item.title}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="z-10 h-4 w-4 rounded-full border-4 border-white bg-secondary-400 shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-secondary-100 text-secondary-800 hover:bg-secondary-200">
              Our Values
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              What We Stand For
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              The principles that guide our community and activities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Community",
                description:
                  "Building strong bonds and creating a supportive family atmosphere for all members.",
              },
              {
                icon: Globe,
                title: "Cultural Pride",
                description:
                  "Celebrating and preserving Indonesian heritage while sharing it with the broader UCSD community.",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description:
                  "Welcoming students from all backgrounds who appreciate Indonesian culture and values.",
              },
              {
                icon: BookOpen,
                title: "Education",
                description:
                  "Promoting cultural awareness and understanding through educational events and activities.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Striving for excellence in all our endeavors while supporting academic success.",
              },
              {
                icon: Calendar,
                title: "Tradition",
                description:
                  "Honoring Indonesian traditions while adapting to modern student life at UCSD.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 transition-transform duration-300 group-hover:scale-110">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge className="mb-4 bg-primary-100 text-primary-800 hover:bg-primary-200">
              Our Activities
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
              What We Do
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              From cultural celebrations to academic support, we offer diverse
              opportunities for growth and connection
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "Cultural Events",
                    description:
                      "Annual cultural nights, traditional dance performances, and Indonesian food festivals that showcase our rich heritage.",
                  },
                  {
                    title: "Social Gatherings",
                    description:
                      "Regular meetups, game nights, and social events that help members build lasting friendships and connections.",
                  },
                  {
                    title: "Academic Support",
                    description:
                      "Study groups, mentorship programs, and academic workshops to help members succeed in their studies.",
                  },
                  {
                    title: "Community Service",
                    description:
                      "Volunteer opportunities and community outreach programs that give back to the San Diego community.",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-gray-800">
                        {activity.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/whatwedo.JPG?height=600&width=500"
                alt="Indonesian Club Activities"
                width={500}
                height={600}  
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-500 opacity-20"></div>
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
