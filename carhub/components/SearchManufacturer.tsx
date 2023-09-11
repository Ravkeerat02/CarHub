"use client";

import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  // Fix the filtering logic here
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase())
        );

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car-logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="searchmanufacturer__input" // Corrected the class name here
            placeholder="Volkswagen"
            value={query} // Use `value` instead of `displayValue`
            onChange={(e) => setQuery(e.target.value)} // Use `setQuery` to update the state
          />
          {/* Used for animation/movements */}
          <Transition
            as={Fragment}
            leave="transition ease-in leave"
            from="opacity-100"
            to="opacity-0"
            afterLeave={() => setQuery("")} // Reset the query state after leaving
          >
            <Combobox.Options
              value={query} // Use `value` instead of `query`
              className="search-manufacturer__option"
            >
              {filteredManufacturers.map((item) => (
                <Combobox.Option key={item} value={item}>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-blue-100" : ""
                      } cursor-pointer`}
                    >
                      {item}
                    </div>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
