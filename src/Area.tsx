import * as React from 'react'
import { useContext, useMemo } from 'react'
import { MapContext } from './Map.context'

type AreaProps = React.DetailedHTMLProps<
  React.AreaHTMLAttributes<HTMLAreaElement>,
  HTMLAreaElement
>

export const Area: React.FC<AreaProps> = ({ children, ...props }) => {
  const { widthRatio, heightRatio } = useContext(MapContext)

  const coords = useMemo(
    () =>
      props.coords
        ?.split(',')
        .map((c, index) =>
          Math.round(+c * (index % 2 ? heightRatio : widthRatio))
        )

        .join(','),
    [widthRatio, heightRatio, props.coords]
  )

  return (
    <area {...props} coords={coords}>
      {children}
    </area>
  )
}
