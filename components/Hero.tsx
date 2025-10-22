"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const HeroSection = () => {
  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="mx-auto space-y-6">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            AI Powered career coach
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Get expert guidance, ace interviews, and level up your career with
            AI-driven insights.
          </p>
        </div>
        <div>
          <div className="flex justify-center space-x-4">
            <Link href="/dashboard">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
