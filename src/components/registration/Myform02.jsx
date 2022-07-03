import { useState } from 'react'
import './myform.css'



const Myform02 = () => {
    const Handler = (e) => {
        e.preventDefault()
        const final = JSON.stringify(values)
        alert(final)


        const asyncPostCall = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/studentapi/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: final,
                });
                const data = await response.json();
            
                
                
                console.log(data)
            }
            catch (error) {
                console.log(error)
            }
        }
        const letsee = asyncPostCall()
        console.log(letsee)
    }
    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        password:"",
        conferm_password:"",


    })
    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const handlePhoneInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            phone: event.target.value,
        }));
    };

    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handlePasswordChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    const handleconferm_passwordChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            conferm_password: event.target.value,
        }));
    };

    

    return (
        <>
            <div className="main_cont" style={{ height: "80vh" }}>
                <div className="container">
                    <div className="row justify-content-center align-itmes-center">
                        <div className="for_margin_top col-md-4  card  shadow px-3 py-2 mycardReg">
                            <h2 className='fw-700 text-center'>Have an Account ?</h2>
                            
                            <form action="" className="con_form" onSubmit={Handler}>

                                <input type="text"
                                    id='myname'
                                    name='name'
                                    placeholder='you full name'
                                    onChange={handleNameInputChange}
                                    value={values.name} />

                                <input type="text"
                                    id='email'
                                    name='email'
                                    placeholder='your email'
                                    onChange={handleEmailInputChange}
                                    value={values.email} />

                                <input type="phone"
                                    id='phone'
                                    name='phone'
                                    placeholder='mention your phone'
                                    onChange={handlePhoneInputChange}
                                    value={values.phone} />

                                <input type="password"
                                    id='password'
                                    name='password'
                                    placeholder='password'
                                    onChange={handlePasswordChange}
                                    value={values.password} />

                                <input type="password"
                                    id='conferm_password'
                                    name='conferm_password'
                                    placeholder='conferm_password'
                                    onChange={handleconferm_passwordChange}
                                    value={values.conferm_password} />

                                

                                <button type="submit"
                                    className='btn btn-info'
                                    value="submit">submit</button>

                            </form>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} //component ends here!!!

export default Myform02