'use client';

import React from 'react';
import { useNavigate } from '../lib/router';

export default function RandomDreamButton() {
  const navigate = useNavigate();
  function onClick() {
    navigate('all');
  }

  return (
    <button onClick={onClick} className="client-component">
      See random dream
    </button>
  );
}
