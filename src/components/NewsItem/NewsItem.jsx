import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NewsItem = ({ title, content, image, id, children }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/news/${id}`)
  }
  return (
    <div className='news__item' onClick={handleClick}>
      {children}
      <div className="news__img">
        <img src={image} alt={title} />
      </div>
      <h2 className="news__title">{title}</h2>
      <p className="news__content">{content}</p>
    </div>
  )
}
