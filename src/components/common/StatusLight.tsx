export enum StatusLightColorMap {
  green = 'green',
  red = 'red',
  blue = 'blue'
}

const fetchStatusLightColor = (color: StatusLightColorMap) => {
  switch(color) {
    case StatusLightColorMap.green: return ['bg-green-200/[0.6] outline-green-500', 'bg-green-600'];
    case StatusLightColorMap.red: return ['bg-red-200/[0.6] outline-red-500', 'bg-red-500'];
    case StatusLightColorMap.blue: return ['bg-blue-200/[0.6] outline-blue-500', 'bg-blue-500'];
    default: return 'bg-green-200/[0.6]'
  }
}

export const StatusLight = ({ color }: { color: StatusLightColorMap }) => {
  const [outerStyles, innerStyles] = fetchStatusLightColor(color)
  return (
    <div class={`relative ${outerStyles} w-3 h-3 rounded-full outline outline-1`}>
      <div class={`${innerStyles} w-1.5 h-1.5 rounded-full top-[50%] -translate-y-[50%] translate-x-[50%] absolute`}></div>
    </div>
  )
}