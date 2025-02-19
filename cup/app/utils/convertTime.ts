
export const convertTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    return formattedDate
}