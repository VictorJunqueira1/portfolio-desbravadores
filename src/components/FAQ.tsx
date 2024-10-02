import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "O que é o Clube de Desbravadores?",
        answer: "O Clube de Desbravadores é uma organização para jovens com idades entre 10 e 15 anos, promovida pela Igreja Adventista do Sétimo Dia...",
    },
    {
        question: "Quem pode participar do Clube de Desbravadores?",
        answer: "Qualquer jovem com idades entre 10 e 15 anos pode se tornar um desbravador, independentemente de sua religião ou crenças...",
    },
    {
        question: "Como posso inscrever meu filho no Clube de Desbravadores?",
        answer: "Para inscrever seu filho, entre em contato com o clube de desbravadores mais próximo...",
    },
    {
        question: "Quais são as atividades realizadas pelo Clube de Desbravadores?",
        answer: "O clube oferece uma ampla gama de atividades, incluindo: Acampamentos e caminhadas, estudos da natureza...",
    },
    {
        question: "Quais são os benefícios de participar do Clube de Desbravadores?",
        answer: "Os desbravadores desenvolvem habilidades práticas, aprendem a trabalhar em equipe, ganham autoconfiança e fazem novos amigos...",
    },
    {
        question: "O Clube de Desbravadores participa de eventos maiores?",
        answer: "Sim, além das atividades locais, os desbravadores frequentemente participam de eventos regionais, nacionais e até internacionais...",
    }
];

const faqItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Widget() {
    return (
        <div className="flex flex-col lg:flex-row p-4 md:p-6 lg:p-8 bg-background space-y-6 lg:space-y-0 lg:space-x-8" id="faq">
            {/* Imagem lateral */}
            <motion.div 
                className="relative flex-1 min-h-[300px] lg:min-h-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
                }}
            >
                <Image
                    fill
                    src="/images/campori-pic.jpg"
                    alt="Desbravadores em atividade"
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                />
            </motion.div>

            {/* Conteúdo do FAQ */}
            <motion.div 
                className="flex-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
                }}
            >
                <h2 className="text-xl font-semibold text-orange-500">Perguntas Frequentes sobre os Desbravadores</h2>
                <p className="text-muted-foreground mt-2">
                    Aqui você encontrará respostas para algumas das perguntas mais comuns sobre o Clube de Desbravadores.
                </p>

                {/* Accordion com animação para cada item */}
                <div className="mt-4">
                    <Accordion type="single" collapsible>
                        {faqItems.map((item, index) => (
                            <motion.div 
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.6 }}
                                variants={faqItemVariants}
                            >
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="border bg-gray-100 rounded-md mb-4 border-gray-200 font-semibold px-2">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 text-base">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </motion.div>
        </div>
    );
}