function bookHotel() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const hotelBooked = true; // Assuming the hotel booking is successful
        if (hotelBooked) {
          resolve('Hotel booked successfully!');
        } else {
          reject('Hotel booking failed.');
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  function bookFlight() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const flightBooked = true; // Assuming the flight booking is successful
        if (flightBooked) {
          resolve('Flight booked successfully!');
        } else {
          reject('Flight booking failed.');
        }
      }, 3000); // Simulating a 3-second delay
    });
  }
  
  function planTrip() {
    // Using promises to handle asynchronous operations
    bookHotel()
      .then((hotelResult) => {
        console.log(hotelResult);
        return bookFlight();
      })
      .then((flightResult) => {
        console.log(flightResult);
        console.log('Trip planning completed!');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }
  
  // Call the planTrip function to start planning the trip
  planTrip();
  