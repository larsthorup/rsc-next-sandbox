"use server";

import { randomUUID } from "crypto";
import { Dream } from "../types/Dream";
import { getDreams } from "./getDreams";
import { saveDreams } from "./saveDreams";

export async function createDream(data: FormData) {
  const name = data.get("name") as string;
  const content = data.get("content") as string;
  const id = randomUUID();
  const createdAt = new Date().toISOString();

  const dream: Dream = {
    id,
    createdAt,
    name,
    content,
  };
  const dreams = await getDreams();
  dreams.push(dream);
  await saveDreams(dreams);
  return dream;
}
