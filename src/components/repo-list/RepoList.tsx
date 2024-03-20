import { JSX } from "solid-js"

export const RepoList = ({ children }: { children: JSX.Element }) => {
  return (
    <div class="">
      <input placeholder='Fux'></input>
      {children}
    </div>
  )
}