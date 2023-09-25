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
      <div className="title">
        <hr />
        <h4>Resultado</h4>
        <hr />
      </div>
      <PurchaseStatus pricePerThousand={isNaN(finalPricePerThousand)? 0 : finalPricePerThousand}></PurchaseStatus>

      <div className="summary">
        <p>
          Cada milheiro sairá por <strong>R${isNaN(finalPricePerThousand) ? 0.0 : finalPricePerThousand.toFixed(2)}</strong>
        </p>
        <Emotion pricePerThousand={isNaN(finalPricePerThousand)? 0 : finalPricePerThousand} />
      </div>
      <div className="details">
        <table>
          <tr>
            <td>Quantidade de milhas:</td>
            <td className="value">{data.numberOfMiles}</td>
          </tr>
          <tr>
            <td>Preço por milheiro:</td>
            <td className="value"> R${data.pricePerThousand.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Valor total:</td>
            <td className="value"> 
            ({data.numberOfMiles}/1000) x {data.pricePerThousand} = R${totalPrice.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Desconto (Promo):</td>
            <td className="value">
              {data.discount.toFixed(1)}% = - R${discountValueForPromo.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Desconto (Assinante Clube+):</td>
            <td className="value">
              {data.isSubscriber ? 5 : 0}% = - R${discountValueForSubscriber.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Bônus (Promo):</td>
            <td className="value">
              {data.bonus}% = + {bonusMilesForPromo.toFixed(0)}
            </td>
          </tr>
          <td>Bônus (Assinante Clube+):</td>
          <td className="value">
            {data.isSubscriber ? 30 : 0}% = + {bonusMilesForSubscriber}
          </td>
          <tr>
            <td>Valor final:</td>

            <td className="value">R${finalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Quantidade de milhas final:</td>
            <td className="value">{finalNumberOfMiles.toFixed(0)}</td>
          </tr>
        </table>
        <p>R${isNaN(finalPricePerThousand) ? 0.0 : finalPricePerThousand.toFixed(2)} por milheiro </p>
      </div>
    </div>
  );
}
