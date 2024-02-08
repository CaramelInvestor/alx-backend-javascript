import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const length = [19, 20, 34];
  return length.map((size) => new ClassRoom(size));
}
