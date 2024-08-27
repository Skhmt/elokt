import { EloTable } from './components/EloTable'
import { LastUpdated } from './components/LastUpdated'

function App() {
	return (
		<div className="container px-8 py-4">
			<div>
				<h1 className="text-2xl font-bold py-3">Precision Table Top - Kill Team Elo ratings</h1>
			</div>
			<EloTable />
			<div>
				<LastUpdated />
			</div>
		</div>
	)
}

export default App
