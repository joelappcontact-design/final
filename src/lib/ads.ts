// Minimal Google Ads conversion helper for phone call clicks
// Tries gtag first (if available via GTM/Google tag), otherwise pushes to dataLayer

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type ConversionParams = {
  value?: number;
  currency?: string;
  href?: string;
};

function buildSendToId(): string | null {
  const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || process.env.NEXT_PUBLIC_GOOGLE_ADS_TAG_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL;
  if (!conversionId || !label) return null;
  // Ensure the id includes the AW- prefix
  const normalizedId = conversionId.startsWith('AW-') ? conversionId : `AW-${conversionId}`;
  return `${normalizedId}/${label}`;
}

export function reportPhoneConversion(params: ConversionParams = {}): void {
  const { value = 1.0, currency = 'EUR', href } = params;
  const sendTo = buildSendToId();
  if (!sendTo) {
    return;
  }

  const callback = () => {
    if (href) {
      try {
        window.location.href = href;
      } catch (_) {
        // ignore
      }
    }
  };

  if (typeof window.gtag === 'function') {
    // Use gtag if available
    // @ts-expect-error - gtag typing is optional
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      value,
      currency,
      event_callback: callback,
    });
    return;
  }

  // Fallback to dataLayer for GTM-based setups
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'ads_phone_call',
    send_to: sendTo,
    value,
    currency,
  });

  // Do not block the default action; optionally attempt callback soon after
  setTimeout(callback, 0);
}


