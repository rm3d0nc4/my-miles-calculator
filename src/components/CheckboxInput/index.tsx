import { ChangeEvent } from "react";

interface CheckBoxInputProps {
  label: string;
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

export default function CheckBoxInput({ label, state }: CheckBoxInputProps) {
  const [checked, setChecked] = state;

  const onChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <p className="input-title">{label}</p>
      <input className="number-input" type="checkbox" checked={checked} onChange={onChangeCheck} />
    </div>
  );
}
