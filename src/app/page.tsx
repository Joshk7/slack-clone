"use client";

import Image from "next/image";
import { useAuthActions } from "@convex-dev/auth/react";
import { AuthScreen } from "@/features/auth/components/auth-screen";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { signOut } = useAuthActions();

  return (
    <div>
      LoggedIn!
      <Button onClick={() => signOut()}>Sign Out!</Button>
    </div>
  );
}
