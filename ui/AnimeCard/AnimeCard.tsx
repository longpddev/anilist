import Image from "next/image"
import Link from "next/link"
import React from "react"
import image from "@/assets/anime_image_demo.png"
import Icon from "../Icon"
import { faSmile } from "@fortawesome/free-regular-svg-icons"
import type { IMEDIA_FIELD } from "gql/media"

const AnimeCard: React.FC<{
  data: IMEDIA_FIELD
}> = ({ data }) => {
  return (
    <div className="anime-card relative">
      <Image
        src={image}
        alt="anime card"
        width={185}
        height={265}
        className="rounded-md mb-2 w-full"
      ></Image>
      <div>
        <Link href={"/"}>Chainsaw Man</Link>
      </div>
      <AnimeCardTooltip />
    </div>
  )
}

const AnimeCardTooltip = () => {
  return (
    <div className="card-tooltip right">
      <div className="card-tooltip__header">
        <div className="card-tooltip__date">Fall 2022</div>
        <div className="card-tooltip__score">
          <Icon icon={faSmile}></Icon>
          <span className="card-tooltip__percentage">86%</span>
        </div>
      </div>
      <div className="card-tooltip__studios">MAPPA</div>
      <div className="card-tooltip__info">
        <span>TV Show</span>
        <span className="card-tooltip__separator">•</span>
        <span>12 episodes</span>
      </div>
      <div className="card-tooltip__genres">
        <div className="card-tooltip__genre">Action</div>
        <div className="card-tooltip__genre">Comedy</div>
        <div className="card-tooltip__genre">Drama</div>
        <div className="card-tooltip__genre">Horror</div>
        <div className="card-tooltip__genre">Supernatural</div>
      </div>
    </div>
  )
}

export default AnimeCard
