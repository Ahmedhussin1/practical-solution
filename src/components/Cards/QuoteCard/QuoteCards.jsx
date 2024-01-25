import React from 'react'
import './QuoteCard.scss'
import QuoteCard from './QuoteCard'
function QuoteCards({cardData}) {
  return (
    <div>
        {{
            cardData.map((card,index)=>(
                <QuoteCard
                    key={index}
                    quoteTitle={card.quoteTitle}
                    quoteText={card.quoteText}
                    quoteAuthor={card.quoteAuthor}
                />
            ))
        }}
    </div>
  )
}

export default QuoteCards