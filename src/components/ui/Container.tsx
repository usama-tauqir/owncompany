import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
  padding?: string;
};

const maxWidthMap: Record<NonNullable<ContainerProps["maxWidth"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  maxWidth = "2xl",
  padding = "px-4 py-6",
}) => {
  const widthClass = maxWidthMap[maxWidth] || maxWidthMap["2xl"];

  return (
    <div className={`mx-auto w-full ${widthClass} ${padding} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Container;
