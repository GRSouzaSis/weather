import { RequestWeather } from '../models/RequestModel'
import { BaseResponse, BaseResponseCity } from '../models/ResponseModel'
import api from './api'
export const getCityWeather = async (
  param: RequestWeather.ParamCity
): Promise<BaseResponseCity> => {
  const { city } = param
  try {
    const getResponse = await api.get(
      `weather?q=${city}&appid=${process.env.NEXT_PUBLIC_KEY}&lang=pt_br&units=metric`
    )

    const data = getResponse.data || ({} as BaseResponseCity)
    switch (getResponse.status) {
      case 200:
        return data as BaseResponseCity
      case 204:
        return {} as BaseResponseCity
      default:
        throw new Error()
    }
  } catch (err) {
    alert('Não foi possivel encontrar essa cidade!')
    console.log(err)
  }
}

export const getWeather = async (
  param: RequestWeather.Param
): Promise<BaseResponse> => {
  const { lat, lon, part } = param
  try {
    const getResponse = await api.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${process.env.NEXT_PUBLIC_KEY}&lang=pt_br&units=metric`
    )

    const data = getResponse.data || ({} as BaseResponse)
    switch (getResponse.status) {
      case 200:
        return data as BaseResponse
      case 204:
        return {} as BaseResponse
      default:
        throw new Error()
    }
  } catch (err) {
    console.log(err)
  }
}
