import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export function Hero() {
  return (
    <div className="relative h-130 w-full flex items-center">
      <Image src="/hero.jpg" alt="Hero" fill className="object-cover" />
      <div className="flex-col relative z-10 w-full max-w-[50%] bg-blue-950 opacity-80 pl-80 py-20 h-130">
        <div className="flex flex-col gap-6 w-[80%]">
          <p className="font-light text-white text-body-md text-[16px]">
            OPERAÇÃO CONTÍNUA, ROI COMPROVADO
          </p>
          <h1 className="text-center font-bold text-white text-title-lg md:text-left text-[40px]/12">
            Para o Gerente Industrial que decide com dados, sem adivinhação
          </h1>
          <p className="text-center font-light text-white text-body-md md:text-left">
            Veja riscos, custos e desempenho em tempo real. A Tractian entrega a
            visibilidade financeira e operacional que sustenta cada decisão e
            mantém a planta no ritmo certo.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 font-semibold cursor-pointer mt-10 rounded-xs shadow-md hover:bg-blue-700 transition">
          Solicitar Demo
          <ArrowLongRightIcon className="size-6 inline-block ml-2" />
        </button>
      </div>
      <div className="flex flex-col absolute right-10 z-20 max-w-md bg-white p-6 shadow-lg rounded-xs w-[15%]">
        <span className="text-slate-500 text-sm text-[16px] mb-5">
          ”A solução da Tractian nos proporciona maior visibilidade e
          confiabilidade operacional, além de contribuir significativamente para
          o aumento da disponibilidade dos ativos e a assertividade no
          planejamento.”
        </span>
        <span className="flex flex-col text-[14px] text-slate-700">
          <b>Junior Si</b>
          Diretor Agroindustrial
          <b>LA</b>
        </span>
      </div>
    </div>
  );
}
