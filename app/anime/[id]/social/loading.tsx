import { ThreadsSkeleton } from "@/pageSetup/AnimeDetail/Threads"
import PageSection from "@/ui/PageSection"
import React from "react"
import { loop } from "utils/app"
import { SocialItemSkeleton } from "../../../../ui/SocialItem"

const loading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <PageSection title="Recent Activity" full>
          {loop(5).map((item, i) => (
            <SocialItemSkeleton key={i} />
          ))}
        </PageSection>
      </div>

      <div>
        <ThreadsSkeleton
          full
          data={loop(4).map((item) => ({
            id: 0,
            commentId: 0,
            title:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum vel modi eligendi perferendis nulla.",
            userAvatar: undefined,
            userName: "jsdhf sdkjf ",
            repliedAt: 0,
            tags: loop(2).map((tag) => ({
              name: "skjdf",
              id: 0,
            })),
          }))}
        />
      </div>
    </div>
  )
}

export default loading
