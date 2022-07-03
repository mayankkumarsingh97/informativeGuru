
import './../../../src/main.css'

const Body=(props)=>{
 return(<>
    <div className="d-flex Vmid_body justify-content-center align-items-center body_ye" style={{flexDirection:"column",fontFamily:'cursive'}}>
        <h1>I am  <span style={{color:'green',boxShadow:"12px 12px 4px #eee"}}>Full Stack Dev. {props.name}</span></h1>
        <h1 style={{padding:"15px"}}>Contact me At <span style={{color:"green"}}>9310307506</span></h1>
      
    </div>
    {/* <App04/> */}
 </>)
}

export default Body;