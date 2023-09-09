import React from 'react'

export default function Form(props) {


    const { handleSubmit } = props

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            birthDate: "",
            phone: "",
            favAnimal: "",
            comments: ""
        }
    )

    
    
    
    function handleChange(event) {
        const {name, value} = event.target 
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        
    }
    function submit(e){
        e.preventDefault()
        handleSubmit(formData)
    }

    

    return (
        <main className="form--box">
            <form className="form" onSubmit={submit}>
                <input 
                    type="text"
                    className="form--input"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="Date of Birth"
                    name="birthDate"
                    onChange={handleChange}
                    value={formData.birthDate}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="Phone"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                />

                <input 
                    type="text"
                    className="form--input"
                    placeholder="Favorite Animal"
                    name="favAnimal"
                    onChange={handleChange}
                    value={formData.favAnimal}
                />
                <br></br>
                <textarea
                    className="form--text"
                    placeholder="Tell us about yourself"
                    name="comments"
                    onChange={handleChange}
                />
                <br></br>
                <button className="form--button">Submit</button>
            </form>
        </main>
    )
}