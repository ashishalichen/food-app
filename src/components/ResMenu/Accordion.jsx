import { useState } from "react";
import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import "./RestaurantMenu.css"
import useRestaurantMenu from "../Utils/useRestaurantMenu";

export default function Accordion({ props }) {

    const [indexClicked, setIndexClicked] = useState(null)
    const { resId } = useParams()

    const accordion = useRestaurantMenu(resId)
    if (accordion === null) return <Shimmer />


    return (
        <div className="accord-container">
            {
                accordion.map((acc, index) => (
                    <div
                        className="accord-list"
                        key={index}
                    >
                        <h3
                            className="accord-title"
                            onClick={() => setIndexClicked(index === indexClicked ? null : index)}
                        >{acc.card.card.title}</h3>
                        {indexClicked === index && <RestaurantMenu props={acc?.card?.card?.itemCards} />}
                    </div>
                ))
            }
        </div>
    )
}

