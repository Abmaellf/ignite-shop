"use client";

import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "./styles";
import { GlobalStyles } from "./styles/globals";
import { useState } from "react";


export function StitchesRegistry({ children }: { children: React.ReactNode }) {
  useState(() => {
   GlobalStyles()
 })
  useServerInsertedHTML(() => (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  ));

  return <>{children}</>;
}