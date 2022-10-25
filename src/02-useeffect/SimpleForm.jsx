import { useEffect, useState } from 'react'
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

    // useEffect(() => {
    //     console.log('primer useEffect');
    // }, [])

    // useEffect(() => {
    //     console.log('useEfect form change');
    // }, [formState])

    // useEffect(() => {
    //     console.log('useEfect name change');
    // }, [username])

    // useEffect(() => {
    //     console.log('useEfect email change');
    // }, [email])

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    



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
