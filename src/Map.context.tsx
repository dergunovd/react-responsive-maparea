import { createContext } from 'react'

interface IMapContext {
  widthRatio: number
  heightRatio: number
}
export const MapContext = createContext<IMapContext>({
  widthRatio: 1,
  heightRatio: 1
})
