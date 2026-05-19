"use client";

import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "./styles";

export function StitchesRegistry({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  ));

  return <>{children}</>;
}
