const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjJjYzMyNzgzLTYyYTMtNDc2Mi1iZDAxLWMwMjMwNGRmZTcyMC0xNzI5NTUzMTY3MTI0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDUxYjAwYjEtZDBkNy00NmUxLWFiOTUtYWJjZTU3YjJjZmJmIiwidHlwZSI6InQifQ.EeV-g5dKiZVL2wvlQsTnhgAC8YKOGnKt3i81adRauKI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
