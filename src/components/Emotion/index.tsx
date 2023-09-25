import "./index.css"
import sentimentExcited from "../../assets/icons/sentiment_excited.svg";
import sentimentSatisfied from "../../assets/icons/sentiment_satisfied.svg";
import sentimentNeutral from "../../assets/icons/sentiment_neutral.svg";
import sentimentDissatisfied from "../../assets/icons/sentiment_dissatisfied.svg";

interface EmotionProps {
  pricePerThousand: number;
}

export default function Emotion({ pricePerThousand }: EmotionProps) {
  let emotion: string;

  if (pricePerThousand <= 15.5) emotion = sentimentExcited;
  else if (pricePerThousand <= 17.5) emotion = sentimentSatisfied;
  else if (pricePerThousand <= 35.0) emotion = sentimentNeutral;
  else emotion = sentimentDissatisfied;
  return <img src={emotion} alt="emotion" />;
}
