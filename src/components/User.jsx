export default function User(props) {
    console.log(props)
    const {name,location} = props
    
    return <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location :{location}</h3>
        <h4>Contact: @qweasd</h4>
    </div>
}