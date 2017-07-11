// get all the photos
export const fetchPhotos = () => (
  fetch(`http://jsonplaceholder.typicode.com/photos?_limit=30`, {
      method: 'get'
  }).then((response) => response.json())
)

// get a particular photo
/*export const fetchPhoto = (param1, param2) => (
  fetch(`http://placehold.it/${param1 '/' param2}.json`, {
      method: 'get'
  }).then((response) => response.json())
)
*/
