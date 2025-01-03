import { ButtonHTMLAttributes, ComponentType, ReactNode, SVGProps } from "react";

export type ChildrenType = ReactNode;
export type SvgPropsType = SVGProps<SVGSVGElement>;
export type SvgElementType = ComponentType<SvgPropsType>;
export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IChildren {
    children: ChildrenType;
}
