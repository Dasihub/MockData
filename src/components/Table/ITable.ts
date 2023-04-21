import { IMockData } from '../Main/IMain'

export interface ITableProps {
	mockData: IMockData[]
	changeTotal: (idStore: number, idMonth: string, value: string | number) => void
}
