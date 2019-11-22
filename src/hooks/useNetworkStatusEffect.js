import React from 'react'

export default function useNetworkStatusEffect() {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine)
  React.useEffect(() => {
    const handleOnline = () => {
      console.log('Network connection is online')
      setIsOnline(true)
    }
    const handleOffline = () => {
      console.log('Network connection is offline')
      setIsOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return {
    isOnline,
  }
}
