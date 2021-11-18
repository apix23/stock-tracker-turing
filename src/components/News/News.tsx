import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import NewsError from './NewsError'
import NewsLoading from './NewsLoading'
import useFetchNewsData from '../../hooks/useFetchNewsData'
import './news.css'

dayjs.extend(relativeTime)

interface NewsProps {
  stockSymbol?: string
}

export const News: React.FC<NewsProps> = ({ stockSymbol }) => {
  const token = '?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504'
  const newsURL = `https://sandbox.iexapis.com/stable/stock/${stockSymbol}/news/last/3${token}`

  const [news, error] = useFetchNewsData(newsURL)

  if (!news) {
    return <NewsLoading />
  }

  if (error) {
    return <NewsError />
  }

  return (
    <div className='news-wrapper'>
      <h3 className='news-title'>Latest News</h3>
      {news.map((element, i) => {
        return (
          <div key={i}>
            <div className='news-container'>
              <div className='news-headline'>
                <a href={element.url} target='_blank' rel='noreferrer'>
                  {element.headline}
                </a>
              </div>
              <div className='news-date' data-testid='days-ago'>
                {dayjs(element.datetime).toNow(true)} ago - {element.source}
              </div>
            </div>
            <div className='lines' key={i}></div>
          </div>
        )
      })}
    </div>
  )
}
