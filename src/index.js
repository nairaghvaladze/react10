import  React from "react"
import  ReactDOM from "react-dom/client";
import Table from "./Table";
import "./style.css";


class Application extends React.Component{
    render() {
        return(
            <div>
 <h1>სახელების მასივი</h1>

<Table> </Table>

            </div>
       
        )
    }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<Application />)

