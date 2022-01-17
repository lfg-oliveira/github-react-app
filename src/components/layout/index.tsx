import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }: {children: JSX.Element}) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;