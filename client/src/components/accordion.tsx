import { useState } from "react";
import { AccordionItem } from "@/components";

type Props = {
  questionsAnswers: {
    question: string;
    answer: string;
  }[];
};

const Accordion = ({ questionsAnswers }: Props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 w-full gap-5">
      {questionsAnswers.map((item, index) => {
        const showDescription = index === activeIndex ? true : false;
        const itemStyles =
          index === activeIndex ? "font-semibold" : "font-light";

        return (
          <AccordionItem
            showDescription={showDescription}
            itemStyles={itemStyles}
            item={item}
            index={index}
            onClick={() => {
              setActiveIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
