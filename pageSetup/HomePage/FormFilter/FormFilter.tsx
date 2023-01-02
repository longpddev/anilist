"use client"
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React, { useState } from "react"
import Icon from "@/ui/Icon"
import Input, { InputLabel } from "@/ui/Input"
import { Select } from "@/ui/Select"
import AdvanceOption from "./AdvanceOption"

const FormFilter = () => {
  const [advanceOption, advanceOptionSet] = useState(false)
  const [val, valSet] = useState<number | string>("option1")
  const [val1, val1Set] = useState<string>("option1")

  return (
    <div>
      <div className="flex pb-2.5 home-filter">
        <div className="items-end relative flex flex-wrap gap-x-6 gap-y-2">
          <InputLabel label="Search">
            <Input
              value={val1}
              onChange={(e) => val1Set(e.target.value)}
              icon={<Icon icon={faSearch} />}
              onReset={() => val1Set("")}
            />
          </InputLabel>
          <InputLabel label="Genres">
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
          </InputLabel>
          <InputLabel label="Year">
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
          </InputLabel>
          <InputLabel label="Season">
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
          </InputLabel>
          <InputLabel label="Format">
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
          </InputLabel>
        </div>
        <button
          onClick={() => advanceOptionSet(!advanceOption)}
          className={clsx(
            "ml-auto self-end rounded-md relative w-[38px] h-[38px] inline-block bg-background-100",
            {
              "text-blue-500": advanceOption,
            }
          )}
        >
          <Icon icon={faSlidersH} className="position-center"></Icon>
        </button>
      </div>
      <div
        className={clsx("relative home-filter__advance", {
          show: advanceOption,
        })}
      >
        <div className="home-filter__dropdown max-w-[900px] w-full">
          {advanceOption && <AdvanceOption></AdvanceOption>}
        </div>
      </div>
    </div>
  )
}

export default FormFilter
