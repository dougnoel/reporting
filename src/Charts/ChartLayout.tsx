import React from 'react'

type Props = {
  children: React.ReactNode
}

export const ChartLayout = (props: Props) => {
  return (
    <section className='bg-white border rounded-md shadow-md'>
      {props.children}
    </section>
  )
}
