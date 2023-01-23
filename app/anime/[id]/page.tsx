import {
  PageSection,
  StatusDistribution,
  Threads,
  Trailer,
} from "@/pageSetup/AnimeDetail"
import Card, { CardContentLeft, CardContentRight } from "@/ui/Card"
import Link from "next/link"
import React from "react"

const page = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="mt-2.5">
      <PageSection title="Relations">
        <Card>
          <CardContentLeft
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87216-c9bSNVD10UuD.png"
            alt=""
            tags={["TV", "Finished"]}
          >
            <small className="text-[12px] text-blue font-medium block mb-2">
              Source
            </small>
            <Link
              href={"/"}
              className="text-text-lighter hover:text-blue text-sm line-clamp-3"
            >
              Kimetsu no Yaiba
            </Link>
          </CardContentLeft>
        </Card>
        <Card>
          <CardContentLeft
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87216-c9bSNVD10UuD.png"
            alt=""
            tags={["TV", "Finished"]}
          >
            <small className="text-[12px] text-blue font-medium block mb-2">
              Source
            </small>
            <Link
              href={"/"}
              className="text-text-lighter hover:text-blue text-sm line-clamp-3"
            >
              Kimetsu no Yaiba
            </Link>
          </CardContentLeft>
        </Card>
      </PageSection>
      <PageSection title="Characters">
        <Card>
          <CardContentLeft
            height={80}
            tags={["Main"]}
            alt=""
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87216-c9bSNVD10UuD.png"
          >
            <Link
              href={"/"}
              className="text-text-lighter hover:text-blue text-[12px] line-clamp-3"
            >
              Kimetsu no Yaiba
            </Link>
          </CardContentLeft>
          <CardContentRight
            height={80}
            tags={["Japanese"]}
            alt=""
            src="https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png"
          >
            <Link
              href={"/"}
              className="text-text-lighter hover:text-blue text-[12px] line-clamp-3"
            >
              Natsuki Hanae
            </Link>
          </CardContentRight>
        </Card>
      </PageSection>
      <PageSection title="Staff">
        <Card>
          <CardContentLeft
            height={70}
            tags={["Main"]}
            alt=""
            src="https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx87216-c9bSNVD10UuD.png"
          >
            <Link
              href={"/"}
              className="text-text-lighter hover:text-blue text-[12px] line-clamp-3"
            >
              Kimetsu no Yaiba
            </Link>
          </CardContentLeft>
        </Card>
      </PageSection>
      <StatusDistribution />
      <Trailer />
      <Threads />
    </div>
  )
}
export default page
