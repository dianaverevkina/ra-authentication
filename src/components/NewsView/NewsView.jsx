import React from 'react'
import { redirect, useLoaderData, useNavigate } from 'react-router-dom';
import { NewsItem } from '../NewsItem/NewsItem';
import { Button } from '../Button';

export const newsItemLoader = async ({ request, params }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return redirect('/');
  }

  const sentHeaders = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const {id} = params;
  const newsReq = await fetch(`http://localhost:7070/private/news/${id}`, sentHeaders)
  if (!newsReq.ok) {
    throw new Error(newsReq.statusText)
  }

  const newsData = await newsReq.json();
  return newsData;
}

export const NewsView = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  function handleCloseNews() {
    navigate(-1);
  }
 
  return (
    !data.message && 
      <div className='news-view'>
        <NewsItem {...data}>
          <Button onClick={handleCloseNews}>
            <svg width="10" height="10" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.209983 1.38699L0.292984 1.29299C0.465176 1.12081 0.694276 1.01738 0.937302 1.0021C1.18033 0.986819 1.42058 1.06074 1.61298 1.20999L1.70698 1.29299L7.99998 7.58499L14.293 1.29299C14.3852 1.19748 14.4956 1.1213 14.6176 1.06889C14.7396 1.01648 14.8708 0.988893 15.0036 0.987739C15.1364 0.986585 15.268 1.01189 15.3909 1.06217C15.5138 1.11245 15.6255 1.1867 15.7194 1.28059C15.8133 1.37449 15.8875 1.48614 15.9378 1.60904C15.9881 1.73193 16.0134 1.86361 16.0122 1.99639C16.0111 2.12917 15.9835 2.26039 15.9311 2.38239C15.8787 2.5044 15.8025 2.61474 15.707 2.70699L9.41498 8.99999L15.707 15.293C15.8792 15.4652 15.9826 15.6943 15.9979 15.9373C16.0132 16.1803 15.9392 16.4206 15.79 16.613L15.707 16.707C15.5348 16.8792 15.3057 16.9826 15.0627 16.9979C14.8196 17.0132 14.5794 16.9392 14.387 16.79L14.293 16.707L7.99998 10.415L1.70698 16.707C1.51838 16.8891 1.26578 16.9899 1.00358 16.9877C0.741385 16.9854 0.490573 16.8802 0.305165 16.6948C0.119757 16.5094 0.0145875 16.2586 0.0123091 15.9964C0.0100307 15.7342 0.110825 15.4816 0.292984 15.293L6.58498 8.99999L0.292984 2.70699C0.120807 2.5348 0.0173755 2.3057 0.00209428 2.06267C-0.0131869 1.81964 0.0607321 1.57939 0.209983 1.38699L0.292984 1.29299L0.209983 1.38699Z" fill="#ffffff"/>
            </svg>
          </Button>
        </NewsItem>
      </div>
  )
}
