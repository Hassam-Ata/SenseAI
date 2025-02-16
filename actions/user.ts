"use server";

import db from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { User, IndustryInsight } from "@prisma/client";

interface UpdateUserData {
  industry: string;
  experience: number;
  bio: string;
  skills: string[];
}

interface OnboardingStatus {
  isOnboarded: boolean;
}

export async function updateUser(data: UpdateUserData): Promise<User> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not found");

  try {
    const result = await db.$transaction(
      async (tx) => {
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });

        if (!industryInsight) {
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              salaryRanges: [],
              growthRate: 0,
              demandLevel: "MEDIUM",
              topSkills: [],
              marketOutlook: "NEUTRAL",
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }

        return await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
      },
      {
        timeout: 10000,
      }
    );

    return result;
  } catch (error) {
    console.error(
      "Error updating user",
      error instanceof Error ? error.message : String(error)
    );
    throw new Error("Failed to Update user");
  }
}

export async function getUserOnboardingStatus(): Promise<OnboardingStatus> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
      select: {
        industry: true,
      },
    });

    return {
      isOnboarded: !!user?.industry,
    };
  } catch (error) {
    console.error(
      "Error checking onboarding status",
      error instanceof Error ? error.message : String(error)
    );
    throw new Error("Failed to check onboarding status");
  }
}
