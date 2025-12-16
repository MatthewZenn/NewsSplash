const { getCurrentWindow } = window.__TAURI__.window;

const appWindow = getCurrentWindow();

/*document
  .getElementById('titlebar-minimize')
  ?.addEventListener('click', () => appWindow.minimize());
document
  .getElementById('titlebar-maximize')
  ?.addEventListener('click', () => appWindow.toggleMaximize());
*/
document.getElementById('close')?.addEventListener('click', () => appWindow.close());