/**
 * IdeaTone Icon Library
 * All UI icons as React SVG components.
 * Usage:  import { ChevronLeftIcon } from '../../assets/icons'
 *         or via <Icon name="chevron-left" size={24} />
 */

// ─── Navigation (BottomNav) ────────────────────────────────────────────────

export const NavMemoIcon = ({ size = 26, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...p}>
    <path
      d="M14.514 4.808a2.75 2.75 0 0 1 3.888-.001l2.493 2.49a2.75 2.75 0 0 1-.003 3.867L11.686 20.636a3.25 3.25 0 0 1-2.687 1.133H6.247a1.75 1.75 0 0 1-1.745-1.844l.118-2.81a3.25 3.25 0 0 1 .913-2.114L14.514 4.808ZM21.515 20.195h-6.121a.75.75 0 1 0 0 1.5h6.121a.75.75 0 0 0 0-1.5ZM6.276 15.181a2.25 2.25 0 0 0-.658 1.497l-.117 2.81a.25.25 0 0 0 .248.28H9a2.25 2.25 0 0 0 1.613-.675l6.53-6.7-4.293-4.293L6.276 15.18Zm11.065-9.315a1.25 1.25 0 0 0-1.769.001L13.91 7.531l4.28 4.28 1.654-1.694a1.25 1.25 0 0 0-.005-1.783l-2.493-2.49Z"
      fill={color}
    />
  </svg>
)

export const NavChatIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <g clipPath="url(#nav-chat-clip)">
      <path
        d="M12.855 1.827a1.25 1.25 0 0 0-1.71 0L9.48 3.386a3.25 3.25 0 0 1-2.2.74l-2.28-.075a1.25 1.25 0 0 0-1.274 1.274l-.075 2.28a3.25 3.25 0 0 1-.741 2.2L1.827 11.145a1.25 1.25 0 0 0 0 1.71l1.559 1.675a3.25 3.25 0 0 1 .74 2.2l-.075 2.28a1.25 1.25 0 0 0 1.274 1.274l2.28-.075a3.25 3.25 0 0 1 2.2.74l1.666 1.56a1.25 1.25 0 0 0 1.71 0l1.675-1.56a3.25 3.25 0 0 1 2.2-.74l2.28.075a1.25 1.25 0 0 0 1.274-1.274l.075-2.28a3.25 3.25 0 0 1 .74-2.2l1.56-1.675a1.25 1.25 0 0 0 0-1.71l-1.56-1.675a3.25 3.25 0 0 1-.74-2.2l-.075-2.28a1.25 1.25 0 0 0-1.274-1.274l-2.28.075a3.25 3.25 0 0 1-2.2-.74L12.855 1.827Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <ellipse cx="9" cy="10.5" rx="0.6" ry="1" stroke={color} />
      <ellipse cx="15" cy="10.5" rx="0.6" ry="1" stroke={color} />
    </g>
    <defs>
      <clipPath id="nav-chat-clip">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const NavLibraryIcon = ({ size = 26, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...p}>
    <path
      d="M13 6.117V20.99M13 6.117l1.1-.412c2.504-.939 5.297-.939 7.8 0 .665.249 1.1.853 1.1 1.524V19.08c0 .921-.993 1.552-1.905 1.209-1.987-.745-4.203-.745-6.19 0L13.014 21M13 6.117l-1.1-.412c-2.504-.939-5.297-.939-7.8 0C3.435 5.954 3 6.558 3 7.229V19.08c0 .921.992 1.552 1.905 1.209 1.987-.745 4.203-.745 6.19 0L12.986 21"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
)

export const NavCharacterIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="9.25" stroke={color} strokeWidth="1.5" />
    <path d="M9 15c2.347 1.254 3.707 1.222 6 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="11" r="0.5" fill={color} stroke={color} />
    <circle cx="15" cy="11" r="0.5" fill={color} stroke={color} />
  </svg>
)

export const NavUserIcon = ({ size = 26, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...p}>
    <circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 17 4)" stroke={color} strokeWidth="1.5" />
    <path
      d="M6 17.935c0-.86.54-1.628 1.351-1.917 3.653-1.305 7.645-1.305 11.298 0C19.46 16.307 20 17.074 20 17.935v1.315C20 20.438 18.948 21.35 17.773 21.182l-.955-.137a19.66 19.66 0 0 0-5.636 0l-.955.137C9.052 21.35 8 20.438 8 19.25v-1.315Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
)

