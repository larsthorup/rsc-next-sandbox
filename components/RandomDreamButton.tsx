'use client';

import React from 'react';
// import { useNavigate } from './ClientRouter';

export default function RandomDreamButton() {
  // const navigate = useNavigate();
  function onClick() {
    // navigate('all');
  }

  return (
    <button onClick={onClick}>
      See random dream
    </button>
  );
}
