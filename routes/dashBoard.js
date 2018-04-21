import express from 'express'
import { data } from 'dnd-desk'
// import { Project } from '../model'
import hre from '../lib/handleRouteError'

const $ = express.Router()

$.get('/', hre(async (req, res) => {
	const { url } = req;
	console.log('22222')
	return res.react({
		url,
		initialState: {
			user: req.o.user,
			project: req.o.project
		}
	})
}))

$.post('/', hre(async (req, res) => {
	res.json({
		user: req.o.user,
		project: req.o.project
	})
}))

$.get('/desk', (req, res) => {
	const { url } = req;
	return res.react({
		url,
		initialState: {
			user: req.o.user,
			desk: data.medium
		}
	})
})

$.post('/desk', (req, res) => {
	res.json({
		user: req.o.user,
		desk: data.medium
	})
})

export default $