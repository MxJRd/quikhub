import { createGraphQLClient } from "@solid-primitives/graphql";
import { Home } from "../pages/Home";
import { UserInfo } from "../gql";
import { UserInfoQuery } from "../generated/graphql";

const userInfoQuery = createGraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: `${import.meta.env.VITE_Github_PAT}`,
    'user-agent': 'node.js'
  }
});

export const HomeLayout = () => {
  const [userInfo] = userInfoQuery<UserInfoQuery>(UserInfo, { user: 'mxjrd' })

  return (
    <div class="flex flex-col md:flex-row min-h-screen">
      <aside class="bg-gray-800 text-white w-full min-w-lg w-64 md:w-64 p-5">
        <nav>
          <li>Repos</li>
        </nav>
      </aside>
      <div class="flex flex-col flex-1">
        <header class="bg-slate-500 text-white p-5 flex justify-between">
          <div>Hi</div>
          <div>
            <button>
              <img src={userInfo()?.user?.avatarUrl} class='w-12 h-12 rounded-full shadow-lg'></img>
            </button>
          </div>
        </header>
        <Home />
      </div>
    </div>
  );
};

export default HomeLayout;