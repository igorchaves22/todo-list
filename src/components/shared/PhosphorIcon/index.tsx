import { IPhosphorIcon, SvgElementType, SvgPropsType } from "~types";
import { PhosphorIconsLibraryMap } from "~utils";

type AdditionalProps = SvgPropsType & IPhosphorIcon;

interface IPhosphorIconProps extends AdditionalProps {}

export const PhosphorIcon = ({ icon, ...rest }: IPhosphorIconProps) => {
    const Component = PhosphorIconsLibraryMap[icon] as SvgElementType;

    return <Component {...rest} />;
};
