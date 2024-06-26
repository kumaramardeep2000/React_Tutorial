function ShowLaptop(items){
    return(
        <div>
            <h2>laptop details</h2>
            <h3>laptop Name :{items.data.Name}</h3>
            <h3>laptop Price:{items.data.Price}</h3>
            <h3>laptop brand:{items.data.Brand}</h3>

        </div>
    )
}
export default ShowLaptop;