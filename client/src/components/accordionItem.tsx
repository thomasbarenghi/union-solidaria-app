type Props = {
  showDescription: boolean;
  itemStyles: string;
  item: {
    question: string;
    answer: string;
  };
  index: number;
  onClick: () => void;
};

const AccordionItem = ({
  showDescription,
  itemStyles,
  item,
  index,
  onClick,
}: Props) => (
  <div
    className="w-full flex flex-col gap-1 border-b pb-4 border-green-500"
    key={item.question}
  >
    <div onClick={onClick}>
      <button className={`bodyText ${itemStyles}`} >
        {item.question}
      </button>
    </div>
    {showDescription && (
      <div>
        <p
          id={`faq${index + 1}_desc`}
          className={`bodyText font-light ${showDescription}`}
        >
          {item.answer}
        </p>
      </div>
    )}
  </div>
);

export default AccordionItem;
