"use client"
import { FC, useState } from "react";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Filters } from "@/components/Filter/Filters";
import { Items } from "@/components/Items/Items";
import { Sorter } from "@/components/Sorter/Sorter";

export const Menu: FC = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState("");

    return (
        <div className="flex flex-col gap-10 w-10/12 min-h-full">
            < h3 className="text-4xl font-bold">Our Menu</h3 >
            <div className="flex gap-5">
                <Filters filter={filter} setFilter={setFilter} />
                <div className="flex flex-col gap-5 justify-between">
                    <SearchBar search={search} setSearch={setSearch} />
                    <Sorter sort={sortBy} setSort={setSortBy} />
                </div>
            </div>
            <Items search={search} filter={filter} sortBy={sortBy} />
        </div>
    )
}