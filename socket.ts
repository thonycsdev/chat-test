import { io, Socket } from "socket.io-client";

const isBrowser = typeof window !== "undefined";

export const socket = isBrowser ? io("ws://localhost:3000/") : ({} as Socket);
