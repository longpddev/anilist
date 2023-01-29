"use client"

import Image from "next/image"
import Link from "app/context/NLink"
import React, { use } from "react"
import Icon from "@/ui/Icon"
import landing_stats from "@/assets/landing_stats.svg"
import landing_social from "@/assets/landing_social.svg"
import landing_custom from "@/assets/landing_custom.svg"
import landing_apps from "@/assets/landing_apps.svg"
import fetchGql from "@/api/client"
import { graphql } from "anilist_gql"
import { MEDIA_BY_ID } from "gql/media"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Banner = () => {
  return (
    <div className="c_container mb-7 md:mb-14">
      <div className="md:py-14 px-12 py-7 md:mt-14 mt-7">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-blue-100 mb-5">
            The next-generation anime platform
          </h1>
          <h2 className="text-xl text-blue-50 max-w-[370px] mx-auto">
            Track, share, and discover your favorite anime and manga with
            AniList.
          </h2>
        </div>

        <div className="grid mx-auto max-w-[940px] md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-14 md:mt-[85px] md:mb-[90px] mt-[45px] mb-[40px]">
          <div className="flex gap-10 items-start">
            <Image
              src={landing_stats}
              alt="title"
              width={80}
              height={72}
            ></Image>
            <div>
              <h3 className="text-blue-200 mb-2">Discover your obsessions</h3>
              <p className="text-blue-50">
                What are your highest rated genres or most watched voice actors?
                Follow your watching habits over time with in-depth statistics.
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start">
            <Image
              src={landing_apps}
              alt="title"
              width={80}
              height={96}
            ></Image>
            <div>
              <h3 className="text-blue-200 mb-2">Discover your obsessions</h3>
              <p className="text-blue-50">
                What are your highest rated genres or most watched voice actors?
                Follow your watching habits over time with in-depth statistics.
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start">
            <Image
              src={landing_social}
              alt="title"
              width={80}
              height={85}
            ></Image>
            <div>
              <h3 className="text-blue-200 mb-2">Discover your obsessions</h3>
              <p className="text-blue-50">
                What are your highest rated genres or most watched voice actors?
                Follow your watching habits over time with in-depth statistics.
              </p>
            </div>
          </div>
          <div className="flex gap-10 items-start">
            <Image
              src={landing_custom}
              alt="title"
              width={80}
              height={81}
            ></Image>
            <div>
              <h3 className="text-blue-200 mb-2">Discover your obsessions</h3>
              <p className="text-blue-50">
                What are your highest rated genres or most watched voice actors?
                Follow your watching habits over time with in-depth statistics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <JoinNow />
      </div>
    </div>
  )
}

const JoinNow = () => {
  return (
    <Link
      className="flex w-full max-w-[200px] pl-5 text-center rounded-full bg-blue-550 leading-[49px] text-white font-bold text-lg relative items-center"
      href={"/sign-in"}
    >
      <span className="mx-auto">Join now</span>
      <div className="rounded-full w-9 mr-2 h-9 bg-[#d9e6ff] relative">
        <Icon
          icon={faChevronRight}
          className="position-center text-blue-550 text-xl"
        ></Icon>
      </div>
    </Link>
  )
}

export default Banner
