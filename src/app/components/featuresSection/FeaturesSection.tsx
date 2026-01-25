"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";

const features = [
  {
    title: "Dados precisos comprovam cada centavo de ROI",
    description:
      "Com os dashboards da Tractian, você centraliza custos evitados, horas de parada eliminadas e produtividade extra. Cada centavo economizado aparece em tempo real, sem planilhas, pronto justificar decisões nas reuniões com a diretoria.",
    image: "/features/feature-1.jpg",
  },
  {
    title: "Antecipe falhas críticas, evite paradas caras",
    description:
      "Identifique falhas logo nos primeiros sinais e evite paradas inesperadas. Com a Tractian, seu time de manutenção sai do modo reativo de 'apagar incêndios' para o planejamento proativo, com menos surpresas e menos chamados urgentes e fora de turno.",
    image: "/features/feature-2.jpg",
  },
  {
    title: "Equipes enxutas, performance máxima",
    description:
      "Falta de mão de obra qualificada e treinamentos demorados afetam seu ritmo. A Tractian oferece ferramentas que priorizam OS com base na criticidade, automatizam diagnósticos e orientam intervenções passo a passo. Assim, seu time resolve problemas mais rápido, evita retrabalho e entrega mais a cada turno.",
    image: "/features/feature-3.jpg",
  },
  {
    title: "Auditorias e compliance sem papelada",
    description:
      "Certificações, normas e exigências corporativas ainda exigem papelada e consomem HH do seu time. A Tractian registra cada intervenção em tempo real, carimba data e responsável e arquiva tudo na nuvem. Em auditorias, você gera relatórios completos em poucos cliques: zero papel, zero risco de não conformidade.",
    image: "/features/feature-4.jpg",
  },
];

export function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col">
          <ul className="flex flex-col space-y-6 border-l border-slate-300 lg:pl-3 pl-3">
            {features.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  key={feature.title}
                  className="cursor-pointer flex"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex flex-col items-start ">
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-6 w-6 items-center justify-center ${
                          isActive ? "bg-blue-600" : "bg-slate-400"
                        }`}
                      >
                        <CheckIcon className="h-4 w-4 text-white" />
                      </span>
                      <p
                        className={`font-semibold lg:text-[20px] text-[16px] ${
                          isActive ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {feature.title}
                      </p>
                    </div>
                    <div className="lg:pr-30">
                      {isActive && feature.description && (
                        <p className="mt-2 text-[16px] font-medium text-slate-500">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative h-105 w-full">
          <Image
            src={features[activeIndex].image}
            alt=""
            fill
            className="rounded-lg object-cover"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
