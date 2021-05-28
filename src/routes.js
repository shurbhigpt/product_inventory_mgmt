import React from 'react'
import { Switch, Route } from 'react-router-dom'
import home from './components/login/Login'
import Login from './components/login/Login'


const Routes = () => {
	return (
		<Switch>
			<PageRoute path='/'>
				<Login />
			</PageRoute>
			{/* <PageRoute path='/'>
				<Home />
			</PageRoute> */}
		</Switch>
	)
}

// const PageRoute = ({ children, ...rest }) => {
// 	return (
// 		<Route {...rest}>
// 			<Page>{children}</Page>
// 		</Route>
// 	)
// }

export default Routes
