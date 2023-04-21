import { Component } from 'react'
import Table from '../Table/Table'
import Loader from '../Loader/Loader'
import { IMainState, IMockData } from './IMain'

class Main extends Component<{}, IMainState> {
	constructor(props: any) {
		super(props)
		this.state = {
			isLoading: true,
			mockData: []
		}
	}

	componentWillMount() {
		this.getMockData()
	}

	getMockData = async () => {
		try {
			const res: Response = await fetch('http://localhost:5000/data')
			const data = await res.json()
			this.setState({ ...this.state, isLoading: false, mockData: data })
		} catch (e) {
			console.log(e)
		}
	}

	changeTotal = (idStore: number, idMonth: string, value: string | number) => {
		const data: IMockData[] = this.state.mockData.map(item => {
			if (item.store.id == idStore) {
				return {
					...item,
					months: item.months.map(month => {
						if (month.id == idMonth) {
							return { ...month, value: Number(value) }
						}
						return month
					})
				}
			}
			return item
		})
		this.setState({ ...this.state, mockData: data })
	}

	render() {
		const { isLoading, mockData } = this.state

		return (
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
				{isLoading ? (
					<Loader />
				) : (
					<Table changeTotal={this.changeTotal} mockData={mockData} />
				)}
			</div>
		)
	}
}

export default Main
