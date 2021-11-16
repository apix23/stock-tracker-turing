import React, { useEffect, useState } from 'react'
import './news.css'
import { fetchNews, NewsData } from '../../services/newsService'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

interface NewsProps {
  stockSymbol: string
}

export const News: React.FC<NewsProps> = ({ stockSymbol }) => {
  const [news, setNews] = useState<NewsData[] | undefined>([])

  useEffect(() => {
    let mounted = true

    setTimeout(() => {
      fetchNews(stockSymbol).then((data) => {
        if (mounted) {
          setNews(data)
        }
      })
    }, 200)

    return () => {
      mounted = false
    }
  }, [stockSymbol])

  return (
    <div className='news-wrapper'>
      <h3 className='news-title'>Latest News</h3>
      {news ? (
        news.map((element, i) => {
          return (
            <>
              <div className='news-container' key={i}>
                <div className='news-headline'>
                  <a href={element.url}>{element.headline}</a>
                </div>
                <div className='news-date' data-testid='days-ago'>
                  {dayjs(element.datetime).toNow(true)} ago - {element.source}
                </div>
              </div>
              <div className='lines'></div>
            </>
          )
        })
      ) : (
        <div className='news-container'>Error fetching news</div>
      )}
    </div>
  )
}
