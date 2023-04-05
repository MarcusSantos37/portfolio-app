import { ExperiencesData } from "@/types";

interface ExperiencesProps {
  experiences: ExperiencesData[];
}

export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <section>
      <div>
        <div className="flex items-center gap-4 justify-between">
          <h3 className="text-sm text-black/70 dark:text-white/50 font-medium uppercase">
            Experience
          </h3>
        </div>
        <div className="mt-4 grid gap-2">
          {experiences?.map((item) => (
            <a key={item.id}>
              <div className="card-base leading-relaxed rounded-lg">
                <div className="flex space-x-2 items-center justify-between">
                  <h3>{item.attributes.company}</h3>
                  <span className="text-black/50 dark:text-white/30 text-sm">
                    {item.attributes?.startDate} - {item.attributes?.endDate}
                  </span>
                </div>
                <div className="truncate text-sm text-black/50 dark:text-white/30">
                  {item.attributes.role}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
