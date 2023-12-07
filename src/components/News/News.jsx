import { redirect, useLoaderData } from 'react-router-dom'
import { NewsList } from './NewsList.jsx/NewsList';

export const newsLoader = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return redirect('/');
  }

  const sentHeaders = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const newsReq = await fetch('http://localhost:7070/private/news', sentHeaders)
  const newsData = await newsReq.json();
  return newsData;
}

export const News = () => {
  const newsData = useLoaderData();

  return (
      <div className="news"> 
        <NewsList newsData={newsData}/>
      </div>
  )
}
