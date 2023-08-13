export const calcWindowHeight = (): {
  scrollY: number
  windowHeight: number
  documentHeight: number
} => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )

  return { scrollY, windowHeight, documentHeight }
}
