import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

declare type NextPageWithLayout<T = any> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
  pageTitle?: string;
};

declare type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
