import { IconId } from "@/types/icon";
import { Size } from "@/types/size";
import { Button } from "./Button";

interface ButtonsSetProps {
  size?: Size;
  buttons: { icon: IconId; size?: Size; text: string; href: string }[];
}

export const ButtonSet = ({ size = "sm", buttons }: ButtonsSetProps) => {
  return (
    <div className="flex items-center flex-wrap -mb-base">
      {buttons.map((button, index) => (
        <Button
          key={index}
          iconLeft={button.icon}
          size={size}
          href={button.href}
          className="mr-base mb-base"
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};
