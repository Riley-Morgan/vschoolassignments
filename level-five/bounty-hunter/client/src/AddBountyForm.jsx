import React, { useEffect, useState } from 'react'

function AddBountyForm(props) {
    const initInputs = {
        firstname: props.firstname || "",
        lastname: props.lastname || "",
        alive: props.alive || '', 
        bounty: props.bounty || "", 
        alignment: props.alignment || "",
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
        <form className="add-form" onSubmit={handleSubmit}>
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
            <div>
                <h2>Status:</h2>
                <select name="alive" value={inputs.alive} onChange={handleChange}>
                    <option>---</option>
                    <option value={true}>Alive</option>
                    <option value={false}>Dead</option>
                </select>
            </div>
            <input
                type="number"
                name="bounty"
                value={inputs.bounty}
                onChange={handleChange}
                placeholder="Bounty" />
            <input
                type="text"
                name="alignment"
                value={inputs.alignment}
                onChange={handleChange}
                placeholder="Alignment" />
            <button>{ props.btnText }</button>
        </form>
    )
}


export default AddBountyForm