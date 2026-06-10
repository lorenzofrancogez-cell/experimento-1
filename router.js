// Simple hash-based router
const routes = {}

export function registerRoute(name, initFn) {
  routes[name] = initFn
}

export function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
  const el = document.getElementById('page-' + page)
  if (el) {
    el.classList.add('active')
    if (routes[page]) routes[page]()
  }
  window.location.hash = page
}

export function initRouter() {
  const hash = window.location.hash.replace('#', '') || 'landing'
  navigate(hash)
}
