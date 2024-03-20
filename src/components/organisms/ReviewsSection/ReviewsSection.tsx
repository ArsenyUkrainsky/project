import Slider from 'react-slick'
import Title from '@/components/atoms/Title'
import ReviewCard from '@/components/molecules/ReviewCard'
import styles from './ReviewsSection.module.css'
import { useGetCommentsQuery } from '@/store/api/apiSlice'
import { ReviewCardProps } from '@/types'

const settings = {
  arrows: false,
  className: styles.slider,
  dots: true,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 2.5,
  speed: 500,
  swipeToSlide: true,
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
        slidesToShow: 1,
      },
    },
  ],
}

export default function ReviewsSection() {
  const { data, isLoading } = useGetCommentsQuery({ limit: 6 })

  return (
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
