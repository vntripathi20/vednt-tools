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
  // Dynamically load Google Analytics and inject SEO metadata (canonical, Twitter, JSON-LD)
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

    // Inject SEO metadata and structured data to every page dynamically
    function injectSEOMeta(){
      try{
        const head = document.head;
        const origin = location.protocol + '//' + location.host;
        const canonicalHref = origin + location.pathname;

        // canonical
        if(!document.querySelector('link[rel="canonical"]')){
          const link = document.createElement('link');
          link.rel = 'canonical';
          link.href = canonicalHref;
          head.appendChild(link);
        }

        // Open Graph / Twitter fallbacks
        const title = document.title || 'VTools - Free Online Tools';
        const descMeta = document.querySelector('meta[name="description"]');
        const description = descMeta ? descMeta.content : 'Free online tools for creators, developers, and students.';
        const logo = origin + '/logo.png';

        if(!document.querySelector('meta[property="og:title"]')){
          const m = document.createElement('meta'); m.setAttribute('property','og:title'); m.content = title; head.appendChild(m);
        }
        if(!document.querySelector('meta[property="og:description"]')){
          const m = document.createElement('meta'); m.setAttribute('property','og:description'); m.content = description; head.appendChild(m);
        }
        if(!document.querySelector('meta[property="og:url"]')){
          const m = document.createElement('meta'); m.setAttribute('property','og:url'); m.content = canonicalHref; head.appendChild(m);
        }
        if(!document.querySelector('meta[property="og:image"]')){
          const m = document.createElement('meta'); m.setAttribute('property','og:image'); m.content = logo; head.appendChild(m);
        }

        if(!document.querySelector('meta[name="twitter:card"]')){
          const t = document.createElement('meta'); t.name = 'twitter:card'; t.content = 'summary_large_image'; head.appendChild(t);
        }
        if(!document.querySelector('meta[name="twitter:title"]')){
          const t = document.createElement('meta'); t.name = 'twitter:title'; t.content = title; head.appendChild(t);
        }
        if(!document.querySelector('meta[name="twitter:description"]')){
          const t = document.createElement('meta'); t.name = 'twitter:description'; t.content = description; head.appendChild(t);
        }
        if(!document.querySelector('meta[name="twitter:image"]')){
          const t = document.createElement('meta'); t.name = 'twitter:image'; t.content = logo; head.appendChild(t);
        }

        // Structured data (Organization + WebSite + WebPage)
        if(!document.querySelector('script[type="application/ld+json"][data-generated-by="analytics.js"]')){
          const json = {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "VTools",
                "url": "https://tools.vednt.com/",
                "logo": logo
              },
              {
                "@type": "WebSite",
                "url": "https://tools.vednt.com/",
                "name": "VTools",
                "publisher": {"@type":"Organization","name":"VTools"}
              },
              {
                "@type": "WebPage",
                "url": canonicalHref,
                "name": title,
                "description": description
              }
            ]
          };
          const s = document.createElement('script');
          s.type = 'application/ld+json';
          s.setAttribute('data-generated-by','analytics.js');
          s.textContent = JSON.stringify(json);
          head.appendChild(s);
        }
      }catch(e){ console.warn('SEO injection failed', e); }
    }

    // Run after DOM ready
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectSEOMeta); else injectSEOMeta();

  })();
