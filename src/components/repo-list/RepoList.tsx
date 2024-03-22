import { JSX } from "solid-js"

export const RepoList = ({ children }: { children: JSX.Element }) => {
  return (
    <div class="">
      <h2 class='font-bold text-3xl'>Most recent commits</h2>
      <hr class='mt-1 mb-4' />
      {/* <input placeholder='Fux'></input> */}
      <div class='flex flex-col gap-2'>
        {children}
      </div>
    </div>
  )
}