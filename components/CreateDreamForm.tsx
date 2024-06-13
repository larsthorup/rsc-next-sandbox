'use client';

import SubmitButton from '../lib/SubmitButton';
import { useNavigatePage, useInvalidateRoot } from '../lib/router';
import { createDream } from '../services/createDream';

export default function CreateDreamForm() {
  const navigatePage = useNavigatePage();
  const invalidateRoot = useInvalidateRoot();
  async function submit(formData: FormData) {
    const dream = await createDream(formData);
    navigatePage(dream.id);
    invalidateRoot();
  }
  return (
    <form autoComplete="off" action={submit} className="client-component">
      <label>
        Name:
        <input name="name" type="text" required minLength={2} />
      </label>
      <label>
        Content:
        <textarea name="content" required minLength={5} />
      </label>
      <SubmitButton />
    </form>
  );

}