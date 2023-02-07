import Image from "next/image"
import React from "react"
import HeadDetailMenu from "pageSetup/AnimeDetail/HeadDetailMenu"
const Header: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <>
      <div className="relative flex md:h-[350px] h-[250px] w-full">
        <Image
          className="w-full absolute inset-0 h-full"
          alt="banner user"
          width={1920}
          height={350}
          src="https://s4.anilist.co/file/anilistcdn/user/banner/n128892-Mo9Glv1hoKSm.jpg"
        ></Image>
        <div className="absolute inset-0 w-full h-full overlay"></div>
        <div className="mt-auto c_container flex z-[1]">
          <Image
            className="w-[160px] basis-[160px] block"
            alt="banner user"
            width={160}
            height={200}
            src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/n128892-eSbVCBcKME8V.jpg"
          ></Image>
          <h1 className="text-xl font-bold text-text-bright px-6 py-5 mt-auto">
            IndianaMcfly
          </h1>
        </div>
      </div>
      <div className="bg-foreground">
        <HeadDetailMenu
          className="w-min mx-auto max-w-full overflow-auto"
          linkClass="p-3.5 mx-2.5"
          links={[
            { name: "Overview", link: `/user/${userName}` },
            { name: "Anime List", link: `/user/${userName}/animelist` },
            { name: "Manga List", link: `/user/${userName}/mangalist` },
            { name: "Favorites", link: `/user/${userName}/favorites` },
            { name: "Stats", link: `/user/${userName}/stats` },
            { name: "Social", link: `/user/${userName}/social` },
            { name: "Reviews", link: `/user/${userName}/reviews` },
          ]}
        />
      </div>
    </>
  )
}

export default Header
