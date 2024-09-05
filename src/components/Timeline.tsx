"use client";

import { Button, Timeline as FlowbiteTimeline } from "flowbite-react";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TimelineItem {
    time: string;
    title: string;
    body: string;
    buttonLabel?: string;
    buttonColor?: string;
    buttonIcon?: React.ReactNode;
}

interface TimelineProps {
    items?: TimelineItem[];
}

const defaultTimelineItems: TimelineItem[] = [
    {
        time: "Dez - 2019",
        title: "Fundação do Home Adventure",
        body: "Em dezembro de 2019, o clube Home Adventure foi fundado com o objetivo de proporcionar experiências enriquecedoras e aventuras inesquecíveis. O início foi promissor e a comunidade estava empolgada com o novo projeto.",
        buttonLabel: "Saiba Mais",
        buttonColor: "gray",
        buttonIcon: <ArrowRight className="h-4 w-4" />
    },
    {
        time: "Dez - 2019",
        title: "Fundação do Home Adventure",
        body: "Em dezembro de 2019, o clube Home Adventure foi fundado com o objetivo de proporcionar experiências enriquecedoras e aventuras inesquecíveis. O início foi promissor e a comunidade estava empolgada com o novo projeto.",
        buttonLabel: "Saiba Mais",
    },
    {
        time: "2020 - 2021",
        title: "Desafios Durante a Pandemia",
        body: "Durante os anos de 2020 e 2021, o Home Adventure enfrentou grandes desafios devido à pandemia. Apesar das dificuldades e das restrições, o clube se adaptou e continuou a oferecer atividades e suporte aos seus membros, mantendo a união e o espírito de aventura.",
    },
    {
        time: "2022 - Presente",
        title: "Superação e Crescimento",
        body: "Após os desafios da pandemia, o Home Adventure se reergueu com mais força. Hoje, é o maior clube de Mogi Guaçu, com um total de 80 membros. O clube continua a se destacar pela sua dedicação à comunhão com Deus e ao fortalecimento da comunidade.",
    }
];

export function Timeline({ items = defaultTimelineItems }: TimelineProps) {
    return (
        <FlowbiteTimeline horizontal>
            {items.map((item, index) => {
                const { ref, inView } = useInView({
                    triggerOnce: true,
                    threshold: 0.9,
                });
                return (
                    <motion.div
                        key={index}
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                        transition={{ duration: 0.9, delay: index * 0.2 }}
                    >
                        <FlowbiteTimeline.Item>
                            <div className="relative">
                                <FlowbiteTimeline.Point className="bg-blue-500 text-white" icon={Calendar} />
                            </div>
                            <FlowbiteTimeline.Content className="text-gray-800 p-4 rounded-lg">
                                <FlowbiteTimeline.Time className="text-gray-600">{item.time}</FlowbiteTimeline.Time>
                                <FlowbiteTimeline.Title className="text-xl font-semibold">{item.title}</FlowbiteTimeline.Title>
                                <FlowbiteTimeline.Body className="text-gray-700">{item.body}</FlowbiteTimeline.Body>
                                {item.buttonLabel && item.buttonColor && (
                                    <Button
                                        color={item.buttonColor}
                                        className="mt-2 flex items-center justify-center bg-orange-500 text-white hover:bg-orange-600"
                                    >
                                        {item.buttonLabel}
                                        {item.buttonIcon && (
                                            <span className="ml-2 flex items-center justify-center">
                                                {item.buttonIcon}
                                            </span>
                                        )}
                                    </Button>
                                )}
                            </FlowbiteTimeline.Content>
                        </FlowbiteTimeline.Item>
                    </motion.div>
                );
            })}
        </FlowbiteTimeline>
    );
}