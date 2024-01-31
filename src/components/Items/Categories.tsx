import { FC } from "react";
import { FaFish } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { FaShrimp } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";
import { IconType } from "react-icons";
import { GiSteak } from "react-icons/gi";
import { GiChiliPepper } from "react-icons/gi";
import classNames from "classnames";

export const categoryIconMap: { [key: string]: IconType } = {
    "Fish": FaFish,
    "Vegetarian": FaLeaf,
    "Vegan": GiThreeLeaves,
    "Seafood": FaShrimp,
    "Pasta": GiNoodles,
    "Meat": GiSteak,
    "Spicy": GiChiliPepper
}

type CategoryProps = {
    categories: string[]
}

export const Categories: FC<CategoryProps> = ({ categories }) => {
    return (
        <>
            {categories.map((category, index) => {
                const Icon = categoryIconMap[category];
                return (
                    <div key={index}>
                        {Icon && <Icon className="size-10" title={category} />}
                    </div>
                );
            })}
        </>
    )
}