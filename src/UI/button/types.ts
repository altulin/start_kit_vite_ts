import { ButtonHTMLAttributes, LinkHTMLAttributes, ReactNode } from "react";
import { HashLinkProps } from "react-router-hash-link";

export interface _TButton {
  variant_elem: "link" | "button" | "hash_link" | string;
  class_name?: string;
  label?: string;
  icon?: ReactNode;
  icon_pos?: "left" | "right";
  modifier?: string;
}

export let TPressComponent: Pick<_TButton, "label" | "icon" | "icon_pos">;

export interface IPressBtn
  extends _TButton,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IPressLink
  extends _TButton,
    LinkHTMLAttributes<HTMLAnchorElement> {}

export interface IPressHashLink extends _TButton, HashLinkProps {}

export type TPressElement = IPressBtn | IPressLink | IPressHashLink;
