import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Login } from '../Header/Login/Login'
import { Profile } from '../Header/Profile/Profile'

async function getProfile(token) {
  const sentHeaders = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const profileReq = await fetch('http://localhost:7070/private/me', sentHeaders);

  if (profileReq.status === 401) {
    localStorage.removeItem('token');
    redirect('/');
  }

  const profileData = await profileReq.json();

  return profileData;
}

export const rootLoader = async () =>{
  const savedToken = localStorage.getItem('token');

  if (savedToken) {
    const profileData = await getProfile(savedToken);
    return profileData;
  }

  return null;
}

export const Root = () => {
  const data = useLoaderData();

  return (
    <div className="wrapper">
      <Header>
        {!data ? <Login /> : <Profile {...data} />}
      </Header>
      <Outlet />
    </div>
  )
}
