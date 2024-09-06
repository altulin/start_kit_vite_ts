import { FC } from "react";
import { HashLink } from "react-router-hash-link";
import {
  IPressBtn,
  IPressLink,
  TPressElement,
  TPressComponent,
  IPressHashLink,
} from "./types";
import clsx from "clsx";
import style from "./PressElement.module.scss";

const PressBtn: FC<IPressBtn> = ({ ...props }) => {
  const { class_name, type = "button" } = props;
  return (
    <button
      type={type}
      className={clsx(style.press, class_name)}
      {...props}
    ></button>
  );
};

const PressLink: FC<IPressLink> = ({ ...props }) => {
  const { class_name } = props;
  return <a className={clsx(style.press, class_name)} {...props}></a>;
};

const PressHashLink: FC<IPressHashLink> = ({ ...props }) => {
  const { class_name } = props;

  return (
    <HashLink className={clsx(style.press, class_name)} {...props}></HashLink>
  );
};

const PressComponent: FC<typeof TPressComponent> = ({ ...props }) => {
  const { label, icon = null, icon_pos = "left" } = props;

  return (
    <span
      className={clsx(style.label, icon_pos && style[`label--${icon_pos}`])}
    >
      {icon && <span className={clsx(style.label__icon)}>{icon}</span>}
      <span className={clsx(style.label__text)}>{label}</span>
    </span>
  );
};

const PressElement: FC<TPressElement> = ({ ...props }) => {
  const { variant_elem, label, icon, icon_pos, ...item_props } = props;
  const comp_props = {
    label,
    icon,
    icon_pos,
  };

  return (
    <>
      {variant_elem === "link" ? (
        <PressLink {...(item_props as IPressLink)}>
          <PressComponent {...comp_props} />
        </PressLink>
      ) : null}

      {variant_elem === "button" ? (
        <PressBtn {...(item_props as IPressBtn)}>
          <PressComponent {...comp_props} />
        </PressBtn>
      ) : null}

      {variant_elem === "hash_link" ? (
        <PressHashLink {...(item_props as IPressHashLink)}>
          <PressComponent {...comp_props} />
        </PressHashLink>
      ) : null}
    </>
  );
};
export default PressElement;
