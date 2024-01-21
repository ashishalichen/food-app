import { useEffect } from "react"
import { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useRestaurantList from "./Utils/useRestaurantList";
import useOnlineStatus from "./Utils/useOnlineStatus"




export default function Body() {
    const [filterList, setFilterList] = useState([])
    const [filterBtn, setFilterBtn] = useState('Top Rated')
    const [searchText, setSearchText] = useState('')

    const resList = useRestaurantList()
    const onlineStatus = useOnlineStatus()

    useEffect(() => {
        if (resList) {
            setFilterList(resList);
        }
    }, [resList]);


    if (!resList) {
        return <Shimmer />
    }

    if (onlineStatus === false) {
        return <h1>Looks like you are offline</h1>
    }


    // console.log(searchText)
    // console.log(resList)
    console.log(resList)


    return (
        <div className="body">
            <div className="search-container">
                <input
                    className="searchText"
                    type="text"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        // console.log(searchText)

                        if (searchText.length === 1 || searchText.length === 0) {
                            setFilterList(resList)
                            // console.log(filterList)
                        }
                    }}
                />


                <button
                    className="search"
                    onClick={() => {
                        const newList = filterList.filter(res => res.info.name.toLowerCase().includes(searchText))
                        setFilterList(newList)
                    }}
                >Search</button>



                <button
                    className="filter"
                    onClick={() => {
                        if (filterBtn === 'Top Rated') {
                            setFilterBtn('Clear Filter')
                            setFilterList(filterList.filter((res) => res.info.avgRating > 4.5))
                        } else {
                            setFilterBtn('Top Rated')
                            setFilterList(resList)
                        }
                        // console.log(filterList)
                    }}>{filterBtn}</button>
            </div>



            <div className="res-container">
                {
                    filterList.map((res) => (
                        <Link
                            key={res.info.id}
                            to={"/accordion/" + res.info.id}><RestaurantCard props={res} />
                        </Link>
                    ))
                }
            </div>
        </div>


    )

}