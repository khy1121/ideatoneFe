/*
 Utility: formatDate
 - Converts an ISO/string date into `YYYY-MM-DD`.
 - Returns empty string for invalid dates.
*/
export function formatDate(dateStr) {
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return ''
  return d.toISOString().slice(0, 10)
}
