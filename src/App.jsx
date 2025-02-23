import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import User from './User'

function App() {
	let user1 = {
		name: "Osman Mahmud",
		Age: 26,
		Email: "antormahmud318@gmail.com"
	}

	// let userObj2 = {
	// 	name: "Siyam Hasan",
	// 	Age: 27,
	// 	Email: "siyam20@gmail.com"
	// }

	// let userObj3 = {
	// 	name: "Abir Khan",
	// 	Age: 28,
	// 	Email: "abirkhan@gmail.com"
	// }


  return (
    <>
      <div>
        <h1>State in React</h1>
		<User user={user1} />
		
		<Counter />
      </div>
    </>
  )
}

export default App
