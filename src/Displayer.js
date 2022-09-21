function Displayer({ count, color }) {
  return <p style={{ color: color }}>{count}</p>;
}

export default Displayer;

/* To have a 
    state: const [value, setValue] = useState(0)
<Counter initialCount={value} />
To change value of parent that would update children accordingly

To display count passed in, but each number renders a different color
<Displayer count={value} color=“#00FF00” />
 <Displayer count={value} color=“#00FFFF” />
 <Displayer count={value} color=“#FFFF00” />

 value of count to come from a state in the parent component
  */
