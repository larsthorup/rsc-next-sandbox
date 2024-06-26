'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="client-component">
      <button disabled={pending} type="submit">
        {pending ? 'Adding...' : 'Add'}
      </button>
    </div>
  );
}
