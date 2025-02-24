import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import User from './User'

function App() {

	const usernames = ['antor','siyam','abir','imon','neon'];

	const userData = [
		{
			id: 29,
			name: "Osman Mahmud",
			Age: 26,
			Email: "antormahmud318@gmail.com"
		},
		{
			id: 20,
			name: "Siyam Hasan",
			Age: 27,
			Email: "siyam20@gmail.com"
		},
		{
			id: 19,
			name: "Abir Khan",
			Age: 28,
			Email: "abirkhan@gmail.com"
		}
	]


  return (
    <>
      <div>
        <h1>Loop in JSX using Map Function</h1>
		<table border="1">
			<thead>
				<tr>
					<td>Id</td>
					<td>Name</td>
					<td>Age</td>
					<td>Email</td>
				</tr>
			</thead>

			<tbody>
				{
					userData.map((user)=>(
						<tr>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.Age}</td>
							<td>{user.Email}</td>
						</tr>
					))
				}
			</tbody>
		</table>
      </div>


	  <div>
		<h1>Reuse Component in Loop</h1>
		{
			userData.map((user)=>(
				<div key={user.id}>
					<User data={user} />
				</div>
			))
		}
	  </div>
    </>
  )
}

export default App
