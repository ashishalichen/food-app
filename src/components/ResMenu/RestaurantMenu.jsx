export default function RestaurantMenu({ props }) {

    if (!props) {
        return <li className="menu">No items</li>
    }
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