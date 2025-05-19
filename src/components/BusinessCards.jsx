import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function BusinessCard({ icon, title, description, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card>
      <CardHeader>
        {icon && (
          <icon.type
            className={`text-6xl px-3 border rounded-full mx-auto transition-all duration-100 ${
              isHovered ? "border-white bg-slate-950" : "border-slate-950 bg-white"
            }`}
          />
        )}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-base md:text-xl text-center leading-8  pb-1">{title}</CardTitle>
        <CardDescription className="text-center text-sm leading-6 px-3 md:px-3 text-pretty">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default BusinessCard;
