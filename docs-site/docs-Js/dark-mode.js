let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const sidebarToggle = document.querySelector('[data-js=toggle-sidebar]');
const closeSideBar = document.querySelector('[data-js=close-sidebar]');
const sidebar = document.querySelector('.sidenav-nav');
const navBackdrop = document.querySelector('#nav-backdrop');
const body = document.querySelector('body');

//if dark mode is enabled turn it off else turn it on
const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
    sidebar.classList.add('sidebar-dark');
  } else {
    disableDarkMode();
    sidebar.classList.remove('sidebar-dark');
  }
});

const toggleSidebar = () => {
  sidebar.classList.add('sidebar-fade');
  sidebar.classList.toggle('sidebar-open');
  navBackdrop.classList.toggle('backdrop');
  body.classList.toggle('overflow-hidden-y');
};

sidebarToggle.addEventListener('click', () => {
  toggleSidebar();
});

closeSideBar.addEventListener('click', () => {
  toggleSidebar();
});

navBackdrop.addEventListener('click', () => {
  toggleSidebar();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.remove('sidebar-fade');
    navBackdrop.classList.remove('backdrop');
    body.classList.remove('overflow-hidden-y');
  }
});
