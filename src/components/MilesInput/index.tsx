import "./index.css";
import { ChangeEvent } from "react";
import expandLess from "../../assets/icons/expand_less.svg";
import expandMore from "../../assets/icons/expand_more.svg";

interface MilesInputProps {
  state: [number, React.Dispatch<React.SetStateAction<number>>];
}

export default function MilesInput({ state }: MilesInputProps) {
  const [numberOfMiles, setNumberOfMiles] = state;

  const onChangeNumberOfMiles = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberOfMiles(Number(event.target.value));
  };
  const decreaseValue = (value: number) => {
    if (numberOfMiles <= value) setNumberOfMiles(0);
    else setNumberOfMiles(numberOfMiles - value);
  };
  const increaseValue = (value: number) => {
    setNumberOfMiles(numberOfMiles + value);
  };

  return (
    <>
      <p className="input-title">Milhas</p>
      <div id="input-miles">
        <button className="k1-button" onClick={() => decreaseValue(1000)}>
          <img src={expandMore} alt="expand more" />
          1k
        </button>
        <button className="k10-button" onClick={() => decreaseValue(10000)}>
          <img src={expandMore} alt="expand more" />
          10k
        </button>

        <input type="number" name="miles-value" value={numberOfMiles} onChange={onChangeNumberOfMiles} id="miles-value" />

        <button className="k10-button" onClick={() => increaseValue(10000)}>
          <img src={expandLess} alt="expand less" />
          10k
        </button>
        <button className="k1-button" onClick={() => increaseValue(1000)}>
          <img src={expandLess} alt="expand less" />
          1k
        </button>
      </div>
    </>
  );
}
