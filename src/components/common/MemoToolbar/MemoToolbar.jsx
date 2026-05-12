import React from 'react'
import { NavMemoIcon, StarIcon, HandwritingIcon, HighlighterIcon, TrashIcon } from '../../../assets/icons'
import './MemoToolbar.scss'

const ACTIVE_COLOR   = '#F7BB0A'
const INACTIVE_COLOR = '#161615'

const TOOLS = [
  { id: 'write',       label: '글쓰기',   Icon: NavMemoIcon,      stroke: false },
  { id: 'bookmark',    label: '즐겨찾기',  Icon: StarIcon,         stroke: false },
  { id: 'handwriting', label: '손글씨',   Icon: HandwritingIcon,  stroke: true  },
  { id: 'highlight',   label: '형광펜',   Icon: HighlighterIcon,  stroke: true  },
  { id: 'trash',       label: '휴지통',   Icon: TrashIcon,        stroke: true  },
]

export default function MemoToolbar({ activeTool = 'write', onToolChange, bookmarked = false, onBookmark, onDelete }) {
  return (
    <div className="memo-toolbar">
      {TOOLS.map(({ id, label, Icon, stroke }) => {
        const isBookmark = id === 'bookmark'
        const isDelete   = id === 'trash'
        const isActive   = isBookmark ? bookmarked : activeTool === id
        const iconColor  = isActive ? ACTIVE_COLOR : INACTIVE_COLOR

        const handleClick = () => {
          if (isBookmark) onBookmark?.()
          else if (isDelete) onDelete?.()
          else onToolChange?.(id)
        }

        return (
          <button
            key={id}
            type="button"
            className={`memo-toolbar__btn${isActive ? ' memo-toolbar__btn--active' : ''}`}
            aria-label={label}
            onClick={handleClick}
          >
            <Icon
              size={id === 'write' || id === 'handwriting' ? 26 : 24}
              color={iconColor}
              {...(isBookmark ? { filled: bookmarked } : {})}
            />
            <span className="memo-toolbar__label">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
