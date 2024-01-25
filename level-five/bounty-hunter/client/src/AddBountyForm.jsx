import React, { useState } from 'react'

function AddBountyForm(props) {
    const initInputs = {
        firstname: props.firstname || "",
        lastname: props.lastname || "",
        living: props.living || "", 
        bounty: props.bounty || "", 
        type: props.type || "",
    }
    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(event) {
        const { name, value } = event.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form>
            <input
                type="text"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
                placeholder="First Name" />
            <input
                type="text"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                placeholder="Last Name" />
            <input
                type="text"
                name="living"
                value={inputs.living}
                onChange={handleChange}
                placeholder="Status" />
            <input
                type="text"
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                placeholder="Bounty" />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Alignment" />
            <button>{ props.btnText }</button>
        </form>
    )
}


export default AddBountyForm