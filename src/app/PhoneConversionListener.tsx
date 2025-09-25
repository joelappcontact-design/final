"use client";

import { reportPhoneConversion } from "../lib/ads";

export default function PhoneConversionListener() {
  // Attach one global click listener to capture tel: link clicks
  if (typeof window !== "undefined") {
    // Ensure we do not attach multiple times during HMR
    if (!(window as any).__phoneListenerAttached) {
      (window as any).__phoneListenerAttached = true;
      document.addEventListener(
        "click",
        (event) => {
          const target = event.target as HTMLElement | null;
          if (!target) return;
          const anchor = target.closest && target.closest('a[href^="tel:"]');
          if (!anchor) return;
          const href = (anchor as HTMLAnchorElement).getAttribute("href") || undefined;
          reportPhoneConversion({ href });
        },
        true
      );
    }
  }

  return null;
}
