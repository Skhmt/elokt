import supabase from '../lib/supabase'
import { useAtom } from 'jotai'
import { lastUpdate } from '../store/store'
import { useEffect } from 'react'

export function LastUpdated() {
	const [getLastUpdate, setLastUpdate] = useAtom(lastUpdate) // eslint-disable-line

	useEffect(() => {
		(async () => {
			const { data, error } = await supabase
				.from('elo')
				.select('updated_at')
				.order('updated_at', { ascending: false })
				.limit(1)

			if (error) return console.error(error)

			const localDate = new Date(data[0]?.updated_at).toLocaleString()

			setLastUpdate(localDate)
		})()
	}, [setLastUpdate])

	return (<>
		<p>Last Updated: {getLastUpdate}</p>
	</>)
}
