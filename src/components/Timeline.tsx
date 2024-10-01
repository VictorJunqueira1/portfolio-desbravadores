"use client";

import { Button, Timeline as FlowbiteTimeline } from "flowbite-react";
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

const useTimelineItemInView = () => {
    return useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
};

const defaultTimelineItems: TimelineItem[] = [
    {
        time: "Dez - 2019",
        title: "Fundação do Home Adventure",
        body: "Com a visão de proporcionar uma experiência de aprendizado, espiritualidade e aventura, o Clube Home Adventure foi fundado. Desde o início, o clube atraiu crianças, adolescentes e suas famílias, que estavam ansiosos por fazer parte desse novo movimento.",
    },
    {
        time: "2020 - 2021",
        title: "Superando os Desafios da Pandemia",
        body: "A pandemia trouxe enormes desafios para o clube. As atividades presenciais foram suspensas, mas o Home Adventure se reinventou. Adotamos reuniões online, atividades remotas e o contato virtual para manter o espírito de aventura e comunhão entre os membros.",
    },
    {
        time: "2022 - Presente",
        title: "Superação e Crescimento",
        body: "Com o fim das restrições, o Home Adventure voltou com força total. Hoje, o clube é o maior de Mogi Guaçu, com mais de 80 membros ativos. Continuamos a promover atividades que fortalecem a fé, o companheirismo e o desenvolvimento de cada criança e adolescente que participa.",
    }
];

export function Timeline({ items = defaultTimelineItems }: TimelineProps) {
    return (
        <FlowbiteTimeline horizontal>
            {items.map((item, index) => {
                const { ref, inView } = useTimelineItemInView();

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
                                <FlowbiteTimeline.Point className="bg-blue-500 text-white" />
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