import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockBooks } from '../../data/mockBooks'
import { ChevronLeftIcon, SearchIcon } from '../../assets/icons'
import './SearchPage.scss'

const CHOSUNG = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ']
const CHOSUNG_SET = new Set(CHOSUNG)

const norm = (str) => str.replace(/\s/g, '')

function extractChosung(str) {
  return [...str].map(ch => {
    const code = ch.charCodeAt(0)
    if (code >= 0xAC00 && code <= 0xD7A3) return CHOSUNG[Math.floor((code - 0xAC00) / 588)]
    return ch
  }).join('')
}

function isAllChosung(str) {
  return str.length > 0 && [...str].every(ch => CHOSUNG_SET.has(ch))
}

function filterBooks(rawQuery) {
  const q = norm(rawQuery)
  if (!q) return null

  const useChosung = isAllChosung(q)
  const startsWith = []
  const contains = []

  mockBooks.forEach(book => {
    const title = norm(book.title)
    const target = useChosung ? extractChosung(title) : title

    if (target.startsWith(q)) {
      startsWith.push(book)
    } else if (target.includes(q)) {
      contains.push(book)
    }
  })

  return [...startsWith, ...contains]
}

export default function SearchPage() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleChange = (e) => {
    const val = e.target.value
    setQuery(val)
    setResults(filterBooks(val))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="search-page">
      <div className="search-page__header">
        <button className="search-page__back" onClick={() => navigate(-1)} aria-label="뒤로">
          <ChevronLeftIcon size={24} color="#000" />
        </button>
        <form className="search-page__form" onSubmit={handleSubmit}>
          <div className="search-page__input-wrap">
            <span className="search-page__input-icon" aria-hidden="true">
              <SearchIcon size={18} color="#999" />
            </span>
            <input
              ref={inputRef}
              className="search-page__input"
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="책 제목으로 검색"
              enterKeyHint="search"
            />
          </div>
        </form>
      </div>

      {results !== null && (
        <div className="search-page__results">
          {results.length === 0 ? (
            <p className="search-page__empty">검색 결과가 없습니다.</p>
          ) : (
            results.map((book, idx) => (
              <button
                key={book.id}
                className={`search-page__item${idx === results.length - 1 ? ' search-page__item--last' : ''}`}
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <img
                  className="search-page__cover"
                  src={book.cover}
                  alt={book.title}
                />
                <div className="search-page__info">
                  <p className="search-page__book-title">{book.title}</p>
                  <p className="search-page__meta">{book.publisher} · {book.publishYear}</p>
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
