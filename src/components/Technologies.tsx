import Image from "next/image";
import { TechnologiesData } from "@/types";
import { motion } from "framer-motion";

interface TechnologiesProps {
  technologies: TechnologiesData[];
}

export function Technologies({ technologies }: TechnologiesProps) {
  return (
    <section id="technologies">
      <h3 className="text-sm text-black/70 dark:text-white/50 font-medium uppercase">
        Technologies I use
      </h3>
      <div className="flex flex-col space-y-6 mt-8">
        <section>
          <h5 className="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
            Development
          </h5>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {technologies[0].attributes?.dev.data.map((item, index) => (
              <motion.div
                key={item.attributes.name}
                className="card-base rounded-lg flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}
              >
                <div className="rounded-lg flex">
                  <Image
                    width={20}
                    height={20}
                    alt="technology logo"
                    src={`${process.env.CMS_URL}${item.attributes.icon.data.attributes.url}`}
                    className="flex-shrink-0 h-5 w-5"
                  />
                </div>
                <span className="flex-1 truncate text-sm">
                  {item.attributes.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
        <section>
          <h5 className="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
            Apps
          </h5>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {technologies[0].attributes?.apps.data.map((item, index) => (
              <motion.div
                key={item.attributes.name}
                className="card-base rounded-lg flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.3 },
                }}
              >
                <div className="rounded-lg flex">
                  <Image
                    width={20}
                    height={20}
                    alt="technology logo"
                    src={`${process.env.CMS_URL}${item.attributes.icon.data.attributes.url}`}
                    className="flex-shrink-0 h-5 w-5"
                  />
                </div>
                <span className="flex-1 truncate text-sm">
                  {item.attributes.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
        <section>
          <h5 className="text-sm uppercase text-black/50 pb-2 mb-4 border-b border-black/5 dark:text-white/30 dark:border-white/5">
            Services
          </h5>
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-2">
            {technologies[0].attributes?.services.data.map((item, index) => (
              <motion.div
                key={item.attributes.name}
                className="card-base rounded-lg flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.4 },
                }}
              >
                <div className="rounded-lg flex">
                  <Image
                    width={20}
                    height={20}
                    alt="technology logo"
                    src={`${process.env.CMS_URL}${item.attributes.icon.data.attributes.url}`}
                    className="flex-shrink-0 h-5 w-5"
                  />
                </div>
                <span className="flex-1 truncate text-sm">
                  {item.attributes.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
