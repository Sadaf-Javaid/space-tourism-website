export default function TabContent({
  title,
  description,
  distance,
  travelTime,
}) {
  return (
    <div className="flex flex-col">
      <div className="my-6 text-center">
        <h2 className="font-bellefair text-[3.5rem] text-white">{title}</h2>
        <p className="mt-4 font-barlow text-base leading-7 text-blue-200">
          {description}
        </p>
      </div>
      <div className="flex flex-col space-y-6 border-t-[1px] border-[#ffffff5f] pt-6 text-center">
        <div>
          <p className="tex-sm font-barlow-condensed tracking-[0.125rem] text-blue-200 uppercase mb-3">
            AVG. DISTANCE
          </p>
          <h3 className="text-[1.75rem] font-bellefair text-white">{distance}</h3>
        </div>
        <div>
          <p className="tex-sm font-barlow-condensed tracking-[0.125rem] text-blue-200 uppercase mb-3">Est. travel time</p>
          <h3 className="text-[1.75rem] font-bellefair text-white">{travelTime}</h3>
        </div>
      </div>
    </div>
  );
}
