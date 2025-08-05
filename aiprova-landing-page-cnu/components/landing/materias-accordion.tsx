"use client" // Apenas este componente precisa ser de cliente!

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { materias } from "@/lib/landing-data"

export function MateriasAccordion() {
  return (
    <Card className="bg-white rounded-xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <h4 className="font-semibold text-ai-blue">Matérias</h4>
          <h4 className="font-semibold text-ai-blue">Cards</h4>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {materias.map((materia, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
              <AccordionTrigger className="text-sm hover:no-underline py-3 data-[state=open]:text-ai-blue data-[state=open]:font-semibold px-4">
                <div className="flex justify-between items-center w-full">
                  <span className="text-left text-gray-800 data-[state=open]:text-ai-blue">{materia.name}</span>
                  <span className="font-semibold text-ai-blue pr-4">{materia.count}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-0 pl-4 border-l-2 border-dotted border-gray-300 ml-2">
                <ul className="space-y-2">
                  {materia.subsections.map((sub, subIndex) => (
                    <li key={subIndex} className="flex justify-between items-center text-sm text-gray-600">
                      <span>{sub.name}</span>
                      <span className="font-semibold text-sky-blue">{sub.count}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
