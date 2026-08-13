"use server";

import { revalidatePath } from "next/cache";
import { realtime } from "@/lib/realtime";

export async function sendMessage(formData: FormData) {
  const username = formData.get("username") as string;
  const message = formData.get("message") as string;
  //   await realtime.emit("message.sent", message); default
  await realtime.channel(username).emit("message.sent", message);

  const users = ["room-1", "room-2"];
  await Promise.all(
    users.map((user) => {
      const channel = realtime.channel(user);
      return channel.emit("message.sent", `Hi channel ${user}!`);
    }),
  );

  revalidatePath("/");
}
export async function sendMessages(formData: FormData) {
  const message = formData.get("message") as string;

  const users = ["user-1", "user-2"];
  await Promise.all(
    users.map((user) => {
      const channel = realtime.channel(user);
      return channel.emit("message.sent", message);
    }),
  );

  revalidatePath("/");
}
