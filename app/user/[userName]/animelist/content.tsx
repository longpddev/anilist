"use client"
import Icon from "@/ui/Icon"
import Grid from "@/ui/Icon/Grid"
import TableList from "@/ui/Icon/TableList"
import Input from "@/ui/Input"
import Range, { RangeLabel } from "@/ui/Range"
import { Select } from "@/ui/Select"
import { faList, faSearch, faThList } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import React from "react"
import { loop } from "utils/app"
import MediaCard from "./MediaCard"
import { MediaTableList, MediaTableListMinimum } from "./MediaTableList"

const Section: React.FC<{
  className?: string
  children: React.ReactNode
  label?: string
}> = ({ className, children, label }) => (
  <div className={clsx(className, "mb-5")}>
    {label && (
      <label htmlFor="" className="mb-2.5 block text-[13px] text-text-lighter">
        {label}
      </label>
    )}
    {children}
  </div>
)

const ContentLeft = () => {
  return (
    <div className="content-left">
      <Section>
        <Input icon={<Icon icon={faSearch} />}></Input>
      </Section>
      <Section label="Lists">
        <ul className="group">
          {loop(4).map((i) => (
            <li key={i}>
              <button
                className={clsx(
                  "cursor-pointer flex justify-between px-2.5 py-1.5 mb-2 font-medium w-full text-sm",
                  {
                    "bg-foreground text-text": i === 0,
                    "text-text-lighter": i !== 0,
                  }
                )}
              >
                <span>All</span>{" "}
                <span className="opacity-0 group-hover:opacity-100 transition-all">
                  111
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Section>
      <Section label="Filters">
        <Select
          placeholder="Format"
          value={"TV"}
          defaultVal="TV Short"
          wrapClass="mb-2 sm"
        >
          {[
            { label: "TV", value: "TV" },
            { label: "TV Short", value: "TV Short" },
            { label: "Movie", value: "Movie" },
            { label: "Special", value: "Special" },
          ]}
        </Select>
        <Select
          placeholder="Format"
          value={"TV"}
          defaultVal="TV Short"
          wrapClass="mb-2 sm"
        >
          {[
            { label: "TV", value: "TV" },
            { label: "TV Short", value: "TV Short" },
            { label: "Movie", value: "Movie" },
            { label: "Special", value: "Special" },
          ]}
        </Select>
        <Select
          placeholder="Format"
          value={"TV"}
          defaultVal="TV Short"
          wrapClass="mb-2 sm"
        >
          {[
            { label: "TV", value: "TV" },
            { label: "TV Short", value: "TV Short" },
            { label: "Movie", value: "Movie" },
            { label: "Special", value: "Special" },
          ]}
        </Select>
        <Select
          placeholder="Format"
          value={"TV"}
          defaultVal="TV Short"
          wrapClass="mb-2 sm"
        >
          {[
            { label: "TV", value: "TV" },
            { label: "TV Short", value: "TV Short" },
            { label: "Movie", value: "Movie" },
            { label: "Special", value: "Special" },
          ]}
        </Select>
      </Section>
      <RangeLabel
        label="Year"
        value={0}
        min={0}
        max={2000}
        step={1}
        className="text-xl"
        onChange={(v) => {}}
      ></RangeLabel>
      <Section label="Sort">
        <Input icon={<Icon icon={faSearch} />}></Input>
      </Section>
    </div>
  )
}

const ContentRight = () => {
  return (
    <div className="content-right">
      <div className="flex justify-between gap-4 items-center">
        <h2>Watching</h2>
        <div className="flex p-2 rounded-md bg-foreground gap-4 relative top-[-20px]">
          <button className="text-text hover:text-blue w-5 h-5 block relative">
            <TableList className="position-center" />
          </button>
          <button className="text-text hover:text-blue w-5 h-5 block relative">
            <Icon className="position-center" icon={faList}></Icon>
          </button>
          <button className="text-text hover:text-blue w-5 h-5 block relative">
            <Grid className="position-center" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,150px)] gap-4">
        {loop(10).map((i) => (
          <MediaCard key={i} />
        ))}
      </div>
      <MediaTableList />
      <MediaTableListMinimum />
    </div>
  )
}

const Content = () => {
  return (
    <div className="user-detail-sidebar c_container">
      <ContentLeft />
      <ContentRight />
    </div>
  )
}

export default Content
