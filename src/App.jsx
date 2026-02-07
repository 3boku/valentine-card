import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-white w-200 h-150 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-8 p-10">
        <h1 className="text-3xl font-bold text-pink-500 drop-shadow-sm">
          나랑 발렌타인데이 보낼래? 😋
        </h1>

        <div className="flex flex-row items-center justify-center gap-50">
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-none">
            YES
          </button>
          <button className="bg-gray-300 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer border-none">
            NO
          </button>
        </div>
      </div>
    </>
  )
}

export default App
