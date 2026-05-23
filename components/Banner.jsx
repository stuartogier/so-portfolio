'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Banner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('banner-dismissed') !== '1') {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem('banner-dismissed', '1');
  }

  if (!visible) return null;

  return (
    <div className="banner" role="banner">
      <div className="bannerInner">
        <Link href="/contact" className="bannerLink">
          Get in touch
        </Link>
        <button
          className="bannerClose"
          onClick={dismiss}
          aria-label="Close header banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
