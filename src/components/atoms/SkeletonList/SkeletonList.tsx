import styles from './SkeletonList.module.css'

interface SkeletonListProps {
  count?: number
  flow?: 'row' | 'column'
  hasTitle?: boolean
}

const SkeletonList = ({ hasTitle = true, count = 6, flow = 'row' }: SkeletonListProps) => {
  return (
    <div className={styles.wrapper}>
      {hasTitle && <div className={styles.title}></div>}
      <ul className={styles.list} style={{ flexDirection: flow }}>
        {new Array(count).fill(0).map((_, i) => (
          <li key={i} className={styles.card}></li>
        ))}
      </ul>
    </div>
  )
}

export default SkeletonList
