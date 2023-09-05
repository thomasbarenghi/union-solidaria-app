type AccountSectionProps = {
  children: React.ReactNode;
};

export default function AccountSection({ children }: AccountSectionProps) {
  return (
    <div className="listContainer py-[60px] section-padding-1 items-start">
      {children}
    </div>
  );
}
