function App() {
  const name = 'Snoopy'
  const x = false 


  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
  
  );
}

export default App;  