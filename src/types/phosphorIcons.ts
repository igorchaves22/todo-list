import { PhosphorIconsLibrary } from "~utils";

export type PhosphorIconsLibraryKeyType = keyof typeof PhosphorIconsLibrary;

export interface IPhosphorIcon {
    icon: PhosphorIconsLibraryKeyType;
}
