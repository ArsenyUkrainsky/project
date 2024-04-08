import Slider from 'react-slick'
import type { ReviewCardProps } from '@/types'
import { useGetCommentsQuery } from '@/store/api/apiSlice'
import Title from '@/components/atoms/Title'
import SkeletonList from '@/components/atoms/SkeletonList'
import Notification from '@/components/atoms/Notification'
import ReviewCard from '@/components/molecules/ReviewCard'
import styles from './ReviewsSection.module.css'

const settings = {
  arrows: false,
  className: styles.slider,
  dots: true,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 2.5,
  speed: 500,
  swipeToSlide: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        swipeToSlide: true,
      },
    },
  ],
}

export default function ReviewsSection() {
  const { data, isLoading, error } = useGetCommentsQuery({ limit: 6 })

  if (error) return <Notification message={error} type='error' />

  return isLoading ? (
    <SkeletonList count={3} />
  ) : (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Title level={3}>
          <span className={styles.title}>Customer</span> Say
        </Title>
      </div>
      <ul>
        <Slider {...settings}>
          {data?.map((review: ReviewCardProps) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Slider>
      </ul>
    </section>
  )
}
