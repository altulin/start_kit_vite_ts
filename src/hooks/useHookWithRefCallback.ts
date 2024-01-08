import { useCallback, useRef } from "react";

export function useHookWithRefCallback() {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setRef = useCallback((node: any) => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
}
