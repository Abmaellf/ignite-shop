"use client";

import { Container } from "@/app/styles/pages/header-style";
import { Header } from "./header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
