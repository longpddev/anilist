import StatusDistribution from "@/pageSetup/AnimeDetail/StatusDistribution"
import PageSection from "@/ui/PageSection"
import SocialItem from "@/ui/SocialItem"
import NLink from "app/context/NLink"
import clsx from "clsx"
import { sample } from "lodash"
import Image from "next/image"
import React from "react"
import { loop } from "utils/app"
import ListStats from "./ListStats"

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={clsx(className, "bg-foreground rounded-md")}> {children}</div>
)

const ContentLeft = () => {
  return (
    <div>
      <Section className="p-5 mb-8">
        <p>Everything and anything cute works with me!!</p>
      </Section>
      <PageSection title="Activity History" full>
        <Section className="activity-history p-5">
          {loop(182).map((_, i) => (
            <div
              key={i}
              data-tooltip="Sun Nov 06 2022"
              data-tooltip-detail="Amount: 10"
              className={`history-day cursor-pointer lv-${Math.round(
                Math.random() * 9
              )}`}
            >
              {" "}
            </div>
          ))}
        </Section>
      </PageSection>
      <StatusDistribution
        title="Genre Overview"
        data={loop(5).map((i) => ({
          title: "s",
          color: sample(["red", "blue", "gray", "green"]) || "white",
          value: sample([10, 100, 50, 70]) || 20,
        }))}
      />
      <PageSection title="Anime" full>
        <Section className="grid grid-cols-4 gap-4 p-4">
          {loop(20).map((i) => (
            <NLink
              href={"/"}
              key={i}
              data-tooltip="Aoba Suzukaze Aoba Suzukaze"
              data-tooltip-detail="2018 TV"
            >
              <Image
                height={115}
                width={85}
                className="w-full rounded-md"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21455-XZTQ8Fmii75j.jpg"
                alt=""
              />
            </NLink>
          ))}
        </Section>
      </PageSection>
      <PageSection title="Characters" full>
        <Section className="grid grid-cols-4 gap-4 p-4">
          {loop(20).map((i) => (
            <NLink href={"/"} key={i} data-tooltip="Aoba Suzukaze">
              <Image
                height={115}
                width={85}
                className="w-full rounded-md"
                src="https://s4.anilist.co/file/anilistcdn/character/large/b89641-nVvsn6uqzt2z.png"
                alt=""
              />
            </NLink>
          ))}
        </Section>
      </PageSection>
      <PageSection title="Staff" full>
        <Section className="grid grid-cols-4 gap-4 p-4">
          {loop(20).map((i) => (
            <NLink href={"/"} key={i} data-tooltip="Aoba Suzukaze">
              <Image
                height={115}
                width={85}
                className="w-full rounded-md"
                src="https://s4.anilist.co/file/anilistcdn/staff/large/n106297-KnzvgfxB1byY.png"
                alt=""
              />
            </NLink>
          ))}
        </Section>
      </PageSection>
      <PageSection title="Studios" full>
        <Section className="flex flex-wrap gap-4 whitespace-nowrap p-5">
          <NLink href={"/"} className="hover:text-blue font-semibold text-sm">
            Kyoto Animation
          </NLink>
          <NLink href={"/"} className="hover:text-blue font-semibold text-sm">
            Kyoto Animation
          </NLink>
          <NLink href={"/"} className="hover:text-blue font-semibold text-sm">
            Kyoto Animation
          </NLink>
          <NLink href={"/"} className="hover:text-blue font-semibold text-sm">
            Kyoto Animation
          </NLink>
          <NLink href={"/"} className="hover:text-blue font-semibold text-sm">
            Kyoto Animation
          </NLink>
        </Section>
      </PageSection>
    </div>
  )
}

const ContentRight = () => {
  return (
    <div>
      <ListStats className="mb-6" />
      <ListStats className="mb-6" />
      <PageSection title="Activity" full>
        {loop(10).map((i) => (
          <SocialItem
            key={i}
            height={90}
            data={{
              id: 0,
              likeCount: 10,
              replyCount: 10,
              mediaId: 0,
              mediaName:
                "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
              mediaSrc: undefined,
              status: "Watched episode 5 of",
              time: 1000000,
              userName: undefined,
              userSrc: undefined,
            }}
          />
        ))}
      </PageSection>
    </div>
  )
}
const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <ContentLeft />
      <ContentRight />
    </div>
  )
}

export default page
