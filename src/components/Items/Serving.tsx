import { FC } from "react";
import { GoPersonFill } from "react-icons/go";

type ServingProps = {
    serving: number
}
export const Serving: FC<ServingProps> = ({ serving }) => {
    return (
        <div className="flex">
            {Array(serving).fill(<GoPersonFill size={20} />)}
        </div>
    )
}