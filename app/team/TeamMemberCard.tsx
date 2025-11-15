import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { TeamRecord } from "@/lib/types";

export default function TeamMemberCard({ member }: { member: TeamRecord }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const pic = member.pic;
    const second_pic = member.second_pic;
  
    return (
      <div className="h-[32rem] w-full [perspective:1000px]">
        <div
          className={`relative h-full w-full cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front */}
          <Card className="absolute inset-0 h-full w-full border-2 border-transparent transition-shadow duration-300 [backface-visibility:hidden] hover:border-secondary-200 hover:shadow-xl">
            <CardContent className="flex h-full flex-col p-0">
              <div className="relative h-80 overflow-hidden rounded-t-lg">
                <Image
                  src={pic}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute right-4 top-4">
                  {member.graduation_year ? (
                    <Badge className="bg-primary-600 text-white">
                      {member.graduation_year}
                    </Badge>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="mb-2 font-semibold text-primary-600">
                    {member.role || "Member"}
                  </p>
                  <p className="mb-1 text-sm text-gray-600">
                    {member.major || ""}
                  </p>
                  {member.graduation_year ? (
                    <p className="text-xs text-gray-500">
                      Class of {member.graduation_year}
                    </p>
                  ) : null}
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs italic text-gray-500">Click to flip</p>
                </div>
              </div>
            </CardContent>
          </Card>
  
          {/* Back */}
          <Card className="absolute inset-0 h-full w-full border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <CardContent className="flex h-full flex-col p-0">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={second_pic}
                  alt={`${member.name} casual`}
                  fill
                  className="object-cover object-center"
                />
              </div>
  
              <div className="flex flex-1 flex-col justify-between p-4 text-sm">
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-800">
                    {member.name}
                  </h3>
  
                  {member.description && (
                    <p className="mb-4 text-sm leading-relaxed text-gray-700">
                      {member.description}
                    </p>
                  )}
                  
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }