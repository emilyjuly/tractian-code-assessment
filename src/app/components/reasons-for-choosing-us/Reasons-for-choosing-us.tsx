import { FeaturesSection } from "../featuresSection/FeaturesSection";

export function ReasonsForChoosingUs() {
  return (
    <div className="bg-slate-100 h-130 py-15 px-80">
      <p className="font-extralight text-blue-600 text-[16px]">
        POR QUE GERENTES INDUSTRIAIS ESCOLHEM A TRACTIAN
      </p>
      <h1 className="text-blue-950 text-[40px] font-black">Visibilidade total, zero sobrecarga</h1>
      <div className="flex flex-col">
        <FeaturesSection />
      </div>
    </div>
  );
}
