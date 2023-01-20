import React from 'react'

interface IHelpCardProps {
  title: string
  description: string
  buttonText: string
}

export default function HelpCard({
  title,
  description,
  buttonText,
}: IHelpCardProps): JSX.Element {
  return (
    <div>
      <div className='flex flex-col p-4 text-white bg-blue-500 rounded-lg pt-5 text-opacity-0 dark:bg-blue-500 gradienta'>
        <h1 className='text-lg text-center font-bold'>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
