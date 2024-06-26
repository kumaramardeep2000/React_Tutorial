import React from "react"

class Mobile extends React.Component{
    render(){
        return(
            <div>
                <h2>New Mobile Details</h2>
                <h3>Mobile Price:{this.props.data.Price}</h3>
                <h3>Mobile Name:{this.props.data.Name}</h3>
                <h3>Mobile Brand:{this.props.data.Brand}</h3>

            </div>
        )
    }
}

// class NewMobile extends React.Component{
//     render(){
//         let newMobileData = {
//             name: 'galaxy j7 pro',
//             price: 17000,
//             brand: ' Samsung'
//         }

//         return(
//            <div>
//             <ShowNewMobile  data={newMobileData}/>
//            </div> 
//         )
//     }
// }
export default Mobile;
// // export default NewMobile;
// // export {Mobile, NewMobile};    // multiple exports

// class ShowNewMobile extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Another New Mobile Data </h1>
//                 <h3>Mobile Name: {this.props.data.name}</h3>
//                 <h3>Price: {this.props.data.price}</h3>
//                 <h3>Braand: {this.props.data.brand}</h3>
//             </div>
//         )
//     }
// }
