import { Dispatch, FC, SetStateAction } from "react";
import filters from "./filters.json";
import { Categories } from "../Items/Categories";
import classNames from "classnames";

type FilterOption = typeof filters[number];

interface FiltersProps {
  filter: string | null;
  setFilter: Dispatch<SetStateAction<string | null>>
}

export const Filters: FC<FiltersProps> = ({ filter, setFilter }) => {

  function selectFilter(option: FilterOption) {
    if (filter === option.label) return setFilter(null);
    return setFilter(option.label);
  }

  return (
    <div className="flex justify-between w-full">
      {filters.map(option => (
        <button key={option.label} onClick={() => selectFilter(option)}
          className={classNames({
            "flex flex-col rounded-xl border p-8 items-center w-32 gap-2 text-lg": true,
            "text-green-700 bg-slate-200  dark:bg-slate-100 ": filter === option.label
          })}>
          <Categories
            key={option.label}
            categories={[option.label]} />
          {option.label}
        </button>
      ))}
    </div>
  )


}