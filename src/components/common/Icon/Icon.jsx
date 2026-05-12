import React from 'react'
import * as Icons from '../../../assets/icons'

const NAME_MAP = {
  'nav-memo':       'NavMemoIcon',
  'nav-chat':       'NavChatIcon',
  'nav-library':    'NavLibraryIcon',
  'nav-character':  'NavCharacterIcon',
  'nav-user':       'NavUserIcon',
  'chevron-left':   'ChevronLeftIcon',
  'chevron-right':  'ChevronRightIcon',
  'arrow-up':       'ArrowUpIcon',
  'search':         'SearchIcon',
  'check':          'CheckIcon',
  'trash':          'TrashIcon',
  'pencil':         'PencilIcon',
  'star':           'StarIcon',
  'handwriting':    'HandwritingIcon',
  'highlighter':    'HighlighterIcon',
  'library-add':    'LibraryAddIcon',
  'share':          'ShareIcon',
}

export default function Icon({ name, size, color, className, style, ...props }) {
  const key = NAME_MAP[name] ?? name
  const Comp = Icons[key]
  if (!Comp) return null
  return <Comp size={size} color={color} className={className} style={style} {...props} />
}
