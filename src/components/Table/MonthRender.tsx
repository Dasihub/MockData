import { ChangeEvent, FC, useState, KeyboardEvent } from 'react'
import styles from './styles.module.less'

export interface IMonthRenderProps {
	value: number
	idStore: number
	idMonth: string
	changeTotal: (idStore: number, idMonth: string, value: string | number) => void
}

const MonthRender: FC<IMonthRenderProps> = ({ value, changeTotal, idMonth, idStore }) => {
	const [v, setV] = useState<string>(value.toString())

	const change = (e: ChangeEvent<HTMLInputElement>) => {
		const value_ = e.target.value

		if (Number(value_) < 0) {
			return
		}

		setV(value_)
		// changeTotal(idStore, idMonth, value_)  //Вот этот код
	}

	const blur = () => changeTotal(idStore, idMonth, v)

	const enter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key == 'Enter') {
			changeTotal(idStore, idMonth, v)
		}
	}

	return (
		<td>
			<input
				type='number'
				value={v}
				onChange={change}
				onKeyDown={enter}
				onBlur={blur}
				defaultValue={value}
				className={styles.input}
			/>
		</td>
	)
}

export default MonthRender
