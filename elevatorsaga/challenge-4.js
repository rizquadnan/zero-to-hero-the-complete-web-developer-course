x = {
  init: function (elevators, floors) {
    const setupElevatorGetPassenger = (floor, direction) => {
      elevators.forEach((elevator) => {
        elevator.goToFloor(floor.level);
      })
    }

    floors.forEach((floor) => {
      floor.on('up_button_pressed', () => {
        setupElevatorGetPassenger(floor, "up");
      })

      floor.on('down_button_pressed', () => {
        setupElevatorGetPassenger(floor, "down");
      })
    })

    elevators.forEach((elevator, index) => {
      elevator.on('floor_button_pressed', (floorNum) => {
        elevator.goToFloor(floorNum, true);

        if (index === 0) {
          console.log("elevator 1 pressed", elevator.getPressedFloors());
          console.log("elevator 1 current", elevator.currentFloor());
        }
      })
    })
  },
  update: function (dt, elevators, floors) {
    // We normally don't need to do anything here
  },
}

// const elevatorMove = (elevator, destination) => {
//   if (elevator.currentFloor() > destination) {
//     elevator.goingDownIndicator(true);
//     elevator.goingUpIndicator(false);
//   }

//   if (elevator.currentFloor() < destination) {
//     elevator.goingDownIndicator(false);
//     elevator.goingUpIndicator(true);
//   }

//   elevator.goToFloor(destination);
// };
