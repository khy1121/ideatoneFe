import React, { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { mockBooks } from '../../data/mockBooks'
import { ROUTES } from '../../constants/routes'
import './BookDetailPage.scss'

const TABS = [
  { id: 'info', label: '책 정보' },
  { id: 'chat', label: '가독이챗' },
  { id: 'memo', label: '메모' },
]

const STATUS_OPTIONS = ['다 읽은 책', '읽고 있는 책', '찜한 책']

// "YYYY.MM.DD" → "YYYY-MM-DD" (input[type=date] value format)
const toInputDate = (str) => (str ? str.replace(/\./g, '-') : '')
// "YYYY-MM-DD" → "YYYY.MM.DD" (display format)
const toDisplayDate = (str) => (str ? str.replace(/-/g, '.') : '20xx. xx. xx')

function loadBookInfo(bookId, book) {
  const saved = JSON.parse(localStorage.getItem(`bookInfo_${bookId}`) || 'null')
  return saved ?? { status: book.status, startDate: book.startDate || '', endDate: book.endDate || '' }
}

function saveBookInfo(bookId, info) {
  localStorage.setItem(`bookInfo_${bookId}`, JSON.stringify(info))
}

function loadMemos(bookId, seedMemos) {
  const saved = JSON.parse(localStorage.getItem(`memos_${bookId}`) || 'null')
  return saved ?? seedMemos
}

function saveMemos(bookId, memos) {
  localStorage.setItem(`memos_${bookId}`, JSON.stringify(memos))
}

const IconTrash = () => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
    <path d="M6.75 0L5.625 1.1H0V3.3H1.125V19.8C1.125 20.3744 1.34025 20.9601 1.7644 21.3748C2.18856 21.7895 2.7875 22 3.375 22H14.625C15.2125 22 15.8114 21.7895 16.2356 21.3748C16.6598 20.9601 16.875 20.3744 16.875 19.8V3.3H18V1.1H12.375L11.25 0H6.75ZM3.375 3.3H14.625V19.8H3.375V3.3ZM5.625 5.5V17.6H7.875V5.5H5.625ZM10.125 5.5V17.6H12.375V5.5H10.125Z" fill="#999"/>
  </svg>
)

const IconPencil = () => (
  <svg width="21" height="14" viewBox="0 0 21 14" fill="none">
    <path d="M10.9534 11.0194L18.9477 3.21496L17.7068 2.00352L9.7125 9.80795L10.9534 11.0194ZM4.725 13.0462C3.13409 12.9685 1.94886 12.6424 1.16932 12.0677C0.389773 11.4931 0 10.6622 0 9.57498C0 8.56545 0.425568 7.74618 1.2767 7.11717C2.12784 6.48816 3.30909 6.11152 4.82045 5.98728C5.44091 5.94068 5.90625 5.84361 6.21648 5.69607C6.5267 5.54852 6.68182 5.34273 6.68182 5.0787C6.68182 4.67489 6.44716 4.37203 5.97784 4.17013C5.50852 3.96822 4.73295 3.82067 3.65114 3.72749L3.81818 1.86374C5.45682 1.98799 6.66193 2.31027 7.43352 2.83056C8.20511 3.35086 8.59091 4.10023 8.59091 5.0787C8.59091 5.90185 8.28466 6.5464 7.67216 7.01233C7.05966 7.47827 6.15682 7.75783 4.96364 7.85102C3.94545 7.92867 3.18182 8.11117 2.67273 8.39849C2.16364 8.68582 1.90909 9.07798 1.90909 9.57498C1.90909 10.1186 2.13182 10.5107 2.57727 10.7515C3.02273 10.9922 3.77045 11.1359 4.82045 11.1825L4.725 13.0462ZM11.4068 13.2093L7.46932 9.36531L16.5852 0.465936C16.9034 0.155312 17.2812 0 17.7188 0C18.1562 0 18.5341 0.155312 18.8523 0.465936L20.5227 2.09671C20.8409 2.40734 21 2.7762 21 3.20331C21 3.63042 20.8409 3.99928 20.5227 4.30991L11.4068 13.2093ZM7.6125 13.9781C7.34205 14.0402 7.10341 13.9703 6.89659 13.7684C6.68977 13.5665 6.61818 13.3335 6.68182 13.0695L7.46932 9.36531L11.4068 13.2093L7.6125 13.9781Z" fill="#999"/>
  </svg>
)

