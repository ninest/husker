import { SmartLink } from "./SmartLink";

export function Footer() {
  return (
    <footer className="space-x py-base text-gray flex space-x-sm">
      <SmartLink
        className="inline-ghost"
        href="https://github.com/ninest/huskinfo"
      >
        {"-> "}GitHub
      </SmartLink>
      <SmartLink className="inline-ghost" href="/contribute">
        {"-> "}Contribute
      </SmartLink>
    </footer>
  );
}
