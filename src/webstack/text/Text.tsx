// components/Text.tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Semantic =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label"
  | "div"
  | "strong"
  | "em"
  | "button";

type Size =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

type Align = "left" | "center" | "right" | "justify";
type Weight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";
type Transform = "uppercase" | "lowercase" | "capitalize" | "normal";

type SemanticColor =
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "danger"
  | "success"
  | "warning"
  | "info";

interface TextProps {
  as?: Semantic;
  size?: Size;
  weight?: Weight;
  align?: Align;
  color?: SemanticColor | string;
  children: ReactNode;
  italic?: boolean;
  underline?: boolean;
  transform?: Transform;
  truncate?: boolean | number;
  className?: string;
  noWrap?: boolean;
  onClick?: () => void;
}

const sizeMap: Record<Size, string> = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

const weightMap: Record<Weight, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const colorMap: Record<SemanticColor, string> = {
  default: "text-inherit",
  primary: "text-blue-600",
  secondary: "text-purple-600",
  muted: "text-gray-500",
  danger: "text-red-600",
  success: "text-green-600",
  warning: "text-yellow-600",
  info: "text-sky-600",
};

const Text = ({
  as = "span",
  size = "base",
  weight = "normal",
  align,
  color = "default",
  italic,
  underline,
  transform,
  truncate,
  className,
  children,
  noWrap,
  onClick,
}: TextProps) => {
  const Component = as;

  const truncateClass =
    truncate === true
      ? "truncate"
      : typeof truncate === "number"
      ? `line-clamp-${truncate}`
      : "";
      const resolvedColor =
      typeof color === "string" && !(color in colorMap)
        ? color
        : colorMap[color as SemanticColor] || "text-inherit";
    
    
  return (
    <Component
      onClick={onClick}
      className={cn(
        sizeMap[size],
        weightMap[weight],
        align && `text-${align}`,
        transform && transform !== "normal" && transform,
        italic && "italic",
        underline && "underline",
        resolvedColor,
        truncateClass,
        noWrap && "whitespace-nowrap",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Text;
