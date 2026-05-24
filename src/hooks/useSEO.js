import { useEffect } from 'react';

export function useSEO({ title, description, ogType = 'website' }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const managed = [];

    const setMeta = (attr, value, content) => {
      let el = document.querySelector(`meta[${attr}="${value}"]`);
      let isNew = false;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
        isNew = true;
      }
      const prev = el.getAttribute('content');
      el.setAttribute('content', content);
      managed.push({ el, prev, isNew });
    };

    if (description) setMeta('name', 'description', description);
    if (title) {
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }
    if (description) {
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    setMeta('property', 'og:type', ogType);

    return () => {
      document.title = prevTitle;
      managed.forEach(({ el, prev, isNew }) => {
        if (isNew) {
          el.parentNode && el.parentNode.removeChild(el);
        } else {
          el.setAttribute('content', prev ?? '');
        }
      });
    };
  }, [title, description, ogType]);
}
