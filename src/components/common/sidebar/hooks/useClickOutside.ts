import { createEventListener } from "@solid-primitives/event-listener";
import { onMount } from "solid-js";

export function useClickOutside(el: HTMLElement, cb: () => void) {
  onMount(() => {
    createEventListener(document, "click", (e) => {
      if(el === e.target) {
        cb();
      }
    });
  });
}
