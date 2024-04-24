type Subtitle ={
  subtitle: string
}

export default function Subtitle({subtitle}: Subtitle) {
  return (
    <div className="mb-4 mt-20 flex items-center gap-4 md:mb-4 md:mt-32">
      <hr className="h-[3px] w-16 bg-black"></hr>
      <h3 className="text-xl font-medium uppercase tracking-wider">
        {subtitle}
      </h3>
    </div>
  );
}
