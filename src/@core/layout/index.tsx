import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children: any;
}
const AppBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 64px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 3px 10px #52525296;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  color: #212121;
  font-size: 20px;
`;
const MainLayout: FC<Props> = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <AppBar>
        {location.pathname === "/orders" ? (
          <CustomLink to={"/"}>Home</CustomLink>
        ) : (
          <CustomLink to={"/orders"}>Orders</CustomLink>
        )}
      </AppBar>
      {children}
    </>
  );
};

export default MainLayout;
