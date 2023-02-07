import { faSearch } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import Checkbox from "@/ui/Checkbox"
import CheckboxLabel from "@/ui/Checkbox/CheckboxLabel"
import Collapse from "@/ui/Collapse"
import Icon from "@/ui/Icon"
import Input, { InputLabel } from "@/ui/Input"
import { RangeBothLabel, RangeLabel } from "@/ui/Range"
import { Select } from "@/ui/Select"
import TagList from "@/ui/Tag/TagList"

const AdvanceOption = () => {
  const [val, valSet] = useState<number | string>("option1")
  const [range, rangeSet] = useState<[number, number]>([10, 90])
  const [val1, val1Set] = useState<string>("option1")
  const [check, checkSet] = useState(false)
  const [range1, range1Set] = useState(10)
  return (
    <div className="">
      <div className="relative grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-4">
        <InputLabel label="Airing Status">
          <Select
            dark
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
            dark
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
            dark
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
            dark
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
      <div className="md:mt-10 mt-5 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-4">
        <RangeBothLabel
          className="flex-1 text-lg"
          label="year range"
          value={range}
          onChange={rangeSet}
          min={0}
          max={100}
          step={1}
          onReset={() => rangeSet([10, 70])}
        />
        <RangeBothLabel
          className="flex-1 text-lg"
          label="year range"
          value={range}
          onChange={rangeSet}
          min={0}
          max={100}
          step={1}
          onReset={() => rangeSet([10, 70])}
        />
        <RangeBothLabel
          className="flex-1 text-lg"
          label="year range"
          value={range}
          onChange={rangeSet}
          min={0}
          max={100}
          step={1}
          onReset={() => rangeSet([10, 70])}
        />
      </div>

      <div className="md:mt-10 mt-5">
        <CheckboxLabel label="Doujin" id="checkbox456">
          <Checkbox checked={check} id="checkbox456" onCheck={checkSet} />
        </CheckboxLabel>
      </div>
      <hr className="md:mt-10 mt-5" />
      <Collapse className="md:mt-10 mt-5" label="Advanced Genres & Tag Filters">
        <div className="md:mt-5 mt-2">
          <div className="flex justify-between items-end flex-col sm:flex-row gap-4">
            <RangeLabel
              label="Minimum tag percentage"
              wrapClass="md:max-w-[240px] w-full"
              value={range1}
              onChange={range1Set}
              max={100}
              min={0}
              step={1}
              onReset={() => range1Set(10)}
            />
            <div className="md:max-w-[240px] w-full">
              <Input
                dark
                value={val1}
                onChange={(e) => val1Set(e.target.value)}
                icon={<Icon icon={faSearch} />}
                onReset={() => val1Set("")}
              />
            </div>
          </div>
          <div className=" max-h-[350px] overflow-auto md:mt-7 mt-3">
            <TagList
              label="Theme / Sci Fi"
              tags={[
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
              ]}
            />
            <TagList
              label="Theme / Sci Fi"
              className="md:mt-7 mt-3"
              tags={[
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
              ]}
            />
            <TagList
              label="Theme / Sci Fi"
              className="md:mt-7 mt-3"
              tags={[
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
              ]}
            />
            <TagList
              label="Theme / Sci Fi"
              className="md:mt-7 mt-3"
              tags={[
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
                ["Cyberpunk", "Cyberpunk description"],
                ["Space Opera", "Space Opera description"],
                ["Time Manipulation", "Time Manipulation description"],
                ["Tokusatsu", "Tokusatsu description"],
              ]}
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default AdvanceOption
