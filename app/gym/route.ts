import { redirect } from "next/navigation";

export function GET(request: Request) {
  return redirect("https://gym.husker.nu/");
}
