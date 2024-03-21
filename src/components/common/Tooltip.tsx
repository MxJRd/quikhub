export const TooltipWithText = (props: { content: string | undefined }) => {
  return (
    <div>
      <div class="group relative w-full">
        <p class=''>{props.content}</p>
        <div>
          <span
            class="pointer-events-none absolute p-2 bg-black text-white -top-7 z-10 w-max opacity-0 transition-opacity group-hover:opacity-100 rounded-md"
          >
            {props.content}
          </span>
        </div>
      </div>
    </div>
  )
}
