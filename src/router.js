import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People_page from './Components/People/people_page'
import PersonEdit from './Components/PersonEdit/PersonEdit'

const Router = () => (
	<Switch>
	  <Route exact path='/' component={People_page}/>
	  <Route path='/register' component={PersonEdit}/>
	</Switch>
)

export default Router