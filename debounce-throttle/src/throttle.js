import cities from "cities-list";
import { useCallback, useState } from "react";
import throttle from "lodash.throttle";

const citiesArray = Object.keys(cities);

const Throttle = () => {
  const [filteredCities, setFilteredCities] = useState([]);

  const throttledFilter = useCallback(
    throttle((query) => {
      console.log(query);
      setFilteredCities(
        citiesArray.filter((city) =>
          city.toLowerCase().includes(query?.toLowerCase())
        )
      );
    }, 500),
    []
  );

  const doCityFilter = (query) => {
    if (!query) return setFilteredCities([]);

    throttledFilter(query);
  };

  return (
    <div className="container">
      <h1>Find your favorite cities</h1>

      <form className="mt-3 mb-5">
        <input
          type="text"
          className="px-2"
          placeholder="search here..."
          onChange={(event) => doCityFilter(event.target.value)}
        />
      </form>

      <div>
        {filteredCities?.map((city, index) => (
          <p key={index}>{city}</p>
        ))}
      </div>
    </div>
  );
};

export default Throttle;
