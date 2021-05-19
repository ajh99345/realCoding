function CityList(props) {
  // const cities = props.cities;
  const { cities } = props;

    return (
        <div style={{ font: "italic small-caps bold 16px/2 cursive", border: "5px solid black" }}>
            <h1 style={{ color:"red"}}>CityList</h1>
            <ul style={{ color: "blue" }}>
            {cities.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
            </ul>
        </div>
    );
}

export default CityList;
