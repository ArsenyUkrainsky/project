import { icons } from "@/types"




interface IIcon {
  name: icons
  width?: number
  height?: number
}

export default function Icon({ name, width = 26, height = 26 }: IIcon) {
  return (
    <img
      alt={name}
      aria-hidden='true'
      src={`/static/icons/${name}.svg`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}
