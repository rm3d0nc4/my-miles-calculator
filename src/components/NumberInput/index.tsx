import "./index.css"
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
    <>
      <p className="input-title">{label}</p>
      <div className="number-input">
        <input type="number" value={value} onChange={onChangeValue} />
      </div>
    </>
  );
}
