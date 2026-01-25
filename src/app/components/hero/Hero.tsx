import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export function Hero() {
  return (
    <div className="relative w-full flex flex-col-reverse lg:flex-row-reverse items-center">
      <div className="lg:flex hidden flex-col absolute right-10 z-20 max-w-md bg-white p-6 shadow-lg rounded-xs lg:w-[20%] w-[15%]">
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
      <div className="lg:static relative w-full h-75">
        <Image src="/hero.jpg" alt="Hero" fill className="object-cover" />
      </div>
      <div className="flex-col relative z-10 w-full text-center lg:text-start bg-blue-950 lg:opacity-80 lg:pl-50 py-10 lg:h-130">
        <div className="flex flex-col lg:gap-6 gap-4 xl:w-full lg:w[100%]">
          <p className="font-light text-white text-body-md lg:text-[16px] text-[14px]">
            OPERAÇÃO CONTÍNUA, ROI COMPROVADO
          </p>
          <h1 className="text-center lg:text-left lg:font-bold font-extrabold text-white text-title-lg text-[25px] lg:text-[40px]/12">
            Para o Gerente Industrial que decide com dados, sem adivinhação
          </h1>
          <p className="font-light text-white lg:text-left text-center text-sm lg:text-[16px]">
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
    </div>
  );
}
