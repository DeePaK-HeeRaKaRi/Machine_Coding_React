import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import Pill from './Component/Pill';

const MultiSelectInput = () => {
    const [searchTerm, setSearchTearm] = useState("")
    const [suggestions,setSuggestions] = useState([])
    const [selectedUsers,setSelectedUsers] = useState([])
    const [selectedUsersSet,setSelectedUsersSet] = useState(new Set())
   
    const inputRef = useRef(null)  //For auto focus

    useEffect(() => {
         // https://dummyjson.com/users/search?q=John
        const fetchUSers = () => {
            if(searchTerm.trim() === "") {
                setSuggestions([])
                return
            }
            fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
            .then((res) => res.json())
            .then((data) => setSuggestions(data))
            .catch((err) => {
                console.log(err)
            })
        }
        fetchUSers()
    }, [searchTerm])

    const handleSelectUser = (user) => {
        setSelectedUsers([...selectedUsers , user]);
        setSelectedUsersSet(new Set([...selectedUsersSet,user.email]))
        setSearchTearm('')
        setSuggestions([])
        inputRef.current.focus()
    }
    console.log('---selected User',selectedUsers)

    const handleRemoveUser = (user) => {
        const updatedUsers = selectedUsers.filter(selectedUser => selectedUser.id !== user.id)
        setSelectedUsers(updatedUsers)

        const updatedEmails = new Set(selectedUsersSet)
        console.log('---updatedEmails---',updatedEmails)
        updatedEmails.delete(user.email)
        setSelectedUsersSet(updatedEmails)

    }

    const handleKeyDown = (e) => {
        if(e.key === 'Backspace' && e.target.value === '' && selectedUsers.length >0) {
            const lastUser = selectedUsers[selectedUsers.length -1 ]
            handleRemoveUser(lastUser)
            setSuggestions([])
        }
    }
  return (
    <div className='user-search-container'>
        <div className='user-search-input'>
            {/* <Pill /> */}
            {
                selectedUsers.map((user) => {
                    return <Pill key={user.email} image={user.image} text={`${user.firstName} ${user.lastName}`}
                     onClick={() => handleRemoveUser(user)}/>
                })
            }
            <input ref={inputRef} onKeyDown={handleKeyDown} type='text' value={searchTerm} onChange={(e) => setSearchTearm(e.target.value)} placeholder='Search user...' />
            <ul className='suggestions-list'>
                {suggestions?.users?.map((user,index) => {
                    return !selectedUsersSet.has(user.email) ? (
                        <li key={user.email} onClick={()=> handleSelectUser(user)}>
                            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                            <span>{user.firstName} ${user.lastName}</span>
                        </li>
                    ) : <></>
                })}

            </ul>
        </div>
    </div>
  )
}

export default MultiSelectInput