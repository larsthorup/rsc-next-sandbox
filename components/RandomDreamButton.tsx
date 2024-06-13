'use client';

import React from 'react';
import { useNavigatePage } from '../lib/router';

export default function RandomDreamButton() {
  const navigatePage = useNavigatePage();
  function onClick() {
    navigatePage('all');
  }

  return (
    <button onClick={onClick} className="client-component">
      See random dream
    </button>
  );
}
