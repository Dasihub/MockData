import { FC } from 'react'
import { ITableProps } from './ITable'
import styles from './styles.module.less'
import { IMockData, typeMonths } from '../Main/IMain'
import MonthRender from './MonthRender'

const totalStore = (arr: typeMonths[]): number => {
	let totalSum: number = 0

	for (let i = 0; i < arr.length; i++) {
		totalSum += arr[i].value
	}

	return totalSum
}

const totalMonth = (arr: IMockData[]): number[] => {
	const totals: number[] = []

	for (let i = 0; i < 12; i++) {
		let totalSum = 0

		for (let j = 0; j < arr.length; j++) {
			totalSum += arr[j].months[i].value
		}
		totals.push(totalSum)
	}

	return totals
}

const everyThingTotal = (arr: IMockData[]): number => {
	let total: number = 0

	for (let i = 0; i < arr.length; i++) {
		const months: typeMonths[] = arr[i].months

		for (let j = 0; j < months.length; j++) {
			total += months[j].value
		}
	}

	return total
}

const Table: FC<ITableProps> = ({ mockData, changeTotal }) => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>#</th>
					<th>Январь</th>
					<th>Февраль</th>
					<th>Март</th>
					<th>Апрель</th>
					<th>Май</th>
					<th>Июнь</th>
					<th>Июль</th>
					<th>Август</th>
					<th>Сентябрь</th>
					<th>Октябрь</th>
					<th>Ноябрь</th>
					<th>Декабрь</th>
					<th style={{ color: 'red' }}>Итого</th>
				</tr>
			</thead>
			<tbody>
				{mockData.map(item => (
					<tr key={item.store.id}>
						<td>{item.store.name}</td>
						{item.months.map(i => (
							<MonthRender
								idStore={item.store.id}
								idMonth={i.id}
								changeTotal={changeTotal}
								key={i.id}
								value={i.value}
							/>
						))}
						<td>{totalStore(item.months)}</td>
					</tr>
				))}
				<tr style={{ color: 'red' }}>
					<td>Итого</td>
					{totalMonth(mockData).map((item, index) => (
						<td key={index}>{item}</td>
					))}
					<th>{everyThingTotal(mockData)}</th>
				</tr>
			</tbody>
		</table>
	)
}

export default Table
