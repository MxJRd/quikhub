export const CommonBadge = (props: { content: string, color: string }) => {
  return (
    <div class={`font-semibold ${props.color} rounded-lg px-3 py-1.5 w-fit`}>
      <p>{props.content}</p>
    </div>
  )
}