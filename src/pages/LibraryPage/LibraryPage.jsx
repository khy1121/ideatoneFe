import React from 'react'
import { useNavigate } from 'react-router-dom'
import { mockBooks } from '../../data/mockBooks'
import BottomNav from '../../components/common/BottomNav/BottomNav'
import './LibraryPage.scss'

export default function LibraryPage() {
  const navigate = useNavigate()

  const rows = []
  for (let i = 0; i < mockBooks.length; i += 3) {
    rows.push(mockBooks.slice(i, i + 3))
  }

  return (
    <div className="library">
      <header className="library__header">
        <div className="library__title-wrap">
          <span className="library__title">서재</span>
        </div>
        <button className="library__search" aria-label="검색">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M10.5 2.33325C6.0035 2.33325 2.33334 6.00341 2.33334 10.4999C2.33334 14.9964 6.0035 18.6666 10.5 18.6666C12.5393 18.6666 14.4025 17.9059 15.8366 16.6614L16.3333 17.1581V18.6666L23.3333 25.6666L25.6667 23.3333L18.6667 16.3333H17.1582L16.6615 15.8365C17.906 14.4024 18.6667 12.5393 18.6667 10.4999C18.6667 6.00341 14.9965 2.33325 10.5 2.33325ZM10.5 4.66659C13.7355 4.66659 16.3333 7.26444 16.3333 10.4999C16.3333 13.7354 13.7355 16.3333 10.5 16.3333C7.26453 16.3333 4.66668 13.7354 4.66668 10.4999C4.66668 7.26444 7.26453 4.66659 10.5 4.66659Z" fill="#999"/>
          </svg>
        </button>
      </header>

      <div className="library__content">
        {rows.map((row, ri) => (
          <div key={ri}>
            <div className="library__row">
              {row.map(book => (
                <button
                  key={book.id}
                  className="library__book"
                  onClick={() => navigate(`/book/${book.id}`)}
                  aria-label={book.title}
                >
                  <img className="library__cover" src={book.cover} alt={book.title} />
                </button>
              ))}
            </div>
            <div className="library__divider" />
          </div>
        ))}
      </div>

      <BottomNav active="home" />
    </div>
  )
}
