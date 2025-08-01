import { useState } from "react"

const Form = () => {

    const [formData,setFormData] = useState({
        firstName : "",
        lastName : ""
    })

    const [submitted ,setSubmitted] = useState(false)

    const handleChange = (e) => {

        const {name,value} = e.target
        const alphaOnly = /^[A-Za-z]*$/;
        
        if (alphaOnly.test(value)) {
            setFormData((prev) => ({ ...prev, [name]: value }));
            }
        
        
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        setSubmitted(true)
     
    }

    

    return (
        <div>
            <h1> Full Name Display </h1>

            <form onSubmit={handleSubmit} className="formStyle">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text"
                     id="firstName"
                     name="firstName"
                     value={formData.firstName}
                     onChange={handleChange}
                     required
                     />
                </div>

                <div>  
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName} 
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {
                submitted && (
                    <h3> Full Name: {formData.firstName} {formData.lastName} </h3>                )
            }

        </div>
    )

}

export default Form