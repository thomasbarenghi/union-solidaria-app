type ModalBoxForPopoverProps = {
  children: React.ReactNode;
  PopoverBoxClassname?: string;
};

export default function ModalBoxForPopover({
  children,
  PopoverBoxClassname,
}: ModalBoxForPopoverProps) {
  return (
    <div
      className=" absolute left-[50%] w-max translate-x-[-50%] "
      id="modalBoxForNav"
    >
      <div
        className={`${
          PopoverBoxClassname
            ? `${PopoverBoxClassname}`
            : "mt-3 flex flex-col gap-2 rounded-lg  px-6 py-6 "
        } bg-white shadow-2xl`}
      >
        {children}
      </div>
    </div>
  );
}
