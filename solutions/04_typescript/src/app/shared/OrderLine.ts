import { Product } from "./Product";

export type OrderLine = {
  quantity?: number
  productID?: number
  locationID?: string
  price?: number
  picked?: boolean
  product?: Product
  location?: Location
}
