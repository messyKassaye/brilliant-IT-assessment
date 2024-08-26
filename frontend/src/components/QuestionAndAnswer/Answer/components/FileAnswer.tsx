import { IAnswer } from "../../../../models/IAnswer.model";
import { ISentiment } from "../../../../models/ISentiment.modle";

type Props = {
  answer: IAnswer;
};
const FileAnswer = ({ answer }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-4">
      <div className="flex flex-col items-start justify-start gap-1 w-full">
        <span className="font-bold text-lg">Tokens</span>
        <div className="tokens-container w-full">
          {answer.tokens?.map((token) => (
            <div key={token} className="token-card">
              <span className="p-1">{token}</span>
            </div>
          ))}
        </div>
      </div>
      {/**Named entities */}
      <div className="flex flex-col items-start justify-start gap-1 w-full">
        <span className="font-bold text-lg">Named Entities</span>
        <div className="tokens-container w-full">
          {answer.entities?.map((entity: any) => (
            <div className="token-card w-full">
              <span className="p-1 w-full">{entity[0]}</span>
              <span className="p-1 w-full">{entity[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/**Sentiment analysis */}
      <div className="flex flex-col items-start justify-start gap-1 w-full">
        <span className="font-bold text-lg capitalize">Sentiment analysis</span>

        <div className="flex flex-col items-start justify-start w-full">
          {answer.sentiment?.map((sentiment: ISentiment) => (
            <div className="flex flex-col items-start justify-start">
              <span>{`Label: ${sentiment.label}`}</span>
              <span>{`Score: ${sentiment.score}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileAnswer;
