import { cn } from "../utils/utils.ts";

export interface SummaryItemProps {
  icon: string;
  category: string;
  score: number;
  colors: {
    bg: string;
    text: string;
  };
}

function SummaryItem({ icon, category, score, colors }: SummaryItemProps) {
  return (
    <li
      className={cn(
        "flex items-center gap-200 rounded-xl p-200",
        colors.bg,
        colors.text,
      )}
    >
      <img src={icon} alt={category} />
      <h2 className="font-hanken-grotesk text-base leading-[130%] font-medium">
        {category}
      </h2>
      <p className="text-navy-950/50 ml-auto font-bold">
        <span className="text-navy-950">{score}</span> / 100
      </p>
    </li>
  );
}

export { SummaryItem };
