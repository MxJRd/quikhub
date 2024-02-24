import { JSX } from "solid-js"

export const RepoList = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <input placeholder='Fux'></input>
      {children}
    </div>
  )
}