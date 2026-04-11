interface FinalScoreCardProps {
  totalScore: number;
}

function FinalScoreCard({ totalScore }: FinalScoreCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-300 rounded-b-4xl bg-linear-to-b from-[#7755FF] to-[#2F2CE9] p-400 sm:py-[45px] sm:px-[69px] xl:px-[54px] sm:rounded-4xl md:max-w-[338px] lg:max-w-[368px]">
      <h2 className="font-hanken-grotesk text-navy-200 text-lg leading-[130%] font-bold">
        Your Result
      </h2>
      <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-linear-to-b from-[#4D21C9] via-[#2521C9]">
        <p className="font-hanken-grotesk text-navy-200 text-center text-base leading-[130%] font-bold">
          <span className="text-[56px] leading-[100%] font-extrabold text-white">
            {Math.floor(totalScore / 4)}
          </span>
          <br />
          of 100
        </p>
      </div>
      <div className="font-hanken-grotesk space-y-100 text-center leading-[130%]">
        <h2 className="text-2xl font-bold text-white">Great</h2>
        <p className="text-navy-200 text-base font-medium">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export { FinalScoreCard };
