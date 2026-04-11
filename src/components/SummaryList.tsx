import type { SummaryItemProps } from "./SummaryItem";
import { SummaryItem } from "./SummaryItem";

interface SummaryListProps {
  list: SummaryItemProps[];
}

function SummaryList({ list }: SummaryListProps) {
  return (
    <ul className="space-y-200">
      {list.map((item) => (
        <SummaryItem
          key={item.category}
          icon={item.icon}
          category={item.category}
          score={item.score}
          colors={{ bg: item.colors.bg, text: item.colors.text }}
        />
      ))}
    </ul>
  );
}

export { SummaryList };
