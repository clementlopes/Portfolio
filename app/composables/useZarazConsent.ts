export const useZarazConsent = () => {
  const hasZaraz = ref(false);

  onMounted(() => {
    hasZaraz.value = typeof window !== 'undefined' && !!window.zaraz;
  });

  const openConsentModal = () => {
    const zaraz = window.zaraz;
    if (!zaraz) return;

    const show = () => {
      zaraz.consent.modal = true;
    };

    if (zaraz.consent.APIReady) {
      show();
      return;
    }

    document.addEventListener('zarazConsentAPIReady', show, { once: true });
  };

  return { hasZaraz, openConsentModal };
};
