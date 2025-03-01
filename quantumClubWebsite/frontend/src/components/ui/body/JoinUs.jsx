'use client'
import React, { useState } from 'react'
import { useContext } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RotateCw } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext';  // Import your language context

const JoinUs = () => {

  const { language } = useLanguage();

  // Define translations for the text in the component
  const translations = {
    en: {
      become: 'Become a member',
      member: 'of our club!',
      count: 'Count me in!',
      join: 'Join Us',
      weSend: 'We will send you an email to complete your membership.',
      name: 'Name',
      nameSurname: 'Name Surname',
      send: 'Send',
      wait: 'Please wait',
    },
    tr: {
      become: 'Kulübümüze',
      member: 'katıl!',
      count: 'Varım!',
      join: 'Bize Katıl',
      weSend: 'Üyeliğini tamamlaman için sana bir mail göndereceğiz.',
      name: 'İsim',
      nameSurname: 'Ad Soyad',
      send: 'Gönder',
      wait: 'Lütfen bekleyiniz',
    },
  };

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()
      if (response.ok) {
        console.log('Success:', data)
        setOpen(false)
      } else {
        console.error('Error:', data)
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Request failed', err)
      setError('Could not connect to the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 rounded-lg border py-8 shadow lg:gap-8">
      <div className="flex flex-col text-center">
        <h1 className="text-center text-2xl font-semibold lg:text-3xl">
          {translations[language].become}
        </h1>
        <h1 className="text-center text-2xl font-semibold lg:text-3xl">
          {translations[language].member}
        </h1>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="px-24 lg:h-10 lg:w-[300px] lg:text-base lg:font-bold">
            {translations[language].count}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{translations[language].join}</DialogTitle>
            <DialogDescription>
              {translations[language].weSend}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  {translations[language].name}
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={translations[language].nameSurname}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="quantum@mail.com"
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              {error && <p className="text-red-500">{error}</p>}
              <Button
                type="submit"
                disabled={loading}
                className={loading ? 'hidden' : ''}
              >
                {translations[language].send}
              </Button>
              <Button disabled className={loading ? '' : 'hidden'}>
                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                {translations[language].wait}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default JoinUs
