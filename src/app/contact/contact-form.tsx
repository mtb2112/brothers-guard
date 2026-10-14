'use client'

import {FormEvent, useState} from 'react'

type SubmissionState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<SubmissionState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('sending')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })
      const result: {error?: string} = await response.json()

      if (!response.ok) {
        setErrorMessage(result.error ?? 'Your message could not be sent. Please try again.')
        setState('error')
        return
      }

      form.reset()
      setState('sent')
    } catch {
      setErrorMessage('Your message could not be sent. Please try again.')
      setState('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-stone-300">
          Name
          <input name="name" required maxLength={100} autoComplete="name" className="border border-white/20 bg-white/5 px-4 py-3 font-normal normal-case tracking-normal text-white outline-none transition placeholder:text-stone-500 focus:border-[#c56729]" />
        </label>
        <label className="grid gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-stone-300">
          Email
          <input name="email" type="email" required maxLength={254} autoComplete="email" className="border border-white/20 bg-white/5 px-4 py-3 font-normal normal-case tracking-normal text-white outline-none transition placeholder:text-stone-500 focus:border-[#c56729]" />
        </label>
      </div>
      <label className="grid gap-2 font-montserrat text-xs font-bold uppercase tracking-[0.12em] text-stone-300">
        Message
        <textarea name="message" required maxLength={5000} rows={7} className="resize-y border border-white/20 bg-white/5 px-4 py-3 font-normal normal-case tracking-normal text-white outline-none transition placeholder:text-stone-500 focus:border-[#c56729]" />
      </label>
      <button type="submit" disabled={state === 'sending'} className="w-fit bg-[#c56729] px-7 py-4 font-montserrat text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#e08239] disabled:cursor-wait disabled:opacity-60">
        {state === 'sending' ? 'Sending...' : 'Send message'}
      </button>
      {state === 'sent' ? <p role="status" className="text-sm text-green-300">Thanks! Your message has been sent.</p> : null}
      {state === 'error' ? <p role="alert" className="text-sm text-red-300">{errorMessage}</p> : null}
    </form>
  )
}
