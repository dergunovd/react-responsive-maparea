import * as React from 'react'
import { useEffect, useState } from 'react'
import { MapContext } from './Map.context'

interface MapProps
  extends React.DetailedHTMLProps<
    React.MapHTMLAttributes<HTMLMapElement>,
    HTMLMapElement
  > {
  imgRef: React.RefObject<HTMLImageElement>
}

export const Map: React.FC<MapProps> = ({ children, imgRef, ...props }) => {
  const [widthRatio, setWidthRatio] = useState(1)
  const [heightRatio, setHeightRatio] = useState(1)

  useEffect(() => {
    if (imgRef.current?.src) {
      setWidthRatio(imgRef.current.offsetWidth / imgRef.current.naturalWidth)
      setHeightRatio(imgRef.current.offsetHeight / imgRef.current.naturalHeight)
    }
  }, [imgRef.current, imgRef, imgRef.current?.offsetWidth])

  return (
    <map {...props}>
      <MapContext.Provider value={{ widthRatio, heightRatio }}>
        {children}
      </MapContext.Provider>
    </map>
  )
}
