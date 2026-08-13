"use client";

import { useState } from "react";
import { useRealtime } from "@/lib/realtime-client";

export const TestDisplay = ({ userId }: { userId: string }) => {
  const [message, setMessage] = useState<string[]>([]);

  useRealtime({
    channels: [userId],
    events: ["message.sent"],
    onData({ event, data, channel }) {
      setMessage((prev) => [...prev, data as string]);
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full max-w-xs border p-4 rounded-md">
      {message.map((msg, i) => (
        <div
          key={i}
          className="flex-1 rounded border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm focus:border-zinc-300 focus:outline-none focus:ring-1 focus:ring-zinc-300 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-600"
        >
          <p>{msg}</p>
        </div>
      ))}
    </div>
  );
};
