import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

import type { auth } from "../../../pizzahub-server/src/lib/auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  plugins: [
    jwtClient(),
  ],
});

export const {
  signIn,
  signUp,
  signOut,
  useSession,
} = authClient;