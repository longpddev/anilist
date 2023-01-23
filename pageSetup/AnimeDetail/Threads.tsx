import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"
import Genres from "@/ui/Genres"
const ThreadsItem = () => {
  return (
    <div className="rounded-md bg-foreground p-4 relative">
      <Link
        className="text-sm text-text-lighter hover:text-blue inline-block mb-3"
        href={"/"}
      >
        Demon Slayer: Kimetsu no Yaiba "Swordsmith Village Arc" Scheduled for
        April 2023!
      </Link>
      <div className="flex gap-2 items-center">
        <Image
          width={25}
          height={25}
          alt="avatar"
          src={
            "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b431168-NoZLrKGb9LdC.png"
          }
        ></Image>
        <p className="text-sm">
          <Link className="text-blue" href={"/"}>
            Pafelka
          </Link>
          &nbsp;
          <Link href="/" className="text-text-lighter hover:text-blue">
            replied 1 month ago
          </Link>
        </p>
        <div className="ml-auto space-x-2">
          <Genres text="Anime" className="bg-blue"></Genres>
        </div>
      </div>
    </div>
  )
}

const Threads = () => {
  return (
    <PageSection title="Thread">
      <ThreadsItem />
      <ThreadsItem />
    </PageSection>
  )
}

export default Threads
