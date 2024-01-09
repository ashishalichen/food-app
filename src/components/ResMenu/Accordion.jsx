import { useEffect, useState } from "react";
import { MENU_API } from "../../constant";
import Shimmer from "../Shimmer";
import { Link, useParams } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

export default function Accordion({ props }) {

    const [accordion, setAccordion] = useState(null)
    const { resId } = useParams()

    async function fetchAPI() {
        const data = await fetch(MENU_API + resId);
        const json = await data.json()
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        setAccordion(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    if (accordion === null) return <Shimmer />

    return (
        <div className="accord-container">
        {
              accordion.map((acc, k) => (
                            <>
                                <div
                                className="accord-list" 
                                key={k}
                                >
                                    <h3>{acc.card.card.title}</h3>
                                    <RestaurantMenu props={acc?.card?.card?.itemCards}/>
                                </div>
                                
                            </>
                    ))
                }
        </div>
    )
}

