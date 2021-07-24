import { SmartLink } from "./SmartLink";

export function Footer() {
  return (
    <footer className="space-x py-base text-gray flex space-x-base">
      <SmartLink href="https://github.com/ninest/huskinfo">GitHub</SmartLink>
      <SmartLink href="/contribute">Contribute</SmartLink>
    </footer>
  );
}
