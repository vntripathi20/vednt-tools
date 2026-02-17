// Dynamically load Google Analytics
(function() {
  // Load gtag.js script from Google CDN
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-E52W5NZHQ4';
  document.head.appendChild(script);

  // Configure gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-E52W5NZHQ4');
})();
