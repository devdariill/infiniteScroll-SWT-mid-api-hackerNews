const DATE_UNITS: Record<string, number> = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
} as const

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getRelativeTime = (epochTime: number) => {
  const timeStart = new Date(epochTime * 1000).getTime()
  const now = new Date().getTime()
  const elapsed = (timeStart - now) / 1000 // in seconds elapsed
  for (const unit in DATE_UNITS) {
    const absElapsed = Math.abs(elapsed)
    if (absElapsed > DATE_UNITS[unit] || unit === 'second') {
      return rtf.format(
        Math.floor(elapsed / DATE_UNITS[unit]),
        unit as Intl.RelativeTimeFormatUnit
      ) // 90000/86400 = 1... 1 day ago
    }
  }
}
