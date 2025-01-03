import { PhosphorIconsLibraryKeyType, SvgElementType, SvgPropsType } from "~types";
import { PhosphorIconsLibrary } from "~utils";

type AdditionalPropsType = SvgPropsType;

interface IPhosphorIcon extends AdditionalPropsType {
    icon: PhosphorIconsLibraryKeyType;
}

export const PhosphorIcon = ({ icon, ...rest }: IPhosphorIcon) => {
    const Component = PhosphorIconsLibrary[icon] as SvgElementType;

    return <Component {...rest} />;
};
