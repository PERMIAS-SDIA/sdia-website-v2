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
            src="/groupwelc2025.JPEG?height=800&width=1920&text=About+Us"
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
            Our
            <span className="bg-gradient-to-r from-secondary-300 to-secondary-500 bg-clip-text text-transparent">
             &nbsp;Story
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-200 md:text-2xl">
            Celebrating Indonesian culture and building lasting connections at
            San Diego since 2015.
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
                  year: "Before 2015",
                  title: "Origins",
                  description:
                    "Back then, the Indonesian Student Association at San Diego was named SADIS.",
                  side: "right",
                },
                {
                  year: "2015",
                  title: "Foundation",
                  description:
                    "PERMIAS SDIA was formed by a group of 10 passionate Indonesian students who wanted to create a home away from home. Also the date of our first Instagram post!",
                  side: "left",
                },
                {
                  year: "2016",
                  title: "First Party",
                  description:
                    "PERMIAS SDIA hosted its first party during Halloween.",
                  side: "right",
                },
                {
                  year: "2020", 
                  title: "COVID-19 Era",
                  description:
                    "PERMIAS SDIA had to transition to virtual meetings during the pandemic, which led them to start the Zoom New Student Info meetings.",
                  side: "left",
                },
                {
                  year: "2021",
                  title: "Masks On",
                  description:
                    "With only 10 officers, they transitioned from virtual to in-person events, hosting Welcoming Party 2021 and Smores at the Shores!",
                  side: "right",
                },
                {
                  year: "2022",
                  title: "Start of SDIA Cup",
                  description:
                    "Present day PORMICA began here! This year was the start of SDIA Cup, which hosted Badminton, Soccer, and Basketball for Indonesian students.",
                  side: "left",
                },
                {
                  year: "2023",
                  title: "Start of Selera SDIA",
                  description:
                    "Realizing that students often felt homesick and craved Indonesian food, PERMIAS SDIA decided to bring it right to them with Selera SDIA!",
                  side: "right",
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
                title: "Cultural Celebration",
                description:
                  "Celebrating and preserving Indonesian culture while sharing it with the broader UCSD community.",
              },
              {
                icon: Users,
                title: "Inclusivity",
                description:
                  "Welcoming students from all backgrounds who appreciate Indonesian culture and values.",
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
              From social gatherings to academic support, we offer valuable
              opportunities for growth and connection
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="space-y-8">
                {[
                  
                  {
                    title: "Social Gatherings",
                    description:
                      "Regular meetups, sport matches, and social events that help members build lasting friendships and connections.",
                  },
                  {
                    title: "Career Development",
                    description:
                      "Study groups and career workshops to help members succeed in their future endeavors.",
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
                src="/groupgrad2024.JPEG?height=600&width=500"
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
