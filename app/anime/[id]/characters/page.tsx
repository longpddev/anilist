"use client"

import Card, { CardContentLeft, CardContentRight } from "@/ui/Card"
import { Select } from "@/ui/Select"
import Link from "next/link"
import React, { useState } from "react"

const CharacterItem = () => {
  return (
    <Card>
      <CardContentLeft src={undefined} alt="" height={80} tags={["Main"]}>
        <Link
          href="/"
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          Tanjirou Kamado
        </Link>
      </CardContentLeft>
      <CardContentRight
        src="https://s4.anilist.co/file/anilistcdn/character/large/b126071-BTNEc1nRIv68.png"
        alt=""
        height={80}
        tags={["Main"]}
      >
        <Link
          href="/"
          className="text-text-lighter hover:text-blue text-[12px]"
        >
          Tanjirou Kamado
        </Link>
      </CardContentRight>
    </Card>
  )
}
const Page = () => {
  const [val, valSet] = useState<number | string>("option1")
  return (
    <div className="">
      <Select
        value={val}
        onChangeValue={(val) => valSet(val)}
        placeholder="Any"
      >
        {Array(20)
          .fill(1)
          .map((_, index) => ({
            label: "option" + index,
            value: "value" + index,
          }))}
      </Select>

      <div className="grid grid-cols-1 gap-4 mt-4">
        {Array(10)
          .fill(1)
          .map((item, i) => (
            <CharacterItem key={i} />
          ))}
      </div>
    </div>
  )
}

export default Page
