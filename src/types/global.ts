import { ButtonHTMLAttributes, ComponentType, ReactNode, SVGProps } from "react";

export type ChildrenType = ReactNode;
export type SvgElementType = ComponentType<SVGProps<SVGSVGElement>>;
export type SvgPropsType = SVGProps<SVGSVGElement>;
export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IChildren {
    children: ChildrenType;
}
