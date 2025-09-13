import classNames from "classnames";

interface SectionHeadingProps {
  children: React.ReactNode;
  cssClasses?: string;
}

const SectionHeading = ({ children, cssClasses }: SectionHeadingProps) => {
  return (
    <h2 className={classNames("text-heading uppercase", cssClasses)}>
      {children}
    </h2>
  );
};

export default SectionHeading;