export default function BookDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const book = mockBooks.find(b => b.id === Number(id))

  const [bookInfo, setBookInfo] = useState(() => loadBookInfo(Number(id), book ?? {}))
  const [activeTab, setActiveTab] = useState(location.state?.tab ?? 'info')
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditSheet, setShowEditSheet] = useState(false)
  const [deleteMemoId, setDeleteMemoId] = useState(null)
  const [memos, setMemos] = useState(() => loadMemos(Number(id), book?.memos ?? []))

  // 수정 시트 임시값 (시트 열 때 현재 bookInfo로 초기화)
  const [editStatus, setEditStatus] = useState(bookInfo.status)
  const [editStart, setEditStart] = useState(toInputDate(bookInfo.startDate))
  const [editEnd, setEditEnd] = useState(toInputDate(bookInfo.endDate))

  if (!book) {
    return (
      <div className="book-detail">
        <p style={{ textAlign: 'center', padding: '40px' }}>책을 찾을 수 없습니다.</p>
      </div>
    )
  }

  const openEditSheet = () => {
    setEditStatus(bookInfo.status)
    setEditStart(toInputDate(bookInfo.startDate))
    setEditEnd(toInputDate(bookInfo.endDate))
    setShowEditSheet(true)
  }

  const handleSaveEdit = () => {
    const updated = {
      status: editStatus,
      startDate: toDisplayDate(editStart),
      endDate: toDisplayDate(editEnd),
    }
    setBookInfo(updated)
    saveBookInfo(book.id, updated)
    setShowEditSheet(false)
  }

  const handleDeleteMemo = (memoId) => {
    const updated = memos.filter(m => m.id !== memoId)
    setMemos(updated)
    saveMemos(book.id, updated)
    setDeleteMemoId(null)
  }

  return (
    <div className="book-detail">

      {/* 책 삭제 확인 모달 */}
      {showDeleteModal && (
        <div className="book-detail__overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="delete-modal" onClick={e => e.stopPropagation()}>
            <p className="delete-modal__title">내 서재에서 제거</p>
            <p className="delete-modal__desc">삭제 시 복구할 수 없습니다.<br />정말 삭제할까요?</p>
            <div className="delete-modal__line" />
            <div className="delete-modal__actions">
              <button className="delete-modal__btn" onClick={() => setShowDeleteModal(false)}>취소</button>
              <div className="delete-modal__vline" />
              <button className="delete-modal__btn" onClick={() => navigate(ROUTES.HOME)}>확인</button>
            </div>
          </div>
        </div>
      )}

      {/* 메모 삭제 확인 모달 */}
      {deleteMemoId !== null && (
        <div className="book-detail__overlay" onClick={() => setDeleteMemoId(null)}>
          <div className="delete-modal" onClick={e => e.stopPropagation()}>
            <p className="delete-modal__title">메모 삭제</p>
            <p className="delete-modal__desc">삭제 시 복구할 수 없습니다.<br />정말 삭제할까요?</p>
            <div className="delete-modal__line" />
            <div className="delete-modal__actions">
              <button className="delete-modal__btn" onClick={() => setDeleteMemoId(null)}>취소</button>
              <div className="delete-modal__vline" />
              <button className="delete-modal__btn" onClick={() => handleDeleteMemo(deleteMemoId)}>확인</button>
            </div>
          </div>
        </div>
      )}

      {/* 수정 바텀 시트 */}
      {showEditSheet && (
        <div className="book-detail__overlay" onClick={() => setShowEditSheet(false)}>
          <div className="edit-sheet" onClick={e => e.stopPropagation()}>
            <div className="edit-sheet__header">
              <button className="edit-sheet__close" onClick={() => setShowEditSheet(false)}>X</button>
              <span className="edit-sheet__title">어떤 책인가요?</span>
            </div>

            <div className="edit-sheet__section">
              <p className="edit-sheet__label">독서 상태</p>
              <div className="edit-sheet__status-row">
                {STATUS_OPTIONS.map(s => (
                  <button
                    key={s}
                    className={`edit-sheet__status-btn${editStatus === s ? ' edit-sheet__status-btn--active' : ''}`}
                    onClick={() => setEditStatus(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="edit-sheet__section">
              <p className="edit-sheet__label">독서 기간</p>
              <div className="edit-sheet__dates">
                <div className="edit-sheet__date-group">
                  <p className="edit-sheet__date-label">시작일</p>
                  <input
                    className="edit-sheet__date-input"
                    type="date"
                    value={editStart}
                    onChange={e => setEditStart(e.target.value)}
                  />
                </div>
                <div className="edit-sheet__date-group">
                  <p className="edit-sheet__date-label">종료일</p>
                  <input
                    className="edit-sheet__date-input"
                    type="date"
                    value={editEnd}
                    onChange={e => setEditEnd(e.target.value)}
                    min={editStart}
                  />
                </div>
              </div>
            </div>

            <button className="edit-sheet__save" onClick={handleSaveEdit}>수정하기</button>
          </div>
        </div>
      )}

      {/* 헤더 */}
      <div className="book-detail__header">
        <div className="book-detail__header-actions">
          <button className="book-detail__action-btn" onClick={openEditSheet}>수정</button>
          <span className="book-detail__action-sep"> ㅣ </span>
          <button className="book-detail__action-btn" onClick={() => setShowDeleteModal(true)}>삭제</button>
        </div>
      </div>

      {/* 책 정보 상단 */}
      <div className="book-detail__top">
        <h2 className="book-detail__title">{book.title}</h2>
        <img className="book-detail__cover" src={book.cover} alt={book.title} />
        <p className="book-detail__author">{book.author}</p>
        <div className="book-detail__status-badge">{bookInfo.status}</div>
        <div className="book-detail__period">
          <span className="book-detail__period-label">독서 기간</span>
          <div className="book-detail__period-dates">
            <span>시작 ｜ {bookInfo.startDate || '20xx. xx. xx'}</span>
            <span>종료 ｜ {bookInfo.endDate || '20xx. xx. xx'}</span>
          </div>
        </div>
      </div>

      {/* 탭 바 */}
      <div className="book-detail__tab-bar">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`book-detail__tab${activeTab === tab.id ? ' book-detail__tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      <div className="book-detail__content">
        {activeTab === 'info' && (
          <div className="book-info">
            <div className="book-info__row"><span className="book-info__key">책 소개</span><span className="book-info__val">{book.description}</span></div>
            <div className="book-info__row"><span className="book-info__key">출판사</span><span className="book-info__val">{book.publisher}</span></div>
            <div className="book-info__row"><span className="book-info__key">ISBN</span><span className="book-info__val">{book.isbn}</span></div>
            <div className="book-info__row"><span className="book-info__key">페이지</span><span className="book-info__val">{book.pages}p</span></div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="book-chat">
            <button className="book-chat__btn">가독이챗 하러 가기</button>
          </div>
        )}

        {activeTab === 'memo' && (
          <div className="book-memo">
            <div className="book-memo__toolbar">
              <button
                className="book-memo__write-btn"
                onClick={() => navigate(ROUTES.MEMO_EDIT, { state: { bookId: book.id } })}
              >
                <IconPencil />
                <span>작성하기</span>
              </button>
            </div>
            {memos.length === 0 ? (
              <p className="book-memo__empty">아직 작성한 메모가 없어요.</p>
            ) : (
              <div className="book-memo__list">
                {memos.map(memo => (
                  <div key={memo.id} className="memo-card">
                    <div className="memo-card__top">
                      <p className="memo-card__content">{memo.content}</p>
                      <button className="memo-card__delete" onClick={() => setDeleteMemoId(memo.id)}>
                        <IconTrash />
                      </button>
                    </div>
                    <p className="memo-card__date">{memo.date}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
