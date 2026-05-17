// Utility to set CSS --vh custom property to reflect the real viewport height
// This helps avoid mobile browser chrome causing 100vh to be inconsistent.
function setVh() {
  const set = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  set()
  window.addEventListener('resize', set)
  window.addEventListener('orientationchange', set)
}

export default setVh
