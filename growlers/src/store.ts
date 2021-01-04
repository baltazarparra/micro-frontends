import { proxy } from 'valtio'
import { Beverage } from './types'

export interface TapStore {
    taps: Beverage[]
    filteredTaps: Beverage[]
    cart: Beverage[]
    searchText: string
    alcoholLimit: number
}

const store = proxy<TapStore>({
    taps: [],
    searchText: '',
    alcoholLimit: 10,
    filteredTaps: [],
    cart: []
})

export default store