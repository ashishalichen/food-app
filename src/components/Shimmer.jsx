function ShimmerCard() {
    return (
        <div className="shimmer-container">
            <div className="shimmer-img-container">
            </div>
            <div>
                <h2></h2>
                <h3></h3>
                <h3></h3>
                <h3></h3>
                <h3></h3>
            </div>
        </div>
    )
}

export default function Shimmer(){
    return(
        <div className="shimmer">
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
        </div>
    )
}