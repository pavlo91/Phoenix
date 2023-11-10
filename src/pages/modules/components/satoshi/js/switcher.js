(() => {
  'use strict'
  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'light')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  const toggleNavbarMode = function (theme) {
    const navbar = document.getElementById('navbar');

    if (!navbar) return 

    if (theme === 'light' || theme === 'auto') {
      // If navbar is currently dark, switch to light
      navbar.classList.remove("navbar-dark", "bg-transparent");
      navbar.classList.add("navbar-light", "bg-transparent");
    } else {
      // If navbar is currently light, switch to dark
      navbar.classList.remove("navbar-light", "bg-transparent");
      navbar.classList.add("navbar-dark", "bg-transparent");
    }
  } 

  const toggleSidebarMode = function (theme) {
    const navbar = document.getElementById('sidebar');

    if (theme === 'light' || theme === 'auto') {
      // If navbar is currently dark, switch to light
      navbar.classList.remove("navbar-dark", "bg-transparent");
      navbar.classList.add("navbar-light", "bg-transparent");
    } else {
      // If navbar is currently light, switch to dark
      navbar.classList.remove("navbar-light", "bg-transparent");
      navbar.classList.add("navbar-dark", "bg-transparent");
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = theme => {
    // const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    // const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    if (!btnToActive) return
    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
    })

    btnToActive.classList.add('active')
    // activeThemeIcon.setAttribute('href', svgOfActiveBtn)

    toggleNavbarMode(theme)
    toggleSidebarMode(theme)
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme)
        })
      })
  })
})()