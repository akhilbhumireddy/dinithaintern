import React, {useState} from 'react'

function ClickMe() {
  // Define a state variable to hold the count value
  const [count, setCount] = useState(0)

  // Function to handle incrementing the count
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div>
        <h1> The Button has been clicked {count} times</h1>
        <p style={{textAlign: 'center'}}>
          {' '}
          Click the button to increase the count
        </p>
        <div style={{textAlign: 'center'}}>
          <button
            onClick={incrementCount}
            type="button"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              Left: '50%',
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            ClickMe
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClickMe
