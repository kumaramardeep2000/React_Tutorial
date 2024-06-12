function Products(){
    let tvData={
        Name : 'Samsung tv',
        Price : 200000,
        Brand : 'Samsung'

    }

    let mobileData={
        Name : 'Samsung a33',
        Price : 26000,
        Brand : 'Samsung'
    }

    let laptopData={
        Name : 'HP 15s',
        Price : 50000,
        Brand : 'HP'
    }

    return(
        <div>
            <h1>Products details</h1>
        
        <Showmobile data={mobileData} />
        <h1>hii i am amardeep</h1>
        
        </div>
    )
}
export default Products;

function Showmobile (items){
    return(
        <div>
            <h2>Mobile data</h2>
            <h3>Mobile Name:{items.data.Name}</h3>
            <h3>Mobile Price: {items.data.Price} </h3>
            <h3>Mobile Brand:{items.data.Brand} </h3>
        </div>
    )
}