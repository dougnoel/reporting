export type Bug = {
  name: string
  open?: boolean
  date: number
}

export const getBugs = async () => {
  const data = await [
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: false, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: true, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: true, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: true, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: true, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: true, date: new Date(2021, 2, 2).getTime() },
    { name: 'Fuck', open: true, date: new Date(2021, 2, 2).getTime() },
  ]

  return data
}
