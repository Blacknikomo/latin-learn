import { useEffect, useState } from 'react';
import { LANGS, useLang, useT } from './i18n';
import { LESSONS } from './lessons';
import { Home } from './pages/Home';
import { LessonPage } from './pages/Lesson';
import { Review } from './pages/Review';
import { Practice, StressDrill } from './pages/Practice';
import { useMode } from './components/Latin';
import { SyncBadge } from './components/SyncBadge';

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const on = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHash();
  const { lang, setLang } = useLang();
  const { ui } = useT();
  const { mode, setMode } = useMode();

  let page = <Home />;
  const m = hash.match(/^#\/lesson\/(\d+)/);
  if (m) {
    const i = LESSONS.findIndex(l => l.id === Number(m[1]));
    if (i >= 0) page = <LessonPage key={LESSONS[i].id} lesson={LESSONS[i]} prev={LESSONS[i - 1]} next={LESSONS[i + 1]} />;
  } else if (hash.startsWith('#/review')) {
    page = <Review />;
  } else if (hash.startsWith('#/practice/stress')) {
    page = <StressDrill />;
  } else if (hash.startsWith('#/practice')) {
    page = <Practice />;
  }

  return (
    <>
      <nav className="top">
        <a href="#/" className="top__brand"><span className="top__logo" aria-hidden="true">L</span>{ui('appTitle')}</a>
        <a href="#/" className={'top__link' + (hash === '#/' ? ' is-on' : '')}>{ui('course')}</a>
        <a href="#/review" className={'top__link' + (hash.startsWith('#/review') ? ' is-on' : '')}>{ui('review')}</a>
        <a href="#/practice" className={'top__link' + (hash.startsWith('#/practice') ? ' is-on' : '')}>{ui('practice')}</a>
        <div className="top__tools">
          <SyncBadge />
          <div className="seg" role="group" aria-label={ui('pronunciation')}>
            <button className={mode === 'classical' ? 'is-on' : ''} onClick={() => setMode('classical')} title={ui('pronunciation')}>{ui('classical')}</button>
            <button className={mode === 'ecclesiastical' ? 'is-on' : ''} onClick={() => setMode('ecclesiastical')} title={ui('pronunciation')}>{ui('ecclesiastical')}</button>
          </div>
          <div className="seg" role="group" aria-label="Language">
            {LANGS.map(l => (
              <button key={l.code} className={lang === l.code ? 'is-on' : ''} onClick={() => setLang(l.code)}>{l.label}</button>
            ))}
          </div>
        </div>
      </nav>
      <main>{page}</main>
    </>
  );
}
