import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  return redirect("https://gym.husker.nu/");
}
