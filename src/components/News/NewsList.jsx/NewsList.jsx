import React from 'react'
import { NewsItem } from '../../NewsItem/NewsItem';

export const NewsList = ({newsData}) => {
  return (
    newsData.map(news => <NewsItem key={news.id} {...news}/>)
  );
}
