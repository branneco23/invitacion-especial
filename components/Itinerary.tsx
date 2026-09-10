import { ItineraryItem } from "@/types/wedding";

interface ItineraryProps {
  items: ItineraryItem[];
}

export default function Itinerary({ items }: ItineraryProps) {
  return (
    <div className="space-y-4 pt-2">
      <h3 className="text-center font-serif text-xl font-semibold text-[#1a1817]">
        Itinerario
      </h3>
      
      <div className="relative border-l-2 border-[#d8cfc4] ml-4 md:ml-8 space-y-6 pl-6">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-center gap-3">
            <div className="absolute -left-[31px] w-6 h-6 rounded-full bg-[#faf7f2] border-2 border-[#581825] flex items-center justify-center text-xs">
              {item.icon}
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#8c7a6b] tracking-wider uppercase">
                {item.time}
              </span>
              <h4 className="text-sm font-medium text-[#1a1817]">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}