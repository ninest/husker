import { Listbox } from "@headlessui/react";
import { SelectHTMLAttributes, useState } from "react";

interface MiniDropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
}
export const MiniDropdown = ({ label, value }: MiniDropdownProps) => {
  const [selected, setSelected] = useState(value);

  return (
    <div className="flex">
      <label className="">{label}</label>
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Options></Listbox.Options>
        <Listbox.Option value="1">Option 1</Listbox.Option>
      </Listbox>
    </div>
  );
};
