import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

export default function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        setResInfo(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    }

    return resInfo

}