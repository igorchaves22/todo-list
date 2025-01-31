import { PhosphorIconsLibraryItemsKeyType, SVGPropsType } from "~types";
import { PhosphorIconsLibraryItems } from "~utils";

type AdditionalPropsType = SVGPropsType;

interface IPhosphorIconProps extends AdditionalPropsType {
    icon: PhosphorIconsLibraryItemsKeyType;
}

export const PhosphorIcon = ({ icon, ...rest }: IPhosphorIconProps) => {
    const Component = PhosphorIconsLibraryItems[icon];

    return <Component {...rest} />;
};
