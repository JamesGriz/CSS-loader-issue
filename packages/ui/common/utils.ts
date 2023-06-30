export function getPaddingOptionsClass(
  paddingOptions: string[],
  operator: string,
): string {
  const [top, bottom, left, right] = paddingOptions

  const classes: string[] = []

  if (top === bottom && bottom === right && right === left) {
    classes.push(`${operator}-${top}`)
  } else {
    if (top !== bottom) {
      classes.push(
        top && `${operator}t-${top}`,
        bottom && `${operator}b-${bottom}`,
      )
    } else {
      classes.push(top && `${operator}y-${top}`)
    }

    if (left !== right) {
      classes.push(
        left && `${operator}l-${left}`,
        right && `${operator}r-${right}`,
      )
    } else {
      classes.push(left && `${operator}x-${left}`)
    }
  }

  return classes.filter((c) => !!c).join(' ')
}

export const getYoutubeIdfromUrl = (url: string): string | undefined => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = regExp.exec(url)
  if (match && match[2].length === 11) {
    return match[2]
  }

  return undefined
}
