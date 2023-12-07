import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'
import { Button } from '../../Button';

export const loginAction = async ({ request, params }) => {
  const formData = await request.formData();

  const user = {
    login: formData.get('username'),
    password: formData.get('password'),
  };

  if (!user.login) {
    return {
      usernameError: "Incorrect username",
    };
  }

  if (!user.password) {
    return {
      passwordError: "Incorrect password",
    };
  }

  const req = await fetch('http://localhost:7070/auth', 
    {
      method: 'POST', 
      body: JSON.stringify(user)
    }
  );

  const {token} = await req.json();
  if (token) {
    localStorage.setItem('token', token);
  }
  
  return redirect('/news');
}

export const Login = () => {
  const actionData = useActionData();

  return (
    <Form method='post' className='auth-form form'>
      <div className="form__field">
        <input className='form__input' type="text" name='username' placeholder='Username' />
        {actionData  && <p className='form__input-error'>{actionData.usernameError}</p>}
      </div>
      <div className="form__field">
        <input className='form__input' type="password" name='password' placeholder='Password' />
        {actionData && <p className='form__input-error'>{actionData.passwordError}</p>}
      </div>
      <Button>Login</Button>
    </Form>
  )
}
