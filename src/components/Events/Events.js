import React from "react"

class ShowMsg extends React.Component{
    render(){
        
        let ShowMsg = () =>{document.write('<h1 style="color: yellow">Hii Amardeep\n welcome to your Profile</h1>')}
        return(
            <div style={{color:'green'}}>
                <h1>Press button to display message</h1>
                <button onClick={ShowMsg}>click Here</button>
            </div>
        )
        
    }
}
export default ShowMsg;