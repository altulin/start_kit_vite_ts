import { useState } from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
import Links from "./Links";
import Nav from "./Nav";
import Logo from "@/UI/logo/Logo";
import { HidingHeader } from "hiding-header-react";
import "hiding-header/dist/style.css";

const Header = () => {
  const [isMenu, setMenu] = useState(true);

  return (
    <HidingHeader
    // onHomeChange={(isHomeNew) => {
    //   // console.log(isHomeNew);
    // }}
    >
      <header className={clsx(style.header)}>
        <div className={clsx(style.header__inner)}>
          <Logo parent={"header"} />

          <Nav isMenu={isMenu} setMenu={setMenu}>
            <Links setMenu={setMenu} />
          </Nav>
        </div>
      </header>
    </HidingHeader>
  );
};
export default Header;
