"use client";

import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { HeaderStyles } from "@/app/styles/pages/header-style";

export function Header() {
  return (
    <HeaderStyles>
      <Image src={logoImg} alt="Logo" priority />
    </HeaderStyles>
  );
}
