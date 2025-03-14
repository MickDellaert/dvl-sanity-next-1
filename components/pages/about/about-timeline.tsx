import StickyTitle from "../../shared/sticky-title";
import { formatDate } from "@/sanity/lib/utils";

type TimelineProps<T> = {
  title: string;
  items: Array<T> | null;
  getTitleContent: (item: T) => string | null;
  getSubtitleContent: (item: T) => string;
  getStartDate: (item: T) => string | undefined;
  getEndDate: (item: T) => string | undefined;
};

export default async function AboutTimeline<T>({
  title,
  items,
  getTitleContent,
  getSubtitleContent,
  getStartDate,
  getEndDate,
}: TimelineProps<T>) {
  const dateFormat: Intl.DateTimeFormatOptions = { year: "numeric" };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-24 grid grid-cols-12 lg:gap-x-20">
      <StickyTitle stickyTitle={title} />
      <div className="col-span-12 col-start-1 grid grid-cols-subgrid gap-y-4 lg:col-span-7 lg:col-start-6 lg:gap-x-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative col-span-12 grid grid-cols-subgrid after:absolute 
                       after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-black after:content-[''] lg:col-span-7"
          >
            <div className="col-span-4 col-start-1 content-center gap-x-2 text-2xl leading-tight md:text-3xl lg:col-span-2 lg:col-start-2">
              <h3>{formatDate(getStartDate(item), dateFormat)}</h3>
              {/* <h3> — </h3> */}
              <h3>
                {formatDate(getEndDate(item), dateFormat) == "2025"
                  ? "Present"
                  : formatDate(getEndDate(item), dateFormat)}
              </h3>
            </div>
            <div className="col-span-8 content-center lg:col-span-4">
              <h3 className="text-lg md:text-2xl">{getTitleContent(item)}</h3>
              <div className="flex w-fit flex-row justify-start text-base md:text-xl">
                <h3 className="whitespace-pre-wrap">
                  {getSubtitleContent(item)}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
