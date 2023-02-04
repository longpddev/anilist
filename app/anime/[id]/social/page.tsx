"use client"

import { PageSection } from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft } from "@/ui/Card"
import Icon from "@/ui/Icon"
import { faComment, faHeart } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "app/context/NLink"
import React from "react"

const SocialItem = ({ params }: { params: { id: string } }) => {
  return (
    <Card>
      <CardContentLeft src={undefined} alt="" height={115} className="relative">
        <Link href="/" className="text-blue text-sm block mb-2">
          KeijiNikolaevich
        </Link>

        <p className="text-[12px]">
          <span>Completed </span>
          <Link href={"/"} className="text-blue ">
            Kimetsu no Yaiba
          </Link>
        </p>
        <div className="mt-2">
          <Link href="/">
            <Image
              width={36}
              height={36}
              className="rounded-md"
              alt=""
              src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6152368-0SG71cTa1w5B.jpg"
            ></Image>
          </Link>
        </div>

        <time className="text-[12px] font-semibold absolute top-4 right-4">
          12 minutes ago
        </time>
        <div className="text-[12px] space-x-2 text-blue-dim  absolute bottom-4 right-4">
          <button className="hover:text-blue">
            <Icon icon={faComment}></Icon>
          </button>
          <button className="hover:text-blue">
            <Icon icon={faHeart}></Icon>
          </button>
        </div>
      </CardContentLeft>
    </Card>
  )
}
const page = () => {
  return (
    <PageSection title="Recent Activity">
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* {Array(10)
          .fill(1)
          .map((item, i) => (
            <SocialItem key={i} />
          ))} */}
      </div>
    </PageSection>
  )
}

export default page
