import classNames from "classnames";

export const buttonStyles = (
  cssClasses?: string,
  disabled?: boolean,
  pending?: boolean,
  colorBlack?: boolean
) =>
  classNames(
    "border-2 flex text-paragraph text-center py-3 px-4 justify-center ease-in-out duration-300 rounded-md min-w-[100px]",
    cssClasses,
    {
      "opacity-50 cursor-not-allowed hover:none": pending || disabled,
      "cursor-pointer": !(disabled || pending),
      "bg-black border-black text-white": colorBlack,
      "bg-white border-white text-black": !colorBlack,
      "desktop:hover:bg-black desktop:hover:text-white":
        !colorBlack && !(disabled || pending),
      "desktop:hover:bg-white desktop:hover:text-black":
        colorBlack && !(disabled || pending),
    }
  );
