'use client';

import React from 'react';
import { useNavigate as useNavigatePage } from '../router/PageRouter';

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
