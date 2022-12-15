import {  useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'karasuem@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="UserName"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />  

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="keno@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
            (username === 'strider2') && <Message/>
        }
    </>
  )
}
