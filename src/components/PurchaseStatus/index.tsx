import "./index.css"
interface PurchaseStatusProps {
    pricePerThousand: number;
}


export default function PurchaseStatus({pricePerThousand}: PurchaseStatusProps) {
    let message: string;

    console.log(`Preço: ${pricePerThousand}`)
    if(pricePerThousand <= 15.5)  message = 'Excelente compra!'
    else if(pricePerThousand <= 17.5) message = 'Ainda vale a pena!'
    else if(pricePerThousand <= 35.0) message = 'Compre poucas  e com urgencia!'
    else message = 'Não compre! Prefira a passagem.'

  return (
    <div className="range-div">
        <input
          type="range"
          min={14}
          max={35}
          disabled={true}
          value={pricePerThousand}
        />
        <p>{message}</p>
      </div>
  );
}
