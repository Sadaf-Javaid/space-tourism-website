export default function TabContent({
  title,
  description,
  distance,
  travelTime,
}) {
  return (
    <div className=" flex flex-col lg:items-start">
      <div className="my-6 lg:my-10 text-center lg:text-left">
        <h2 className="font-bellefair text-[3.5rem] text-white md:text-[5rem] lg:text-9xl">
          {title}
        </h2>
        <p className="mt-4 font-barlow text-base leading-7 text-blue-200">
          {description}
        </p>
      </div>
      <div className="flex flex-col space-y-6 border-t-[1px] border-[#ffffff5f] pt-6 lg:pt-10 text-center md:flex-row md:items-center md:justify-around md:space-y-0 lg:w-full lg:justify-start">
        <div className="flex-1 lg:text-left">
          <p className="tex-sm mb-3 font-barlow-condensed uppercase tracking-[0.125rem] text-blue-200">
            AVG. DISTANCE
          </p>
          <h3 className="font-bellefair text-[1.75rem] text-white">
            {distance}
          </h3>
        </div>
        <div className="flex-1 lg:text-left">
          <p className="tex-sm mb-3 font-barlow-condensed uppercase tracking-[0.125rem] text-blue-200">
            Est. travel time
          </p>
          <h3 className="font-bellefair text-[1.75rem] text-white">
            {travelTime}
          </h3>
        </div>
      </div>
    </div>
  );
}
