import { FeaturesSection } from "../featuresSection/FeaturesSection";

export function ReasonsForChoosingUs() {
  return (
    <div className="lg:flex-row flex-col bg-slate-100 min-h-130 lg:py-15 py-10 lg:px-50 px-5">
      <p className="font-extralight text-blue-600 lg:text-[16px] text-sm">
        POR QUE GERENTES INDUSTRIAIS ESCOLHEM A TRACTIAN
      </p>
      <h1 className="text-blue-950 lg:text-[40px] text-[25px]/7 mt-5 font-black">Visibilidade total, zero sobrecarga</h1>
      <div className="flex flex-col">
        <FeaturesSection />
      </div>
    </div>
  );
}
