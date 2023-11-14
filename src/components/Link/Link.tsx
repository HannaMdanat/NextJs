'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const CustomLink = ({ href = "/", children, ...restProps }: any) => {
  const pathname = usePathname();
  const locale = pathname.includes("/ar/") ? "ar" : "en";

  return (
    <Link href={`/${locale}${href}`} {...restProps}>
      {children}
    </Link>
  );
};
