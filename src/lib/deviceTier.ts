export function getDeviceTier() {
  const cores = navigator.hardwareConcurrency ?? 4
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4
  const mobile = window.matchMedia('(max-width: 768px)').matches

  if (cores <= 4 || memory <= 4) {
    return mobile ? 'mobile-low' : 'desktop-low'
  }

  return mobile ? 'mobile-high' : 'desktop-high'
}
