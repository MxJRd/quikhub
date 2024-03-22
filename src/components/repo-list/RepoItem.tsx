import { Setter } from "solid-js";
import { RepoFragment } from "../../gql";
import { FragmentType, useFragment } from "../../generated";
import { RepoFragmentFragment } from "../../generated/graphql";
import { GoToArrow } from "../common/icons/GoToArrow";
import { StatusLight, StatusLightColorMap } from "../common/StatusLight";

interface RepoItemProps {
  repo: FragmentType<typeof RepoFragment>
  setRepo: Setter<RepoFragmentFragment | undefined>
  setOpenSidebar: Setter<boolean>
}

export const RepoItem = (props: RepoItemProps) => {
  const repoFrag = useFragment(RepoFragment, props.repo);
  const target = () => repoFrag.defaultBranchRef?.target?.__typename === 'Commit' ? repoFrag.defaultBranchRef?.target : undefined

  const handleRepoClick = () => {
    props.setOpenSidebar(true)
    props.setRepo(repoFrag)
  }
  
  return (
    <div class='flex items-center bg-slate-500 p-2 rounded-lg'>
      <button onClick={handleRepoClick}>
        <GoToArrow className='w-6 h-6 text-green-500 mt-0.5 mr-0.5 hover:text-green-600' />
      </button>
      <StatusLight color={StatusLightColorMap['green']} />
      <h1 class='text-2xl font-bold'>{repoFrag?.name}</h1>
    </div>
  );
};
