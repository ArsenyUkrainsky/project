import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from '@reduxjs/toolkit'
import Text from '@/components/atoms/Text'
import styles from './Notification.module.css'

interface NotificationProps {
  message: string | FetchBaseQueryError | SerializedError
  type: 'success' | 'error'
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  let errorMessage = ''
  if (type === 'error' && typeof message === 'object' && 'status' in message) {
    errorMessage = message.status.toString()
  } else if (type === 'error' && typeof message === 'object' && 'message' in message) {
    errorMessage = message.message as string
  } else if (typeof message === 'string') {
    errorMessage = message as string
  } else {
    errorMessage = 'Произошла ошибка'
  }

  return (
    <div className={styles.notification}>
      <Text family='manrope' size='medium' color={type === 'success' ? 'main' : 'red'}>
        {type === 'error' ? errorMessage : (String(message) as string)}
      </Text>
    </div>
  )
}
export default Notification
