import { useState, useEffect, useRef, useCallback } from 'react'
import { philosophers, wordMap, languages } from './data/quotes'
import './index.css'

/* ── 精简掌故 ── */
function shortStory(text) {
  if (!text) return ''
  if (text.length <= 120) return text
  const cut = text.indexOf('。', 100)
  return cut > 0 ? text.slice(0, cut + 1) : text.slice(0, 120) + '…'
}

/* ── 多语言文本获取 ── */
function t(text, lang) {
  if (typeof text === 'object' && text !== null) {
    return text[lang] || text.zh || text.en || ''
  }
  return text || ''
}

function App() {
  const containerRef = useRef(null)
  const itemsRef = useRef([])
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const timeRef = useRef(0)
  const highlightedRef = useRef(null)
  const wrapRef = useRef({ w: 0, h: 0 })

  const [displayItems, setDisplayItems] = useState([])
  const [ready, setReady] = useState(false)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [lang, setLang] = useState('zh')
  const [showLangMenu, setShowLangMenu] = useState(false)
  const [selectedWord, setSelectedWord] = useState(null)
  const [selectedQuote, setSelectedQuote] = useState(null)
  const [wordEnlightenedCounts, setWordEnlightenedCounts] = useState({})
  const [showPoster, setShowPoster] = useState(false)
  const [clickRipple, setClickRipple] = useState(null)

  /* ── 查找词对应的名言 ── */
  const findQuoteForWord = useCallback((word) => {
    if (wordMap.has(word)) {
      const ids = wordMap.get(word)
      const randomId = ids[Math.floor(Math.random() * ids.length)]
      return philosophers.find(p => p.id === randomId)
    }
    for (const p of philosophers) {
      if (p.keywords.some(kw => kw.includes(word) || word.includes(kw))) return p
      if (p.keywordsEn?.some(kw => kw.includes(word.toLowerCase()) || word.toLowerCase().includes(kw))) return p
      if (p.keywordsJa?.some(kw => kw.includes(word) || word.includes(kw))) return p
    }
    return philosophers[Math.floor(Math.random() * philosophers.length)]
  }, [])

  /* ── 初始化 ── */
  useEffect(() => {
    const init = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      if (rect.width < 100 || rect.height < 100) return
      const w = rect.width
      const h = rect.height
      setSize({ w, h })
      wrapRef.current = { w, h }

      const allWords = [...wordMap.keys()]
      const rows = Math.max(8, Math.ceil(Math.sqrt(allWords.length * 0.35)))
      const perRow = Math.ceil(allWords.length / rows)

      itemsRef.current = allWords.map((word, i) => {
        const row = Math.floor(i / perRow)
        const col = i % perRow
        const rowH = h / (rows + 1)
        const baseY = (row + 0.5) * rowH
        const spacing = w / perRow
        const baseX = (col + 0.5) * spacing

        return {
          word,
          baseSize: 12 + Math.random() * 10,
          baseX: baseX + (Math.random() - 0.5) * spacing * 0.3,
          baseY: baseY + (Math.random() - 0.5) * rowH * 0.15,
          driftSpeed: 0.8 + Math.random() * 2.0,
          wavePhase: Math.random() * Math.PI * 2,
          waveSpeed: 0.3 + Math.random() * 0.4,
          waveAmp: 3 + Math.random() * 6,
          microX: Math.random() * Math.PI * 2,
          microSpeed: 0.5 + Math.random() * 0.5,
          microAmp: 2 + Math.random() * 3,
          x: 0, y: 0, scale: 1, targetScale: 1, opacity: 0, targetOpacity: 0.4 + Math.random() * 0.3,
        }
      })
      setReady(true)
    }

    init()
    let timer
    const onResize = () => { clearTimeout(timer); timer = setTimeout(init, 200) }
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); clearTimeout(timer) }
  }, [])

  /* ── 鼠标 ── */
  const onMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }, [])

  const onLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 }
    highlightedRef.current = null
  }, [])

  /* ── 点击词 ── */
  const onWordClick = useCallback((word) => {
    setClickRipple({ word, id: Date.now() })
    setTimeout(() => setClickRipple(null), 500)

    const quote = findQuoteForWord(word)
    highlightedRef.current = word
    setSelectedWord(word)
    if (quote) setSelectedQuote(quote)
  }, [findQuoteForWord])

  const closeModal = useCallback(() => {
    setSelectedQuote(null)
    setSelectedWord(null)
    highlightedRef.current = null
  }, [])

  /* ── 我悟了 ── */
  const onEnlightened = useCallback(() => {
    if (!selectedWord) return
    setWordEnlightenedCounts(prev => {
      const next = { ...prev, [selectedWord]: (prev[selectedWord] || 0) + 1 }
      try { localStorage.setItem('meditations_word_counts', JSON.stringify(next)) } catch {}
      return next
    })
  }, [selectedWord])

  /* ── 动画循环 ── */
  useEffect(() => {
    if (!ready) return
    const lerp = (a, b, t) => a + (b - a) * t
    const { w, h } = wrapRef.current
    const hoverRadius = 90

    const loop = () => {
      const dt = 1 / 60
      timeRef.current += dt
      const t = timeRef.current
      const m = mouseRef.current
      const items = itemsRef.current

      let closestWord = null
      let closestDist = Infinity

      for (const it of items) {
        it.baseX += it.driftSpeed * dt * 60
        if (it.baseX > w + 60) it.baseX = -60

        const waveY = Math.sin(t * it.waveSpeed + it.wavePhase) * it.waveAmp
        const waveX = Math.cos(t * it.microSpeed + it.microX) * it.microAmp
        it.x = it.baseX + waveX
        it.y = it.baseY + waveY

        if (m.x > 0 && m.y > 0) {
          const dx = it.x - m.x
          const dy = it.y - m.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < hoverRadius && dist < closestDist) {
            closestDist = dist
            closestWord = it.word
          }
        }
      }

      if (closestWord) {
        highlightedRef.current = closestWord
      } else if (m.x < 0) {
        highlightedRef.current = null
      }

      const out = items.map(it => {
        const isHighlighted = highlightedRef.current === it.word
        if (isHighlighted) {
          it.targetScale = 1.8; it.targetOpacity = 1
        } else {
          it.targetScale = 1; it.targetOpacity = 0.4 + Math.random() * 0.01
        }
        it.scale = lerp(it.scale, it.targetScale, 0.12)
        it.opacity = lerp(it.opacity, it.targetOpacity, 0.06)
        const depthFade = 0.35 + 0.65 * Math.sin((it.y / h) * Math.PI)
        it.opacity *= depthFade

        return { word: it.word, x: it.x, y: it.y, scale: it.scale, opacity: it.opacity, size: it.baseSize * it.scale, isHighlighted }
      })

      out.sort((a, b) => a.y - b.y)
      setDisplayItems(out)
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [ready, size])

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('meditations_word_counts') || '{}')
      setWordEnlightenedCounts(data)
    } catch {}
  }, [])

  const currentLang = languages.find(l => l.code === lang) || languages[0]

  return (
    <div className="app">
      <div className="bg-athens" />
      <div className="door-frame-left" />
      <div className="door-frame-right" />

      {/* 门楣 */}
      <div className="door-lintel">
        <h1 className="lintel-title">沉思录</h1>
        <p className="lintel-subtitle">{t({ zh: '万物皆流 — 选一个词，遇见一位哲人', en: 'Panta Rhei — Pick a word, meet a philosopher', ja: '万物皆流 — 一つ词を選べば、一人の哲人と出会える', el: 'Πάντα ῥεῖ — Διάλεξε μια λέξη, γνώρισε έναν φιλόσοφο' }, lang)}</p>

        {/* 语言选择器 */}
        <div className="lang-selector">
          <button className="lang-btn" onClick={() => setShowLangMenu(!showLangMenu)}>
            {currentLang.label}
          </button>
          {showLangMenu && (
            <div className="lang-menu">
              {languages.filter(l => l.code !== lang).map(l => (
                <button key={l.code} className="lang-option" onClick={() => { setLang(l.code); setShowLangMenu(false) }}>
                  {l.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="main-content">
        <div
          ref={containerRef}
          className="cloud-container"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {clickRipple && (
            <span key={clickRipple.id} className="click-ripple" style={{
              left: displayItems.find(d => d.word === clickRipple.word)?.x || 0,
              top: displayItems.find(d => d.word === clickRipple.word)?.y || 0,
            }} />
          )}

          {displayItems.map((item, idx) => (
            <span
              key={`${item.word}-${idx}`}
              className={`word-tag ${ready ? 'visible' : ''} ${item.isHighlighted ? 'hl' : ''}`}
              style={{
                left: item.x, top: item.y, fontSize: item.size,
                transform: 'translate(-50%, -50%)',
                opacity: item.opacity,
                fontWeight: item.isHighlighted ? 700 : 400,
                zIndex: item.isHighlighted ? 9999 : Math.round(item.y),
                cursor: 'pointer',
              }}
              onClick={(e) => { e.stopPropagation(); onWordClick(item.word) }}
            >
              {item.word}
            </span>
          ))}
        </div>

        <footer className="app-footer">
          <div className="footer-ornament">⟡</div>
          <p>{t({ zh: '以哲思，照亮日常', en: 'Illuminating daily life with philosophy', ja: '哲学の光で日常を照らす', el: 'Φωτίζοντας την καθημερινή ζωή με φιλοσοφία' }, lang)}</p>
        </footer>
      </div>

      {/* 名言弹窗 */}
      {selectedQuote && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            {selectedWord && <div className="modal-word-badge">{selectedWord}</div>}
            <div className="modal-quote">"{t(selectedQuote.quote, lang)}"</div>
            <div className="modal-author">
              {t(selectedQuote.philosopher, lang)}
              <span className="modal-era"> · {t(selectedQuote.era, lang)}</span>
            </div>
            <div className="modal-section">
              <h3 className="section-title">{t({ zh: '掌故', en: 'Story', ja: '物語', el: 'Ιστορία' }, lang)}</h3>
              <p className="story-text">{shortStory(t(selectedQuote.story.scene, lang))}</p>
            </div>
            <div className="modal-section">
              <h3 className="section-title">{t({ zh: '省思', en: 'Reflection', ja: '省察', el: 'Στοχασμός' }, lang)}</h3>
              <p className="resonance-text">{t(selectedQuote.resonance, lang)}</p>
            </div>
            <div className="modal-actions">
              <button className="btn-enlightened" onClick={onEnlightened}>
                {t({ zh: '我悟了', en: 'Enlightened', ja: '悟った', el: 'Φωτίστηκα' }, lang)}
                <span className="enlightened-count">{wordEnlightenedCounts[selectedWord] || 0}</span>
              </button>
              <button className="btn-share" onClick={() => setShowPoster(true)}>
                {t({ zh: '转发', en: 'Share', ja: '共有', el: 'Κοινοποίηση' }, lang)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 海报 */}
      {showPoster && selectedQuote && (
        <div className="modal-overlay" onClick={() => setShowPoster(false)}>
          <div className="poster-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPoster(false)}>&times;</button>
            <div className="poster-inner">
              <div className="poster-word">{selectedWord}</div>
              <div className="poster-quote">"{t(selectedQuote.quote, lang)}"</div>
              <div className="poster-author">—— {t(selectedQuote.philosopher, lang)} · {t(selectedQuote.era, lang)}</div>
              <div className="poster-divider" />
              <div className="poster-reflection">{t(selectedQuote.resonance, lang).slice(0, 80)}{t(selectedQuote.resonance, lang).length > 80 ? '…' : ''}</div>
              <div className="poster-footer">沉思录 · {t({ zh: '万物皆流', en: 'Panta Rhei', ja: '万物皆流', el: 'Πάντα ῥεῖ' }, lang)}</div>
            </div>
            <button className="btn-copy-poster" onClick={() => {
              const text = `「${t(selectedQuote.quote, lang)}」\n\n—— ${t(selectedQuote.philosopher, lang)}\n\n—— 沉思录`
              navigator.clipboard.writeText(text)
              alert(t({ zh: '已复制，可直接粘贴到朋友圈或聊天', en: 'Copied! Paste it anywhere.', ja: 'コピー済み！どこにでも貼り付けてください。', el: 'Αντιγράφηκε! Επικολλήστε το οπουδήποτε.' }, lang))
            }}>{t({ zh: '复制文字', en: 'Copy Text', ja: 'テキストをコピー', el: 'Αντιγραφή' }, lang)}</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
