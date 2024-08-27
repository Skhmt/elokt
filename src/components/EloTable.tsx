
import DataTable from 'datatables.net-react'
import DT from 'datatables.net-dt'
import { useAtom } from 'jotai'
import { eloData } from '../store/store'
import supabase from '../lib/supabase'
import './EloTable.css'

// https://datatables.net/blog/2024/react
DataTable.use(DT)

let startedFetch = false

const pageLength = 25

async function fetchData() {
	startedFetch = true

	const [, setTableData] = useAtom(eloData) // eslint-disable-line

	const { data, error } = await supabase
		.from('elo')
		.select('first_name, last_name, elo')

	const arrData = data?.map(row => {
		return [row.first_name || '', row.last_name || '', row.elo]
	})

	if (error) console.error(error)

	// console.log(data)
	// console.log(arrData)

	// @ts-expect-error: ts(2345)
	setTableData(arrData)
}

export function EloTable() {
	const [tableData] = useAtom(eloData)

	if (!startedFetch) fetchData()

	return (
		<DataTable data={tableData} options={{
			pageLength,
			order: [[2, 'desc']], // by elo, top to bottom
		}}>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Elo</th>
				</tr>
			</thead>
		</DataTable>
	)
}