import "./index.css";
import ResultData from "../../interfaces/result_data";
import PurchaseStatus from "../PurchaseStatus";
import Emotion from "../Emotion";

interface ResultProps {
  data: ResultData;
}

export default function Result({ data }: ResultProps) {
  const totalPrice = (data.numberOfMiles / 1000) * data.pricePerThousand;

  const discountValueForPromo = totalPrice * (data.discount / 100);
  const bonusMilesForPromo = data.numberOfMiles * (data.bonus / 100);

  const discountValueForSubscriber = data.isSubscriber ? totalPrice * 0.05 : 0;
  const bonusMilesForSubscriber = data.isSubscriber ? data.numberOfMiles * 0.3 : 0;
  const finalPrice = totalPrice - discountValueForPromo - discountValueForSubscriber;
  const finalNumberOfMiles = data.numberOfMiles + bonusMilesForPromo + bonusMilesForSubscriber;
  const finalPricePerThousand = finalPrice / (finalNumberOfMiles / 1000);

  return (
    <div id="view-result">
      <div>
        <p>
          Cada milheiro sairá por <strong>R${isNaN(finalPricePerThousand) ? 0.0 : finalPricePerThousand.toFixed(2)}</strong>
        </p>
        <Emotion pricePerThousand={finalPricePerThousand} />
      </div>

      <PurchaseStatus pricePerThousand={finalPricePerThousand}></PurchaseStatus>
      <div className="summary">
        <p>Quantidade de milhas: {data.numberOfMiles}</p>
        <p>Preço por milheiro: R${data.pricePerThousand.toFixed(2)}</p>
        <p>
          Valor total: ({data.numberOfMiles} / 1000) x R${data.pricePerThousand.toFixed(2)} = R${totalPrice.toFixed(2)}
        </p>
        <p>
          Desconto (Promo): {data.discount.toFixed(1)}% = - R${discountValueForPromo.toFixed(2)}
        </p>
        <p>
          Desconto (Assinante Clube+): {data.isSubscriber ? 5 : 0}% = - R${discountValueForSubscriber.toFixed(2)}
        </p>
        <p>
          Bônus (Promo): {data.bonus}% = + {bonusMilesForPromo.toFixed(0)}
        </p>
        <p>
          Bônus (Assinante Clube+): {data.isSubscriber ? 30 : 0}% = + {bonusMilesForSubscriber}
        </p>
        <p>Valor final: R${finalPrice.toFixed(2)}</p>
        <p>Quantidade de milhas final: {finalNumberOfMiles.toFixed(0)}</p>
        <p>R${isNaN(finalPricePerThousand) ? 0.0 : finalPricePerThousand.toFixed(2)} por milheiro </p>
      </div>
    </div>
  );
}
