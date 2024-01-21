import { useEffect, useState } from "react";
import { RES_API } from "./constant";


export default function useRestaurantList() {
    const [resList, setResList] = useState(null)

    useEffect(() => {
        fetchRestaurant()
    }, [])

    async function fetchRestaurant() {
        const data = await fetch(RES_API);
        const json = await data.json()

        setResList(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setResList(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return resList
}