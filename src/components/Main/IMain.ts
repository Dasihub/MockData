type typeStore = {
	id: number
	name: string
}

export type typeMonths = {
	id: string
	name: string
	value: number
}

export interface IMockData {
	store: typeStore
	months: typeMonths[]
}

export interface IMainState {
	isLoading: boolean
	mockData: IMockData[]
}
