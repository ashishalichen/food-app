import { CDN_URL } from "./Utils/constant"


export default function RestaurantCard({ props }) {
    // console.log(resData)

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = props?.info;
    return (
        <div className="res-card-container">
            <div className="res-img-container">
                <img className="res-img" src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="res-details">
                <h2>{name}</h2>
                <h3>{cuisines.slice(0, 2).join(', ')}</h3>
                <h3>{costForTwo}</h3>
                <h3>{avgRating} stars</h3>
                <h3>{sla.slaString}</h3>
            </div>
        </div>
    )
}

