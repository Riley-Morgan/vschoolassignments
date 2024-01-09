import React, {useState} from 'react'
import axios from 'axios'

const UglyContext = React.createContext()

function UglyContextProvider(props){

    const [uglyList, setUglyList] = useState([])

    const getList = (data) => {
        setUglyList(data)
        /* DATA IS PLACEHOLDER, WE DONT KNOW WHAT IT IS YET */
    }

    const handleSubmit = (ugly) => {
        axios.post("https://api.vschool.io/rileymorgan/thing", ugly)
        .then((res) => {
            setUglyList((prev) => [
            ...prev,
            res.data
            
        ]);
        axios.get('https://api.vschool.io/rileymorgan/thing') // Fetch all posts after deletion
                    .then((response) => {  
                        setUglyList(response.data); // Assuming the response contains the updated list of posts
                    })
                    .catch((error) => console.error(error));
                })
        .catch((err) => console.log(err))
    }

    const handleDelete = (ugly) => {
        axios.delete(`https://api.vschool.io/rileymorgan/thing/${ugly}`)
            .then((res) => {
                console.log(res.data);
                setUglyList((prevUglyList) => {
                    return prevUglyList.filter((item) => item.index !== ugly.index); // Update the ugly list after deletion
                });

                axios.get('https://api.vschool.io/rileymorgan/thing') // Fetch all posts after deletion
                    .then((response) => {  
                        setUglyList(response.data); // Assuming the response contains the updated list of posts
                    })
                    .catch((error) => console.error(error));
            })
            .catch((err) => console.log(err));
    };

    return (
        <UglyContext.Provider value = {{
            uglyList: uglyList,
            getList: getList,
            handleSubmit: handleSubmit,
            handleDelete: handleDelete
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}
/* 
    
    form submit will post to the vschool api thing lsit
    
    needs a delete button so delete with axios / postman 

    needs edit button that wil put  to api
    
    YOU GOT THIS FELLOW PROGRAMER!!!
    REACT FIEND!!
    JAVASCRIPT LEGIONAIRE!!!
    */

// const handleDelete = (ugly) => {
    //     axios.delete(`https://api.vschool.io/rileymorgan/thing/${ugly}` )
    //         .then(res => {
    //             console.log(res.data)
    //             setUglyList(prevuglyList => {
    //                 return (
    //                     prevuglyList.filter((ugly, index) => {
    //                         return index !== ugly.index
    //                     })
    //                 )
    //             })
    //         })
    //         .catch(err => console.log(err))
        
    // }    