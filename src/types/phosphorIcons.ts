import { PhosphorIconsLibraryMap } from "~utils";

export type PhosphorIconsLibraryMapKeyType = keyof typeof PhosphorIconsLibraryMap;

export interface IPhosphorIcon {
    icon: PhosphorIconsLibraryMapKeyType;
}
