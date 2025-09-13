import classNames from "classnames";

interface LayoutWrapperProps {
  children: React.ReactNode;
  cssClasses?: string;
}

const LayoutWrapper = ({ children, cssClasses }: LayoutWrapperProps) => {
  return (
    <div
      className={classNames(
        "max-w-[1280px] mx-auto px-7 min-[1336px]:px-0",
        cssClasses
      )}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
