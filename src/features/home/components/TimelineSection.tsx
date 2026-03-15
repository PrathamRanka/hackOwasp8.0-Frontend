import { Timeline } from "@/components/ui/Timeline";
import { timelineItems } from "@/features/home/constants/timelineItems";

export default function TimelineSection() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineItems} />
    </div>
  );
}
