const fs = require('fs')

var WeatherApi = require('weather-au-api')
var api = new WeatherApi()

var configFile

try {
  configFile = fs.readFileSync(process.env.FBT_CONFIG_PATH, 'utf8')
  console.log(configFile)
}
catch {
  console.error('ERROR: FBT_CONFIG_PATH is invalid.')
}

const config = JSON.parse(configFile)


async function App() {
  // Set  location to Preston
  location = await api.search(config.weather.postcode)
  console.log(location)
}

App()
