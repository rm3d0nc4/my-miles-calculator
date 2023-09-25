import { useState } from "react";
import "./App.css";

import Result from "./components/Result";
import ResultData from "./interfaces/result_data";
import MilesInput from "./components/MilesInput";
import NumberInput from "./components/NumberInput";
import CheckBoxInput from "./components/CheckboxInput";
import AppBar from "./components/AppBar";
function App() {
  // Entradas
  const [numberOfMiles, setNumberOfMiles] = useState<number>(0);
  const [pricePerThousand, setPricePerThousand] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [bonus, setBonus] = useState<number>(0);
  const [isSubscriber, setIsSubscriber] = useState<boolean>(false);

  // Visualizações
  const [resultIsVisible, setResultIsVisible] = useState(false);
  const [result, setResult] = useState<JSX.Element>(
    <Result
      data={{
        numberOfMiles: 0,
        pricePerThousand: 0,
        discount: 0,
        bonus: 0,
        isSubscriber: false,
      }}
    />
  );

  const onClickCalculateButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;

    const data: ResultData = {
      numberOfMiles,
      pricePerThousand,
      discount,
      bonus,
      isSubscriber,
    };

    setResult(<Result data={data} />);
    setResultIsVisible(true);
  };

  return (
    <>
      <AppBar />

      <MilesInput state={[numberOfMiles, setNumberOfMiles]}></MilesInput>

      <div>
        <NumberInput label="Valor do milheiro" state={[pricePerThousand, setPricePerThousand]} />
        <NumberInput label="Desconto" state={[discount, setDiscount]} />
        <NumberInput label="Bônus" state={[bonus, setBonus]} />
        <CheckBoxInput label="Assinante Clube+" state={[isSubscriber, setIsSubscriber]}></CheckBoxInput>
      </div>

      <div>
        <button id="calculate-button" onClick={onClickCalculateButton}>
          Calcular
        </button>
      </div>
      <hr />
      {resultIsVisible ? result : null}
    </>
  );
}

export default App;
