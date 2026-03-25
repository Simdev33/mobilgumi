"use client";

import { ReactNode } from "react";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

interface PhoneLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export default function PhoneLink({ href, className, children }: PhoneLinkProps) {
  const handleClick = () => {
    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
