import { Accessor, JSX, Setter, Show } from 'solid-js'
import { useClickOutside } from './hooks/useClickOutside';

interface SidebarProps {
  children: JSX.Element
  repoName: string | undefined
  openSidebar: Accessor<boolean>
  setOpenSidebar: Setter<boolean>
}

export const Sidebar = (props: SidebarProps) => {
  const refClickOutside = (ref: HTMLDivElement) => useClickOutside(ref, () => props.openSidebar() && props.setOpenSidebar(false))
  return (
    <Show when={props.openSidebar()}>
      <div class={`relative z-10 text-black`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0">
          <div ref={refClickOutside} class="absolute inset-0">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
              <div class="pointer-events-auto w-screen w-[600px]">
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <h2 class="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">{props.repoName}</h2>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span class="absolute -inset-2.5"></span>
                          <span class="sr-only">Close panel</span>
                          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    {props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Show>
  )
}