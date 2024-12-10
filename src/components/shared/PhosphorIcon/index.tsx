import { IPhosphorIcon, SvgElementType, SvgPropsType } from "~types";
import { PhosphorIconsLibrary } from "~utils";

type AdditionalProps = SvgPropsType & IPhosphorIcon;

interface IPhosphorIconProps extends AdditionalProps {}

export const PhosphorIcon = ({ icon, ...rest }: IPhosphorIconProps) => {
    const Component = PhosphorIconsLibrary[icon] as SvgElementType;

    return <Component {...rest} />;
};
