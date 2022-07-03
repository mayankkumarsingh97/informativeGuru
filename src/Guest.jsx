import React from 'react'

 const Guest = ({item}) => {
    // console.log(typeof(item))
    // console.log(item,'yeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    const {name,title,city,roll,img,content}=item;
    console.log(item)
    // console.log(name)
    // console.log(title)
    // console.log(city)
    // console.log(roll)
    // console.log(img)
    


  return (
    <div>
     <div className="container">
        <div className="row justify-content-center mt-md-4">
            <div className="col-sm-12">
                <div className="title my-md-2">
                 {title}
                </div>
                <div className="content" style={{textAlign:"justify"}}>
                  {content}
                </div>
                <div className="d-flex justify-content-center pic my-2">
                <div className="col-md-5">
                <a href="#"><img className='' src={img} alt="" style={{width:"100%"}}/></a>
                </div>
                </div>
                <div className="autherName">
                    <div className="auther">

                    </div>
                    <div className="name">

                    </div>
                </div>
                <div className="desc">

                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Guest;
























// import React, { Component } from 'react'

// export default class Guest extends Component {

//     render(props) {
//         console.log(props)
//         return (
//             <>
//                 <div className="container" >
//                     <div style={{height:"100vh"}} className="row justify-content-center align-items-center">
//                         <div className="col-md-4 card shadow-lg p-3">
//                             <h2 className='text-center'>guest Component</h2>
//                             <h3 className='text-center'>here..{this.props.state.roll} ll</h3>
//                             <button className='btn btn-info'
//                                 style={{backgroundColor:"lightcoral"}}
                                
//                                 onClick={this.props.func}>add Value</button>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
