import React from "react";
class Lists extends React.Component{
    render(){
        let Fruit=["Mango", "Orange", "Apple", "Grapes", "banana"]
        let items=[]

        //for loop
        for(let i=0; i<Fruit.length; i++){
            items.push(<li>{Fruit[i]}</li>)
            console.log(items)
            
        }

        //forEach loop 1st way
        items.forEach((x,index) =>{
            items.push(<li>{Fruit[index]}</li>)
        })

        //forEach loop 2nd way
        Fruit.forEach((x)=>{
            items.push(<li>{x}</li>)
        })

        //for of loop
        for(let x of Fruit){
            items.push(<li>{x}</li>)
        }
        
        // <li>
        // {Fruit.map((fruits) => <fruit items={fruits.items}/>)}
        // </li>
        

        return(
            <div>
                <h1>Fruits List</h1>
                <ul>{items}</ul>
                
            </div>
        )
    }
}
export default Lists;



// for
// for each
// for of
// map 