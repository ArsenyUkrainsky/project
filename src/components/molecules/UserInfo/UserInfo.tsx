import type { UserInfoProps } from '@/types'
import Image from '@/components/atoms/Image'
import Text from '@/components/atoms/Text'
import styles from './UserInfo.module.css'

export default function UserInfo({ image, firstName, lastName }: UserInfoProps) {
  return (
    <div className={styles.block}>
      <Image src={image} alt={`${firstName} ${lastName}`} width={56} height={56} rounded />
      <div>
        <Text color='aGray' family='poppins'>
          Written By
        </Text>
        <Text family='poppins' size='xMedium' weight='semiBold'>
          {firstName} {lastName}
        </Text>
      </div>
    </div>
  )
}
