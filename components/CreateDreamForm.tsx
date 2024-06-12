'use client';

import SubmitButton from '../lib/SubmitButton';
import { useNavigate } from '../lib/router';
import { createDream } from '../services/createDream';

export default function CreateDreamForm() {
  const navigate = useNavigate();
  async function submit(formData: FormData) {
    const dream = await createDream(formData);
    navigate(dream.id)
  }
  return (
    <form autoComplete="off" action={submit}>
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