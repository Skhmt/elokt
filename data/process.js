// deprecated

import CsvParser from 'csv-parser'
import fs from 'node:fs'

const inputFileName = 'player_elos.csv'
const outputFileName = '../public/player_elos.json'

const results = { data: [] }
const readStream = fs.createReadStream(inputFileName)

readStream
	.pipe(CsvParser())
	.on('data', (data) => {
		results.data.push([data.First_Name, data.Last_Name, data.elo])
	})
	.on('end', () => {
		fs.writeFileSync(outputFileName, JSON.stringify(results))
	})