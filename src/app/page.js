'use client'

import { useChat } from 'ai/react'

export default function SloganGenerator() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <div className="whitespace-pre-wrap my-6">
        {messages.map((message, index) => (
          <div key={index}>
            <span className="font-bold">{message.role}: </span>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
          value={input}
          name="prompt"
          id="prompt"
          placeholder="Dile al project manager el problema..."
          onChange={handleInputChange}
          autoFocus
        />
      </form>
    </div>
  )
}
