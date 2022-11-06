import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [ formState, setFormState ] = useState({
        username: 'strider',
        email: 'gaby@gmail.com'
    });

    const { username, email } = formState;

    const onChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    useEffect(() => {
        // console.log('useEffect called!');
    }, [])

    useEffect(() => {
        // console.log('formState changed!');
    }, [ formState ])

    useEffect(() => {
        // console.log('email changed!');
    }, [ email ])

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className='form-control'
            placeholder='Username'
            name='username'
            autoComplete='off'
            value={ username }
            onChange={ onChange } />
        <input 
            type="email"
            className='form-control mt-2'
            placeholder='goiko@gmail.com'
            name='email' 
            autoComplete='off'
            value={ email }
            onChange={ onChange } />


            {
                (username === 'strider2') && <Message />
            }


    </>
  )
}
