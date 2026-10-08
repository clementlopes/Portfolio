interface ZarazConsent {
  /** Controls the visibility of the consent modal. */
  modal: boolean;
  /** Whether the Consent API is ready to be used. */
  APIReady: boolean;
}

interface Window {
  zaraz?: {
    consent: ZarazConsent;
  };
}
