import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({
  children,
  contactRef,
}: {
  children: React.ReactNode;
  contactRef?: any;
}) => {
  const scrollToContact = () => contactRef.current.scrollIntoView();

  return (
    <>
      <Header contactScrollHandler={scrollToContact} />
      {children}
      <Footer contactRef={contactRef} />
    </>
  );
};
