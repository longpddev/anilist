import Image from "next/image"
import Link from "next/link"
import React from "react"
import PageSection from "./PageSection"

const RecommendationsItem: React.FC<{}> = () => {
  return (
    <div className="min-w-[130px]">
      <Link href="/">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg"
          height={180}
          width={130}
          className="w-full rounded-md"
          alt=""
        ></Image>

        <p className="text-text-lighter mt-2.5 block hover:text-blue text-sm">
          Jujutsu Kaisen
        </p>
      </Link>
    </div>
  )
}
const Recommendations = () => {
  return (
    <PageSection title="Recommendations" full>
      <div className="overflow-auto">
        <div className=" flex gap-4">
          {Array(10)
            .fill(1)
            .map((item, i) => (
              <RecommendationsItem key={i}></RecommendationsItem>
            ))}
        </div>
      </div>
    </PageSection>
  )
}

export default Recommendations
