import { ChangeEvent } from "react";
import expandLess from "../../assets/icons/expand_less.svg";
import expandMore from "../../assets/icons/expand_more.svg";

interface MilesInputProps {
    state : [number, React.Dispatch<React.SetStateAction<number>>]
}

export default function MilesInput({state}: MilesInputProps) {

    const [numberOfMiles, setNumberOfMiles] = state;

  // Ações no input de milhas
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
    <div id="input-miles">
      <p className="input-title">Milhas</p>
      <button className="1k-button" onClick={() => decreaseValue(1000)}>
        <img src={expandMore} alt="expand more" />
        1k
      </button>
      <button className="10k-button" onClick={() => decreaseValue(10000)}>
        <img src={expandMore} alt="expand more" />
        10k
      </button>

      <input type="number" name="miles-value" value={numberOfMiles} onChange={onChangeNumberOfMiles} id="miles-value" />

      <button className="10k-button" onClick={() => increaseValue(10000)}>
        <img src={expandLess} alt="expand less" />
        10k
      </button>
      <button className="1k-button" onClick={() => increaseValue(1000)}>
        <img src={expandLess} alt="expand less" />
        1k
      </button>
    </div>
  );
}
