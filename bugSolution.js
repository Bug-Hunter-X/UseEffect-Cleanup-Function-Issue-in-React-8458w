```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); 
    return () => {
      // Cleanup function: This runs before the component unmounts or before the next effect runs
      console.log('Cleanup function ran');
    };
  }, [count]); //The dependency array [count] ensures the effect runs only when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```