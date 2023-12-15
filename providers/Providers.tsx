"use client";
import { MainCtxProvider } from "@/context/Main";
import React from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <MainCtxProvider>{children}</MainCtxProvider>;
};

export default Providers;
