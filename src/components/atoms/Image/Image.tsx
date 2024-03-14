import styles from './Image.module.css'

interface IImageProps {
  alt: string
  backgroundSize?: 'cover' | 'contain'
  className?: string
  height?: number
  hiddenArea?: boolean
  lazy?: boolean
  src: string
  width?: number
}

export default function Image({
  alt,
  backgroundSize,
  className,
  height,
  hiddenArea = false,
  lazy,
  src,
  width,
}: IImageProps) {
  return (
    <picture>
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
        style={{ width: `${width ? `${width}px` : 'auto'}`, height: `${height ? `${height}px` : 'auto'}` }}
      />
    </picture>
  )
}
