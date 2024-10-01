import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Image from "next/image";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "O que é o Clube de Desbravadores?",
        answer: "O Clube de Desbravadores é uma organização para jovens com idades entre 10 e 15 anos, promovida pela Igreja Adventista do Sétimo Dia. O clube se dedica a ajudar os jovens a desenvolver habilidades práticas, fortalecer seu caráter e explorar o mundo ao seu redor através de atividades ao ar livre, projetos de serviço comunitário e aprendizado em diversas áreas.",
    },
    {
        question: "Quem pode participar do Clube de Desbravadores?",
        answer: "Qualquer jovem com idades entre 10 e 15 anos pode se tornar um desbravador, independentemente de sua religião ou crenças. O clube está aberto a todos que desejam participar das atividades e aprender com os programas oferecidos.",
    },
    {
        question: "Como posso inscrever meu filho no Clube de Desbravadores?",
        answer: "Para inscrever seu filho, entre em contato com o clube de desbravadores mais próximo. Você pode encontrar informações de contato no site da Igreja Adventista local ou perguntar na igreja adventista mais próxima. Geralmente, há um formulário de inscrição e uma pequena taxa de adesão.",
    },
    {
        question: "Quais são as atividades realizadas pelo Clube de Desbravadores?",
        answer: "O clube oferece uma ampla gama de atividades, incluindo: Acampamentos e caminhadas, estudos da natureza e habilidades de sobrevivência, projetos de serviço comunitário, artes e ofícios, esportes e recreação, atividades espirituais e desenvolvimento pessoal",
    },
    {
        question: "Quais são os benefícios de participar do Clube de Desbravadores?",
        answer: "Os desbravadores desenvolvem habilidades práticas, aprendem a trabalhar em equipe, ganham autoconfiança e fazem novos amigos. Além disso, eles participam de atividades que promovem o crescimento pessoal e espiritual.",
    },
    {
        question: "O Clube de Desbravadores participa de eventos maiores?",
        answer: "Sim, além das atividades locais, os desbravadores frequentemente participam de eventos regionais, nacionais e até internacionais, como camporis, que são grandes encontros de desbravadores cheios de aventuras, aprendizado e diversão.",
    }
];

export default function Widget() {
    return (
        <div className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 bg-background space-y-6 lg:space-y-0 lg:space-x-8" id="faq">
            <div className="relative flex-1 min-h-[300px] lg:min-h-0">
                <Image
                    fill
                    src="/images/campori-pic.jpg"
                    alt="Desbravadores em atividade"
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-orange-500">Perguntas Frequentes sobre os Desbravadores</h2>
                <p className="text-muted-foreground mt-2">
                    Aqui você encontrará respostas para algumas das perguntas mais comuns sobre o Clube de Desbravadores.
                </p>
                <div className="mt-4">
                    <Accordion type="single" collapsible>
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="border-none bg-gray-200 rounded-md mb-4 font-semibold px-2">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
}