// ─── Directional ──────────────────────────────────────────────────────────

export const ChevronLeftIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M15 18L9 12L15 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronRightIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M9 18L15 12L9 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowUpIcon = ({ size = 20, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 15V5M10 5L6 9M10 5L14 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Actions ──────────────────────────────────────────────────────────────

export const SearchIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...p}>
    <path
      d="M10.5 2.333a8.167 8.167 0 1 0 5.337 14.329l.527.497v1.508l7 7 2.333-2.334-7-7h-1.508l-.497-.527A8.167 8.167 0 0 0 10.5 2.333Zm0 2.333a5.833 5.833 0 1 1 0 11.667 5.833 5.833 0 0 1 0-11.667Z"
      fill={color}
    />
  </svg>
)

export const CheckIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 12L9 17L20 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const TrashIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
      stroke={color} strokeWidth="1.5" strokeLinecap="round"
    />
    <path
      d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
      stroke={color} strokeWidth="1.5" strokeLinecap="round"
    />
    <path d="M9.5 16.5L9.5 10.5M14.5 16.5L14.5 10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const PencilIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M13.5 4.5L19.5 10.5L8 22H2v-6L13.5 4.5ZM10 7l7 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ─── Memo Toolbar (Figma node 254-3276) ───────────────────────────────────

export const StarIcon = ({ size = 24, color = 'currentColor', filled = false, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
      fill={filled ? '#F9C93B' : 'none'}
      stroke="#141B34"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const HandwritingIcon = ({ size = 26, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none" {...p}>
    <path
      d="M7 23V14.6944C7 13.1287 7 12.3459 7.21454 11.6077C7.42908 10.8695 7.84589 10.2181 8.6795 8.91542L11.3359 4.76419C12.0885 3.58806 12.4648 3 13 3C13.5352 3 13.9115 3.58806 14.6641 4.76419L17.3205 8.91542C18.1541 10.2181 18.5709 10.8695 18.7855 11.6077C19 12.3459 19 13.1287 19 14.6944V23"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M8 12C8.63152 12.3231 9.4887 12.9732 10.2801 12.9991C11.2988 13.0324 11.9868 12.1372 13 12.1372C14.0132 12.1372 14.7012 13.0324 15.7199 12.9991C16.5113 12.9732 17.3685 12.3231 18 12"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M13 13L13 23" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 6H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const HighlighterIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M9.50122 9.64828L8.60933 10.5377C8.07366 11.0734 7.89158 11.8863 7.79924 12.6382C7.71531 13.3216 7.42742 14.2383 6.63537 15.252C6.29534 15.6872 6.28717 16.3166 6.6777 16.7071L8.79289 18.8223C9.18342 19.2128 9.81278 19.2047 10.248 18.8646C11.2617 18.0726 12.1784 17.7847 12.8618 17.7008C13.6137 17.6084 14.4266 17.4263 14.9623 16.8907L15.8517 15.9988M6.6777 16.7071L2.5 21H6.5L8.79289 18.8223M13.7353 4L9.50122 8.23407C9.1107 8.62459 9.1107 9.25776 9.50122 9.64828L15.8517 15.9988M15.8517 15.9988C16.2422 16.3893 16.8754 16.3893 17.2659 15.9988L21.5 11.7647"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
)

export const LibraryAddIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <path
      d="M12 5.5V19M12 5.5l-1-.37C8.8 4.32 6.4 4.32 4.2 5.13c-.6.22-1 .76-1 1.34v10.13c0 .77.8 1.28 1.5.99 1.8-.66 3.8-.66 5.6 0L12 18.22M12 5.5l1-.37c2.2-.81 4.6-.81 6.8 0 .6.22 1 .76 1 1.34v10.13c0 .77-.8 1.28-1.5.99-1.8-.66-3.8-.66-5.6 0L12 18.22"
      stroke={color} strokeWidth="1.5"
    />
    <path d="M19 21v-4M17 19h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// ─── Misc ─────────────────────────────────────────────────────────────────

export const ShareIcon = ({ size = 24, color = 'currentColor', ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="18" cy="5" r="3" stroke={color} strokeWidth="1.5" />
    <circle cx="6" cy="12" r="3" stroke={color} strokeWidth="1.5" />
    <circle cx="18" cy="19" r="3" stroke={color} strokeWidth="1.5" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" stroke={color} strokeWidth="1.5" />
  </svg>
)
