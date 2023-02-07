import { RankingSkeleton } from "@/pageSetup/AnimeDetail/Ranking"
import { StatusDistributionSkeleton } from "@/pageSetup/AnimeDetail/StatusDistribution"
import PageSection from "@/ui/PageSection"
import React from "react"
import { loop } from "utils/app"

const loading = () => {
  return (
    <div>
      <PageSection title="Rankings" full>
        <div className="grid grid-cols-2 gap-4">
          {loop(4).map((item, i) => (
            <RankingSkeleton key={i} />
          ))}
        </div>
      </PageSection>

      <PageSection title="Recent Activity Per Day" full>
        <div className="h-[300px] skeleton rounded-md"></div>
      </PageSection>
      <PageSection title="Airing Score Progression" full>
        <div className="h-[300px] skeleton rounded-md"></div>
      </PageSection>
      <PageSection title="Airing Watchers Progression" full>
        <div className="h-[300px] skeleton rounded-md"></div>
      </PageSection>

      <StatusDistributionSkeleton
        title="Status Distribution"
        data={loop(4).map((item) => ({
          title: "skjdflsf",
          color: "#fff",
          value: 0,
        }))}
      ></StatusDistributionSkeleton>
      <PageSection title="Score Distribution" full>
        <div className="h-[300px] skeleton rounded-md"></div>
      </PageSection>
    </div>
  )
}

export default loading
