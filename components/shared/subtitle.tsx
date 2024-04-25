type Subtitle ={
  subtitle: string
}

export default function Subtitle({subtitle}: Subtitle) {
  return (
    <div className="mb-12 mt-20 flex items-center gap-4 md:mb-20 md:mt-36">
      <hr className="h-[3px] w-16 bg-black"></hr>
      <h3 className="text-lg md:text-xl font-medium uppercase tracking-wider">
        {subtitle}
      </h3>
    </div>
  );
}
