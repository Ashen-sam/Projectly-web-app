"use client";
import { Store } from "@/services/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={Store}>{children}</Provider>
    </div>
  );
};
