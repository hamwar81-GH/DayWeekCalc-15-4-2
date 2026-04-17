const CALCULATE_BUTTON_SELECTOR = 'button[aria-label="Calculate day of the week"]';
const DATE_INPUT_SELECTOR = 'select[id$="-month"], input[id$="-day"], input[id$="-year"]';

function canTrack() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function trackEvent(eventName, params) {
  if (!canTrack()) {
    return;
  }

  window.gtag("event", eventName, params);
}

function trackCalculateClick() {
  trackEvent("calculate_click", {
    button_name: "calculate",
    page_location: window.location.href,
  });
}

function trackDateInputInteraction() {
  if (window.__dayWeekDateInputTracked) {
    return;
  }

  window.__dayWeekDateInputTracked = true;

  trackEvent("date_input_interaction", {
    input_type: "date",
    page_location: window.location.href,
  });
}

function trackEngagedUser() {
  trackEvent("engaged_user", {
    engagement_time: 10,
    page_location: window.location.href,
  });
}

function handleDocumentClick(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  if (event.target.closest(CALCULATE_BUTTON_SELECTOR)) {
    trackCalculateClick();
  }
}

function handleDateFieldInteraction(event) {
  if (!(event.target instanceof Element)) {
    return;
  }

  if (event.target.matches(DATE_INPUT_SELECTOR)) {
    trackDateInputInteraction();
  }
}

export function initializeAnalyticsEvents() {
  if (typeof window === "undefined" || window.__dayWeekAnalyticsInitialized) {
    return;
  }

  window.__dayWeekAnalyticsInitialized = true;
  window.__dayWeekDateInputTracked = false;

  document.addEventListener("click", handleDocumentClick, { passive: true });
  document.addEventListener("focusin", handleDateFieldInteraction);
  document.addEventListener("input", handleDateFieldInteraction, { passive: true });

  window.setTimeout(() => {
    if (document.visibilityState === "visible") {
      trackEngagedUser();
    }
  }, 10000);
}
