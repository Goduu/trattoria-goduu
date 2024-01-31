import React, { FC } from "react";
import { CgSearch } from "react-icons/cg";

type SearchBarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <div className="border items-center rounded-md flex h-12 justify-between px-3.75">
      <input
        className=" border-none outline-0 bg-transparent rounded-lg text-1.5rem font-bold outline-none w-full"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search"
      />
      <div className="pr-5">
        <CgSearch size={20} />
      </div>
    </div>
  );
}