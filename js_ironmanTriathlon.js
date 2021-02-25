'use strict';

function getTriathlonDistance(distance) {
  const startDistance = (distance === 0);
  const finishDistance = (distance === 226.31);
  const swimDistance = (distance <= 3.86 && distance > 0);
  const rideDistance = (distance > 3.86 && distance <= 184.11);
  const runDistance = (distance > 184.11 && distance < 226.31 );
  const allDistance = 226.31;
  const arrIronPartDistance = ["swim", "bike", "run"];
  const remainderDistance = allDistance - distance;
  const message = `${remainderDistance} to go`;
  const returnObj = {};

  if (startDistance) {
    return `Starting Line... Good Luck!`;
  }

  if (distance) {
    if (swimDistance) {
      returnObj[arrIronPartDistance[0]] = message;
    }

    if (rideDistance) {
      returnObj[arrIronPartDistance[1]] = message;
    }

    if (runDistance) {
      returnObj[arrIronPartDistance[2]] = message;
    }

  }

  if (finishDistance) {
    return `You're done! Stop running!`;
  }

  return returnObj;
}