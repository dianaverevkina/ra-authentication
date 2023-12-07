import React from 'react'
import { Button } from '../../Button'
import { redirect, useFetcher } from 'react-router-dom';

export const logoutAction = () => {
  localStorage.removeItem('token');
  return redirect('/');
}

export const Profile = ({name, avatar, onClick}) => {
  let fetcher = useFetcher();
 
  return (
    <div className="profile">
      <p className="profile__hello">Hello, {name}</p>
      <div className="profile__img">
        <img src={avatar} alt="" />
      </div>
      <fetcher.Form method="post" action="/logout">
        <Button >Log Out</Button>  
      </fetcher.Form>
    </div>
  )
}
