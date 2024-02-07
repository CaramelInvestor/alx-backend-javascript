import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([ uploadPhoto(), createUser()])
    .then((opt) => {
      console.log(`${opt[0].body} ${opt[1].firstName} ${opt[2].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
