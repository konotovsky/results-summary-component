import data from "../assets/data.json";
import { FinalScoreCard } from "../components/FinalScoreCard";
import { Button } from "./Button";
import { SummaryList } from "./SummaryList";

function Card() {
  return (
    <div className="bg-white md:flex sm:rounded-4xl">
      <FinalScoreCard totalScore={80 + 92 + 61 + 73} />
      <div className="flex flex-col gap-300 px-[30px] py-300 md:w-[348px] lg:w-[368px]">
        <h3 className="font-hanken-grotesk text-navy-950 text-lg leading-[130%] font-bold">
          Summary
        </h3>
        <SummaryList list={data} />
        <Button>Continue</Button>
      </div>
    </div>
  );
}

export { Card };
