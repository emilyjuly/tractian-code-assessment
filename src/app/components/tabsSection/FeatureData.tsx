import Image from "next/image";

type FeatureDataProps = {
  title: string;
  subtitle: string;
  optionsList: string[];
  image: string;
};

export function FeatureData({
  title,
  subtitle,
  optionsList,
  image,
}: FeatureDataProps) {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-10 mx-5 lg:mx-0">
      <div className="flex flex-col lg:w-[35%]">
        <p className="text-slate-800 text-[20px] font-extrabold">{title}</p>
        <p className="text-slate-500 text-[16px] my-5 font-medium">
          {subtitle}
        </p>
        <ul className="text-slate-500 text-[16px] list-disc">
          {optionsList.map((o, index) => {
            return <li key={index}>{o}</li>;
          })}
        </ul>
      </div>
      <div className="relative h-105 lg:w-[65%]">
        <Image
          src={image}
          alt={image}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
