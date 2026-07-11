// Thin wrapper around gtag so components never touch the global directly.
// Guards against gtag being absent (blocked by an ad/tracker blocker) so a
// click handler can never throw.
export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
