import supabase from '../lib/supabase'
import { useAtom } from 'jotai'
import { lastUpdate } from '../store/store'

let startedFetch = false

async function fetchData() {
	const [, setLastUpdate] = useAtom(lastUpdate) // eslint-disable-line

	startedFetch = true
	const { data, error } = await supabase
		.from('elo')
		.select('updated_at')
		.order('updated_at', { ascending: false })
		.limit(1)

	if (error) return console.error(error)

	const localDate = new Date(data[0]?.updated_at).toLocaleString()

	if (data && data[0]) setLastUpdate(localDate)
}

export function LastUpdated() {

	if (!startedFetch) fetchData()

	const [getLastUpdate] = useAtom(lastUpdate) // eslint-disable-line

	return (<>
		<p>Last Updated: {getLastUpdate}</p>
	</>)
}
