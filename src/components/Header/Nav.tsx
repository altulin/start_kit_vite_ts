import clsx from "clsx";
import style from "./Header.module.scss";
import useIsSmallDevice from "../../hooks/IsSmallDevice";
import { slide as Menu } from "react-burger-menu";
import { FC } from "react";

interface NavProps {
  children: React.ReactNode;
  isMenu: boolean;
  setMenu: (isOpen: boolean) => void;
}

const Nav: FC<NavProps> = ({ children, isMenu, setMenu }) => {
  const isMobileOrTablet = useIsSmallDevice();

  return isMobileOrTablet ? (
    <Menu
      isOpen={isMenu}
      onStateChange={(state) => {
        setMenu(state.isOpen);
      }}
      width={"100%"}
      noOverlay
      customBurgerIcon={false}
      className={clsx(style.header__nav, style.nav)}
    >
      {children}
    </Menu>
  ) : (
    <nav className={clsx(style.header__nav)}>{children}</nav>
  );
};
export default Nav;
