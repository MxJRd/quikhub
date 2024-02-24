import { RepoItem } from "../components/repo-list/RepoItem";
import { RepoList } from "../components/repo-list/RepoList";

export const HomeLayout = () => {
  return (
    <div class="flex flex-col md:flex-row min-h-screen">
      <aside class="bg-gray-800 text-white w-full md:w-64 p-5">
        Sidebar
      </aside>
      <div class="flex flex-col flex-1">
        <header class="bg-blue-500 text-white p-5">
          Header
        </header>
        <main class="flex flex-1 p-5 overflow-auto">
          <div class='flex-1'>
            Col1
          </div>
          <div class='flex-1'>
            <RepoList>
              <RepoItem />
              <RepoItem />
              <RepoItem />
              <RepoItem />
              <RepoItem />
            </RepoList>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;