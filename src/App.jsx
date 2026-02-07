import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState(null) // 'yes' | 'no' | null
  const cardRef = useRef(null)

  const handleNo = (e) => {
    // 마우스 올리면 도망
    const card = cardRef.current
    if (!card) return
    const cardRect = card.getBoundingClientRect()
    const btnWidth = 120
    const btnHeight = 48
    const padding = 20

    const x = padding + Math.random() * (cardRect.width - btnWidth - padding * 2)
    const y = padding + Math.random() * (cardRect.height - btnHeight - padding * 2)

    setNoPos({ x, y })
    setEscaped(true)
  }

  const [escaped, setEscaped] = useState(false)
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })

  if (answer === 'yes') {
    return (
      <div className="bg-white w-200 h-150 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-8 p-10">
        <h1 className="text-pink-500 text-3xl font-bold">감사해요🤩</h1>
        <img src={"https://media1.tenor.com/m/RiZpodi6JD0AAAAC/fast-cat-cat-excited.gif"} alt="yippee" className="w-50 h-50" />
      </div>
    )
  }

  

  return (
    <>
      <div ref={cardRef} className="bg-white w-200 h-150 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-8 p-10 relative overflow-hidden">
        <h1 className="text-3xl font-bold text-pink-500 drop-shadow-sm">
          나랑 발렌타인데이 보낼래? 😋
        </h1>

        <div className="flex flex-row items-center justify-center gap-50">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-none"
            onClick={() => setAnswer('yes')}
          >
            YES
          </button>
          {escaped && (
            <span className="invisible text-lg font-semibold px-8 py-3">NO</span>
          )}
          <button
            className="bg-gray-300 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg cursor-pointer border-none transition-all duration-300"
            style={escaped ? { position: 'absolute', left: noPos.x, top: noPos.y } : {}}
            onMouseEnter={handleNo}
          >
            NO
          </button>
        </div>
      </div>
    </>
  )
}

export default App
