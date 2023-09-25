import { ChangeEvent } from "react";

interface NumberInputProps {
  label: string;
  state: [number, React.Dispatch<React.SetStateAction<number>>];
}

export default function NumberInput({ label, state }: NumberInputProps) {
  const [value, setValue] = state;

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
  };

  return (
    <div>
      <p className="input-title">{label}</p>
      <input className="number-input" type="number" value={value} onChange={onChangeValue} />
    </div>
  );
}
