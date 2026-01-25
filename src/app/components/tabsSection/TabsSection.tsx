"use client";

import { useState } from "react";
import { FeatureData } from "./FeatureData";

export function TabsSection() {
  const tabs = [
    {
      id: "data",
      label: "Escale Baseado em Dados",
      title: "Mostre valor de forma incontestável.",
      subtitle:
        "A Tractian acompanha as métricas que importam - de tendências de parada a taxas de execução - para que você apresente ROI claro em cada reunião de performance.",
      optionsList: [
        "Acompanhe backlog, paradas, custos de manutenção e projeções financeiras",
        "Exporte dados para auditorias, relatórios e justificativas de CAPEX",
        "Filtre por área, ativo, falha ou período e foque no que importa",
        "Decida melhor com base em dados e tendências reais de performance",
      ],
      image: "escale-baseado-em-dados.avif",
    },
    {
      id: "ops",
      label: "Supervisão Operacional",
      title: "Tenha controle total da planta.",
      subtitle:
        "Padronize procedimentos, reduza riscos e esteja sempre pronto para auditorias. Com a Tractian, compliance deixa de ser um processo paralelo e vira rotina da equipe.",
      optionsList: [
        "POPs e permissões de trabalho anexadas direto às ordens de serviço",
        "Ações de segurança, validações e pendências visíveis em um só lugar",
        "Repetibilidade e responsabilização garantidas entre turnos e equipes",
        "Relatórios automáticos de quem fez o quê, quando e como",
        "Exportação instantânea de apontamentos para revisões e inspeções",
      ],
      image: "supervisao-operacional.avif",
    },
    {
      id: "multi",
      label: "Visibilidade Multiplantas",
      title:
        "Padronize a manutenção em todas as plantas, sem aumentar a complexidade.",
      subtitle:
        "Gerencie e compare ativos e equipes em uma única plataforma, mantendo processos e KPIs consistentes de ponta a ponta.",
      optionsList: [
        "Acompanhe KPIs entre plantas ou unidades de negócio",
        "Unifique alertas, processos e planejamento em um só sistema",
        "Benchmarks de eficiência e disponibilidade entre plantas em segundos",
        "Replique aprendizados de uma planta para as demais rapidamente",
      ],
      image: "visibilidade-multiplantas.avif",
    },
    {
      id: "zero",
      label: "Zero Gargalos de Mão de Obra",
      title:
        "Equilibre cargas e maximize cada turno, garantindo que seu time foque no que mais importa.",
      subtitle:
        "Antecipe desequilíbrios de cargas de trabalho e mantenha o time focado nas prioridades que geram maior impacto.",
      optionsList: [
        "Visualize a carga de cada técnico ou equipe para evitar sobrecarga",
        "Sinalize gargalos ou colisões no planejamento com um clique",
        "Reduza atritos alinhando tarefas preventivas a prioridades reais",
      ],
      image: "zero-gargalos.avif",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="flex flex-col w-full min-h-130 bg-white lg:mx-auto px-5 items-center lg:py-20 py-10">
      <h1 className="text-slate-900 font-extrabold lg:text-[32px] text-[20px]">
        Projetada para supervisão inteligente e resultados concretos
      </h1>
      <div className="border-b border-gray-200 lg:w-[70%] w-full lg:my-10 mb-10">
        <div className="flex flex-col w-full mt-8 lg:hidden bg-slate-50 rounded-md overflow-hidden">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
          px-3 py-3 text-sm m-2 transition
          ${
            isActive
              ? "bg-white text-slate-900 font-semibold shadow-sm"
              : "text-slate-500"
          }
        `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="lg:flex gap-30 hidden">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-[16px] font-medium transition-colors
            ${isActive ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}
          `}
              >
                {tab.label}

                {isActive && (
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        {activeContent && (
          <FeatureData
            title={activeContent.title}
            subtitle={activeContent.subtitle}
            optionsList={activeContent.optionsList}
            image={`/tabs/${activeContent.image}`}
          />
        )}
      </div>
    </div>
  );
}
