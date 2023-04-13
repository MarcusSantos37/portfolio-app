import { BsMoon, BsSun } from "react-icons/bs";
import {
  ContactsData,
  ExperiencesData,
  ProfileData,
  TechnologiesData,
} from "@/types";
import { animated, useSpring } from "react-spring";

import { AiOutlineArrowDown } from "react-icons/ai";
import { Contacts } from "@/components/Contacts";
import { Experiences } from "@/components/Experience";
import { Fade } from "react-reveal";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Repositories } from "@/components/Repositories";
import { Technologies } from "@/components/Technologies";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface HomeProps {
  experiences: ExperiencesData[];
  contacts: ContactsData[];
  technologies: TechnologiesData[];
  repos: any;
  user: ProfileData;
}

export default function Home({
  experiences,
  contacts,
  technologies,
  repos,
  user,
}: HomeProps) {
  const { theme, setTheme } = useTheme();

  const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 0.2 });

  return (
    <>
      <Head>
        <title>Marcus Augusto - Portfólio</title>
      </Head>
      <div className="relative min-h-screen bg-gray-50 dark:bg-neutral-900">
        <nav className="w-full pt-10">
          <div className="container mx-auto w-11/12 relative sm:w-9/12 md:w-7/12">
            <div className="flex items-center gap-6 justify-between">
              <ol className="hidden sm:flex flex-row gap-8">
                <Link
                  className="hover:scale-105 transition-all"
                  href="#technologies"
                  scroll={false}
                >
                  Technologies
                </Link>
                <Link
                  className="hover:scale-105 transition-all"
                  href="#repositories"
                  scroll={false}
                >
                  Repositories
                </Link>
                <Link
                  className="hover:scale-105 transition-all"
                  href="#experiences"
                  scroll={false}
                >
                  Experiences
                </Link>
                <Link
                  className="hover:scale-105 transition-all"
                  href="#contacts"
                  scroll={false}
                >
                  Contacts
                </Link>
              </ol>
              <div className="flex space-x-2 w-full justify-end items-center">
                <a
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer justify-center px-5 py-2 rounded-lg card-base flex items-center space-x-2 w-max"
                >
                  {theme === "dark" ? <BsSun /> : <BsMoon />}
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="space-y-24 mb-10 container mx-auto min-h-screen pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
          <header className="rounded-md flex flex-col-reverse my-16 py-10 md:flex-row md:items-center md:justify-between justify-center">
            <div className="md:w-8/12">
              <animated.div style={props} className="space-y-6">
                <div className="flex items-center space-x-2 rounded-md text-neutral-500 mt-4 justify-center md:justify-start"></div>
                <h3 className="text-2xl font-normal md:text-start text-center">
                  {user.attributes.name}
                </h3>
                <h1 className="font-semibold text-center text-2xl sm:text-4xl md:text-6xl md:text-left text-black/90 leading-normal dark:text-white/90">
                  {user.attributes.role}
                </h1>
                <h3 className="text-base font-light md:text-start text-center">
                  {user.attributes.email}
                </h3>
              </animated.div>
            </div>
            <Image
              className="w-[150px] h-[150px] rounded-full object-cover mx-auto"
              width={150}
              height={150}
              src={`${process.env.CMS_URL}${user.attributes.image.data.attributes.url}`}
              alt="profile image"
            />
          </header>
          <Fade>
            <Technologies technologies={technologies} />
          </Fade>
          <Fade bottom>
            <Repositories repos={repos} />
          </Fade>
          <Fade bottom>
            <Experiences experiences={experiences} />
          </Fade>
          <Fade bottom>
            <Contacts contacts={contacts} />
          </Fade>
        </div>
      </div>
    </>
  );
}

async function fetchCMSData() {
  const { data: experiences } = await axios.get(
    `${process.env.CMS_URL}/api/experiences`
  );

  const { data: contacts } = await axios.get(
    `${process.env.CMS_URL}/api/contacts?populate=*`
  );

  const { data: technologies } = await axios.get(
    `${process.env.CMS_URL}/api/technologies?populate[apps][populate]=*&populate[dev][populate]=*&populate[services][populate]=*`
  );

  const { data: user } = await axios.get(
    `${process.env.CMS_URL}/api/profiles/1?populate=*`
  );
  return {
    experiences: experiences.data,
    contacts: contacts.data,
    technologies: technologies.data,
    user: user.data,
  };
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { experiences, contacts, technologies, user } = await fetchCMSData();
  const { data: repos } = await axios.get(
    "https://api.github.com/users/MarcusSantos37/starred"
  );

  return {
    props: {
      experiences,
      contacts,
      technologies,
      user,
      repos,
    },
  };
};
