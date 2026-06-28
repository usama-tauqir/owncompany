"use client";

import {
  useEffect,
  useRef,
  type RefObject,
} from "react";

export default function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
  enabled = true,
): void {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const element = ref.current;
      const target = event.target;

      if (
        !element ||
        !(target instanceof Node) ||
        element.contains(target)
      ) {
        return;
      }

      callbackRef.current();
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, [enabled, ref]);
}