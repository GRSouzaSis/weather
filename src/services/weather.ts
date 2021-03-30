import { RequestWeather } from '../models/RequestModel'
import api from './api'

const getWeather = async (request: RequestWeather) => {
  const { lat, lon, part } = request
  return await api.get(
    `onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${process.env.PRIVATE_KEY}`
  )
}
