import { ButtonHTMLAttributes, ComponentType, InputHTMLAttributes, ReactNode, SVGProps } from "react";

export type ChildrenType = ReactNode;
export type SvgPropsType = SVGProps<SVGSVGElement>;
export type SvgElementType = ComponentType<SvgPropsType>;
export type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>;
export type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

export interface IChildren {
    children: ChildrenType;
}
