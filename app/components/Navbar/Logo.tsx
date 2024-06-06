"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image src="/logo.png" alt="logo" height={100} width={100} />
    </div>
  );
};

export default Logo;
