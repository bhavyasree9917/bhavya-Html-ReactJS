import React, { useState } from 'react'
import Parent from './Parent'
import { UserContextProvider } from './Usercontext'

const Main = () => {
    const [usersInfo, setUsersInfo] = useState(["sree", "bhavya", "ram", "Kalyan"])
    const [newUsers, setNewUsers] = useState(["bhavya", "ram", "pspk","rakesh","pallavi"])
    return (
        <div>
            <UserContextProvider value={newUsers}>
                <Parent usersInfo={usersInfo} />
            </UserContextProvider>

        </div>
    )
}

export default Main
