export const NavBrand = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <div className={`h-full flex items-center w-1/4 ${className}`}>
      {children}
    </div>
  );
};
export const NavLinksList = ({
  children,
  justify,
}: {
  children?: React.ReactNode[];
  justify?: "center" | "left" | "right";
}) => {
  let justifyClass = "";
  switch (justify) {
    case "center":
      justifyClass = "justify-center";
      break;
    case "left":
      justifyClass = "justify-start";
      break;
    case "right":
      justifyClass = "justify-end";
      break;
    default:
      justifyClass = "justify-start";
  }
  return (
    <div className={`w-2/4 flex items-center ${justifyClass}`}>
      <ul className="flex gap-2 lg:gap-4">{children}</ul>;
    </div>
  );
};
export const NavAction = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-1/4 flex justify-end">{children}</div>;
};
