"use client";
import Image from "next/image";
import { useState } from "react";
import { MegaMenu } from "./MegaMenu";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export function Header() {
  const sections = ["Soluções", "Indústrias", "Recursos", "Sobre", "Planos"];
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectorOpen, setSelectorOpen] = useState<string | null>(null);

  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-40 flex w-full flex-col items-center justify-center transition-colors duration-default ease-in-out bg-slate-100 border-b border-slate-200 py-4">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <div className="flex items-center space-x-10">
          <Image src="/logo.png" alt="Logo" width={130} height={130} />
          <ul className="flex items-center gap-6">
            {sections.map((section, index) => (
              <li
                key={index}
                className="text-slate-500 hover:text-blue-600"
                onClick={() =>
                  open
                    ? (setOpen(null), setSelectedSection(null))
                    : (setOpen(sections[index]), setSelectedSection(section))
                }
              >
                <button
                  className={`flex items-center cursor-pointer ${selectedSection === section ? "text-blue-600" : ""}`}
                >
                  <span className="font-semibold">{section}</span>
                  {selectedSection === section ? (
                    <ChevronUpIcon className="size-6" />
                  ) : (
                    <ChevronDownIcon className="size-6" />
                  )}
                </button>
                {selectedSection === section && <MegaMenu />}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex-col">
            <button
              className="flex cursor-pointer text-slate-500 hover:text-blue-600"
              onClick={() => setSelectorOpen(!selectorOpen ? "language" : null)}
            >
              <GlobeAltIcon
                className={`size-6 ${selectorOpen ? "text-blue-600" : "text-slate-500"}`}
              />
              {selectorOpen ? (
                <ChevronUpIcon
                  className={`size-6 ${selectorOpen ? "text-blue-600" : "text-slate-500"}`}
                />
              ) : (
                <ChevronDownIcon
                  className={`size-6 ${selectorOpen ? "text-blue-600" : "text-slate-500"}`}
                />
              )}
            </button>
            {selectorOpen && (
              <div className="absolute right-15 z-50 top-full w-48 rounded-md bg-white shadow-lg">
                <ul className="py-1">
                  <li>
                    <button className="block w-full px-4 py-2 text-left text-sm text-slate-500 hover:bg-slate-100">
                      Português
                    </button>
                  </li>
                  <li>
                    <button className="block w-full px-4 py-2 text-left text-sm text-slate-500 hover:bg-slate-100">
                      English
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="cursor-pointer text-slate-500 hover:text-blue-600 font-semibold">
            Login
          </button>
          <button className="cursor-pointer text-blue-600 font-semibold border border-blue-600 rounded-sm px-4 py-2">
            Demonstração
          </button>
        </div>
      </div>
    </nav>
  );
}
