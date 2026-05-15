(() => {
  const style = document.createElement('style');
  style.textContent = `
    [class*="message-assistant"], [class*="message-agent"] {
      justify-content: flex-end !important;
      text-align: right !important;
    }
  `;
  document.head.appendChild(style);
})();
