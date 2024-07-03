// app/api/embed/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.resolve("./embed.min.js");
  const fileContent = fs.readFileSync(filePath, "utf8");

  return new NextResponse(fileContent, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
