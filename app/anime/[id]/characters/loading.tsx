"use client"

import { CharacterCardLoading } from "@/pageSetup/AnimeDetail/CharacterCard"
import { Select } from "@/ui/Select"
import React from "react"
import { loop } from "utils/app"

const loading = () => {
  return (
    <div>
      <Select placeholder="Select language of voice actor">{[]}</Select>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {loop(10).map((item, i) => (
          <CharacterCardLoading key={i} />
        ))}
      </div>
    </div>
  )
}

export default loading
