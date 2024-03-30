import styles from './Image.module.css'

interface IImageProps {
  alt: string
  backgroundSize?: 'cover' | 'contain'
  className?: string
  height?: number
  hiddenArea?: boolean
  lazy?: boolean
  rounded?: boolean
  src: string
  width?: number
}

export default function Image({
  alt,
  backgroundSize = 'cover',
  className,
  height,
  hiddenArea = false,
  lazy,
  rounded,
  src,
  width,
}: IImageProps) {
  const sizeStyle = {
    width: `${width ? `${width}px` : 'auto'}`,
    height: `${height ? `${height}px` : 'auto'}`,
  }
  return (
    <picture className={`${styles.picture} ${rounded ? styles.picture_rounded : ''}`}>
      <source srcSet={src} type='image/avif' />
      <source srcSet={src} type='image/webp' />
      <source srcSet={src} type='image/png' />
      <img
        alt={alt}
        aria-hidden={hiddenArea}
        className={`${styles.image} ${styles[`background-size_${backgroundSize}`]} ${className}`}
        decoding='async'
        loading={lazy ? 'lazy' : 'eager'}
        role='presentation'
        src={src}
        style={sizeStyle}
      />
    </picture>
  )
}
