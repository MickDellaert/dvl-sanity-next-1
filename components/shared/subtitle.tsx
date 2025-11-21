type Subtitle = {
  subtitle: string;
};

export default function Subtitle({ subtitle }: Subtitle) {
  return (
    <div className="mb-12 mt-20 flex items-center gap-4 md:mb-20 md:mt-36">
      <hr className="h-[3px] w-16 bg-stone-950"></hr>
      <h3 className="text-lg font-medium uppercase tracking-wider md:text-xl">
        {subtitle}
      </h3>
    </div>
  );
}
