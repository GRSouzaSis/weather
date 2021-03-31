/* eslint-disable @typescript-eslint/no-namespace */
export namespace RequestWeather {
  export type Param = {
    lat?: number
    lon?: number
    part?: Exclude
  }
  export type ParamCity = {
    city?: string
    units?: string
    lang?: string
  }

  export type Exclude = 'alerts'
}
