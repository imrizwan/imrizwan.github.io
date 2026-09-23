"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import "lenis/dist/lenis.css";

/** Sticky header clearance for anchor / programmatic scrolls. */
const ANCHOR_OFFSET = -100;

/**
 * Document-level Lenis smooth scroll for the portfolio.
 * Skipped on `/cv` so the print-friendly CV keeps native scrolling.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const enableLenis = pathname !== "/cv";

  if (!enableLenis) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.1,
        anchors: { offset: ANCHOR_OFFSET },
        stopInertiaOnNavigate: true,
        respectReducedMotion: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
