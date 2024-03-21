import { For, createSignal } from "solid-js";
import { RepoFragmentFragment, UserReposQuery } from "../generated/graphql.ts";
import { createGraphQLClient } from "@solid-primitives/graphql";
import { RepoFragment, UserReposCommits } from '../gql.ts';
import { RepoList } from "../components/repo-list/RepoList.tsx";
import { RepoItem } from "../components/repo-list/RepoItem.tsx";
import { Sidebar } from "../components/common/sidebar/Sidebar.tsx";
import { TooltipWithText } from "../components/common/Tooltip.tsx";
import { CommitItem } from "../components/common/commit-item/CommitItem.tsx";
import { useFragment } from "../generated/fragment-masking.ts";

const userReposCommits = createGraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `${import.meta.env.VITE_Github_PAT}`,
    'user-agent': 'node.js'
  }
});

export const Home = () => {
  const variables = { user: "mxjrd" };
  const [user] = userReposCommits<UserReposQuery>(UserReposCommits, variables);
  const [openSidebar, setOpenSidebar] = createSignal(false)
  const [repo, setRepo] = createSignal<RepoFragmentFragment>()

  const repos = () => user()?.user?.repositoriesContributedTo?.nodes;

  const allRepoCommitHistories = () => repos()?.map((repo) => {
    const currRepo = useFragment(RepoFragment, repo)
    return currRepo?.defaultBranchRef?.target?.__typename === "Commit" ? currRepo.defaultBranchRef.target : undefined
  })
  const orderedCommitHistories = () => 
    allRepoCommitHistories()?.map((repoCommitHistory) => repoCommitHistory?.history.nodes)
      .flat()
      .sort((currDate, nextDate) => nextDate?.committedDate?.localeCompare(currDate?.committedDate))
  
  const repoTarget = () => {
    const currRepo = repo()
    return currRepo?.defaultBranchRef?.target?.__typename === 'Commit' ? currRepo?.defaultBranchRef?.target : undefined
  }

  return (
    <main>
      <div class='flex'>
      <div class='flex-1 gap-1 p-6'>
        <div>
          <h2 class='text-3xl font-bold'>Recent Repositories</h2>
          <hr class='mt-1 mb-4' />
          <div class='flex flex-col gap-1.5 pr-6'>
            <For each={repos()}>
              {
                (repo) => repo && <RepoItem setRepo={setRepo} setOpenSidebar={setOpenSidebar} repo={repo} />
              }
            </For>
          </div>
        </div>
          <Sidebar repoName={repo()?.name} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}>
            <For each={repoTarget()?.history.nodes}>
              {
                (commit) => <TooltipWithText content={commit?.messageHeadline} />
              }
            </For>
          </Sidebar>
        </div>
        <div class='flex-1 p-6'>
          <RepoList>
            <For each={orderedCommitHistories()}>
              {
                (commit) => commit && <CommitItem commit={commit} />
              }
            </For>
          </RepoList>
        </div>
      </div>
    </main >
  )
}

export default Home