import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashPage from '../pages/SplashPage/SplashPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import NicknamePage from '../pages/NicknamePage/NicknamePage'
import LibraryPage from '../pages/LibraryPage/LibraryPage'
import BookDetailPage from '../pages/BookDetailPage/BookDetailPage'
import MemoEditPage from '../pages/MemoEditPage/MemoEditPage'
import AnalyzePage from '../pages/AnalyzePage/AnalyzePage'
import ResultPage from '../pages/ResultPage/ResultPage'
import MyPage from '../pages/MyPage/MyPage'
import { ROUTES } from '../constants/routes'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<SplashPage />} />
        <Route path={ROUTES.HOME} element={<LibraryPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
        <Route path={ROUTES.NICKNAME} element={<NicknamePage />} />
        <Route path={ROUTES.BOOK_DETAIL} element={<BookDetailPage />} />
        <Route path={ROUTES.MEMO_EDIT} element={<MemoEditPage />} />
        <Route path={ROUTES.ANALYZE} element={<AnalyzePage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
        <Route path={ROUTES.MYPAGE} element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  )
}
