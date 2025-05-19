import React, { useState } from "react";

const MaxDistance = () => {
  const [seats, setSeats] = useState([1, 0, 0, 0, 1, 0, 1]);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const distance = maxDistToClosest(seats);

setResult(distance);
  };

  return (
    <div>
      <h2>Maximize Distance to Closest Person</h2>
      <p>Seats: {JSON.stringify(seats)}</p>
      <button onClick={handleCalculate}>Calculate Max Distance</button>
      {result !== null && <p>Max Distance: {result}</p>}
    </div>
  );
};

// Paste the function above here too
function maxDistToClosest(seats) {
  let maxDistance = 0;
  let lastPerson = -1;
  const n = seats.length;

  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      if (lastPerson === -1) {
        maxDistance = i;
      } else {
        maxDistance = Math.max(maxDistance, Math.floor((i - lastPerson) / 2));
      }
      lastPerson = i;
    }
  }

  if (seats[n - 1] === 0) {
    maxDistance = Math.max(maxDistance, n - 1 - lastPerson);
  }

  return maxDistance;
}
export default MaxDistance
