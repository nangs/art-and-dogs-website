import React, { useState, useEffect } from 'react'

const inputClass = {
    marginBottom: "20px"
}


const NotLogged = props => {
    // States:
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // On mount:
    useEffect(() => {
        let userData = JSON.parse(window.localStorage.getItem('aadLogin'))
        if (userData && userData.userName && userData.userName.length > 0 && userData.password && userData.password.length > 0) {
            console.log('connecting...')
            props.loggingFunction(userData.userName, userData.password)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Handle changes:
    const handleChangeUserName = event => setUserName(event.target.value)
    const handleChangePassword = event => setPassword(event.target.value)

    return (
        <section className="flex-center">
            <h2>Veuillez vous connecter</h2>
            <div>
                <div>
                    <h3>Nom d'utilisateur</h3>
                    <input
                        style={inputClass}
                        type="text"
                        value={userName}
                        onChange={handleChangeUserName}
                    />
                </div>
                <div>
                    <h3>Mot de passe</h3>
                    <input
                        style={inputClass}
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="flex-center">
                    <button onClick={() => props.loggingFunction(userName, password)}>Se connecter</button>
                </div>
            </div>
            {props.loginError && <p className="error">{props.loginError}</p>}
        </section>
    )
}

export default NotLogged