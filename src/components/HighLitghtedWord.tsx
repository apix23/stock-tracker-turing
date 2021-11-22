import React, { FC } from 'react'
import { highlightMatch } from '../utils/highLightMatch'

interface HighlightedWordProps {
  word: string
  searchToCompare: string
}

const HighLitghtedWord: FC<HighlightedWordProps> = ({ word, searchToCompare }) => {
  const [strongText, normalText] = highlightMatch(word, searchToCompare)

  return (
    <span>
      <strong className='black'>{strongText}</strong>
      {normalText}{' '}
    </span>
  )
}

export default HighLitghtedWord
