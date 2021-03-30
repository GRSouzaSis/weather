import { RequestWeather } from '../models/RequestModel'
import { BaseResponse } from '../models/ResponseModel'

import api from './api'

export const getWeather = async (
  param: RequestWeather.Param
): Promise<BaseResponse> => {
  const { lat, lon, part } = param
  console.log(param)
  // console.log(process.env.NEXT_PUBLIC_PRIVATE_KEY)
  try {
    const getResponse = await api.get(
      `onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=aca37f3d01024ae43db69a96e56ff626`
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
    throw new Error(err)
  }
}
