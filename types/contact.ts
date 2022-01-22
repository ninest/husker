import { IconId } from "./icon";

export interface Contact {
  name: string;
  icon?: IconId;
  methods: ContactMethod[];
}

export interface ContactMethod {
  // These are also the icons
  type: "phone" | "email" | "website" | "address";
  // Raw value, like name@mail.com
  value: string;
}
