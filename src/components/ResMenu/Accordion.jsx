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
                                <h3 
                                key={k}
                                onClick={<RestaurantMenu props={acc?.card?.card?.itemCards}/>}
                                >
                                    {acc.card.card.title}
                                </h3>
                                
                            </>
                    ))
                }
        </div>
    )
}


/*


{
                    accordion.map((acc, k) => (
                            <>
                                <h3 key={k}>{acc.card.card.title}</h3>
                                <RestaurantMenu props={acc?.card?.card?.itemCards}/>
                            </>
                    ))
                }

*/

/*<h3>{accordion[1].card.card.title}</h3>
            <RestaurantMenu props={accordion[1].card?.card?.itemCards}/>   */