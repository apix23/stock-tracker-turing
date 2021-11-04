import React, { useEffect, useState } from 'react'
import './news.css'
import { fetchNews, NewsData } from '../../services/newsService'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const News: React.FC = () => {
  const [news, setNews] = useState<NewsData[] | undefined>([])

  useEffect(() => {
    let mounted = true

    setTimeout(() => {
      fetchNews().then((data) => {
        if (mounted) {
          setNews(data)
        }
      })
    }, 200)

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className='news-wrapper'>
      <h3 className='news-title'>Latest News</h3>
      {news &&
        news.map((element, i) => {
          return (
            <div className='news-container' key={i}>
              <div className='news-headline'>{element.headline}</div>
              <div className='news-date'>
                {dayjs(element.datetime).toNow(true)} ago - {element.source}
              </div>
            </div>
          )
        })}
    </div>
  )
}
