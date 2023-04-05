interface RepositoriesProps {
  repos: any;
}

export function Repositories({ repos }: RepositoriesProps) {
  return (
    <div>
      <header className="space-y-2 my-12">
        <h1 className="text-black/90 dark:text-white/90 text-4xl font-semibold">
          Repositories
        </h1>
        <p>My favorite projects on GitHub.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {repos.map((item: any) => (
          <a href={item.clone_url} target="_blank" key={item.id}>
            <div className="rounded-lg card-base h-full">
              <div className="space-y-2">
                <div className="flex justify-between space-x-2">
                  <h3 className="text-black/90 dark:text-white/90 items-center truncate space-x-1">
                    <span className="text-black/50 dark:text-white/30">
                      {item.owner.login}/
                    </span>
                    <span>{item.name}</span>
                  </h3>
                  <svg className="h-6 text-yellow-600 w-6">startIcon</svg>
                </div>
                <p className="text-black/50 dark:text-white/30 line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-black/50 dark:text-white/30">
                  <span>Language:</span>
                  {item.language}
                  {/* <svg className="h-5 w-5"></svg> */}
                </div>

                <div
                  v-if="license"
                  className="flex items-center justify-between text-black/50 dark:text-white/30"
                >
                  <span>License:</span>
                  <span>{item.license?.spdx_id}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
