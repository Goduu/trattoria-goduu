import classNames from "classnames";
import options from "./options.json";
import React, { FC, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

type SorterProps = {
  sort: string,
  setSort: React.Dispatch<React.SetStateAction<string>>
}

export const Sorter: FC<SorterProps> = ({
  sort,
  setSort
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <button
        className="border items-center rounded-md flex gap-4 h-10 justify-between px-3.75 w-full h-12"
        onClick={() => setOpen(!open)}
      >
        <span className="text-1.5rem font-bold px-4">Sort by</span>
        <div className="px-5">
          {open ? (
            <MdKeyboardArrowUp size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </div>
      </button>
      <div
        className={classNames({
          "absolute top-12 right-0 flex flex-col gap-3.75 border rounded-md w-full": true,
          "hidden": !open,
        }
        )}
      >
        {options.map((option) => (
          <button
            key={option.value}
            className="text-1.5rem font-bold h-10 px-1 hover:bg-slate-200  dark:hover:bg-gray-600 rounded-md w-full"
            onClick={() => {
              setSort(option.value);
              setOpen(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}