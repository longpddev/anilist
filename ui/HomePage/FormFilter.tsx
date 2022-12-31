"use client"
import { faSearch, faSlidersH } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React, { useState } from "react"
import Icon from "../Icon"
import Input, { InputLabel } from "../Input"
import { Select } from "../Select"
import "./FormFilter.scss.css"
const FormFilter = () => {
  const [advanceOption, advanceOptionSet] = useState(true)
  const [val, valSet] = useState<number | string>("option1")
  const [val1, val1Set] = useState<string>("option1")

  return (
    <div>
      {" "}
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
        <div className="home-filter__dropdown">
          {advanceOption && <AdvanceOption></AdvanceOption>}
        </div>
      </div>
    </div>
  )
}

const AdvanceOption = () => {
  const [val, valSet] = useState<number | string>("option1")
  const [val1, val1Set] = useState<string>("option1")
  return (
    <div>
      <div className="items-end relative flex flex-wrap gap-x-6 gap-y-2">
        <InputLabel label="Airing Status">
          <Select
            className="bg-background-200"
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
        <InputLabel label="Streaming On">
          <Select
            className="bg-background-200"
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
        <InputLabel label="Country Of Origin">
          <Select
            className="bg-background-200"
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
        <InputLabel label="Source Material">
          <Select
            className="bg-background-200"
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
    </div>
  )
}

export default FormFilter
