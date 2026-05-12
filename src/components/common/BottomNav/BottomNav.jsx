import React from 'react'
import { useNavigate } from 'react-router-dom'
import { mockBooks } from '../../../data/mockBooks'
import { ROUTES } from '../../../constants/routes'
import {
  NavMemoIcon,
  NavChatIcon,
  NavLibraryIcon,
  NavCharacterIcon,
  NavUserIcon,
} from '../../../assets/icons'
import './BottomNav.scss'

const NAV_ITEMS = [
  { id: 'memo',      label: '메모',      path: ROUTES.MEMO_EDIT, Icon: NavMemoIcon },
  { id: 'chat',      label: '가독이 챗',  path: ROUTES.CHAT,      Icon: NavChatIcon },
  { id: 'library',   label: '서재',      path: ROUTES.HOME,      Icon: NavLibraryIcon },
  { id: 'character', label: '캐릭터',    path: ROUTES.CHARACTER,  Icon: NavCharacterIcon },
  { id: 'mypage',    label: '마이',      path: ROUTES.MYPAGE,    Icon: NavUserIcon },
]

export default function BottomNav({ active = 'library' }) {
  const navigate = useNavigate()

  const handleNavigate = (item) => {
    if (item.id === 'memo') {
      navigate(item.path, { state: { bookId: mockBooks[0]?.id ?? 1 } })
      return
    }
    navigate(item.path)
  }

  return (
    <nav className="bottom-nav" aria-label="하단 내비게이션">
      {NAV_ITEMS.map(item => {
        const isActive = active === item.id
        const { Icon } = item
        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav__item${isActive ? ' bottom-nav__item--active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => handleNavigate(item)}
          >
            <span className="bottom-nav__icon-wrap" aria-hidden="true">
              <Icon />
            </span>
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
