import { useEffect, useState } from "react"
import Shimmer from "../Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../../constant";



export default function RestaurantMenu({ props }) {

    // const [resInfo, setResInfo] = useState(null)
    // const { resId } = useParams();

    // useEffect(() => {
    //     fetchMenu()
    // }, [])

    // async function fetchMenu() {
    //     const data = await fetch(MENU_API + resId)
    //     const json = await data.json()
    //     // console.log(json)

    //     setResInfo(json.data)

    // }



    // setResInfo(props)

    if (!props) {
        return <li className="menu">No items</li>
    }

    // const { name, costForTwoMessage, cuisines } = props?.cards[0]?.card?.card?.info;

    // const { itemCards } = props?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    // console.log(itemCards)


    return (
            <ul className="menu">
                {
                    props.map((items) => (
                        <li key={items.card.info.id}>
                            {items.card.info.name} ------ {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
                        </li>
                    ))
                }
            </ul>

    )
}