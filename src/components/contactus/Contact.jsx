
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import image from './img/tree.jpg';
const  Contact=(props)=>{
    return (
        <>
            <div className='container'>
              <div className='row justify-content-center align-items-center  Vmid'>
                <div className='col-md-5 card  py-2 mycard'>
                <div className="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" />
            </div>   
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="tel" class="form-control" id="phone" placeholder="phone" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className='d-flex justify-content-center'>
                   <button className='btn btn-info'>Submit</button>
            </div>
                </div>
              </div>
            </div>
        </>





    );
}

export default Contact;