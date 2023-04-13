import { ContactsData } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface ContactsProps {
  contacts: ContactsData[];
}

export function Contacts({ contacts }: ContactsProps) {
  return (
    <section id="contacts">
      <header className="space-y-2 my-12">
        <h1 className="text-black/90 dark:text-white/90 text-4xl font-semibold">
          Contact
        </h1>
        <p>If you have any questions, feel free to contact me.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((item) => (
          <motion.a
            key={item.id}
            href={item.attributes.link}
            target={
              item.attributes.link.includes("mailto") ? "_parent" : "_blank"
            }
            className="card-base rounded-md overflow-x-hidden transition-colors p-4 cursor-pointer items-center flex space-x-4 justify-between"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <div className="overflow-x-hidden leading-relaxed space-y-2">
              <h2 className="font-medium text-black dark:text-white truncate">
                {item.attributes.title}
              </h2>
              <p className="text-black/50 dark:text-white/30 text-sm line-clamp-2">
                <span className="text-black/50 dark:text-white/30">
                  {item.attributes.subtitle}
                </span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                width={32}
                height={32}
                src={`${process.env.CMS_URL}${item.attributes.icon.data.attributes.url}`}
                className="h-8 w-8"
                alt="social logo"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
