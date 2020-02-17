import React, {useState} from 'react'

const Counter = ({ count: initialCount}) => {
  const arr = useState(initialCount)
  const count = arr[0]
  const somethin = arr[1]

  const countUp = () => somethin(c => c + 1)

	return (
	  <div>
	  	<p>Count: {count}</p>
	  	<button onClick={countUp}>Count Up</button>
	  </div>
	)
}


export default Counter