// Contains all the types used throughout the app, ready to be imported elsewhere.
// For example:

export type timeOfDayType = 'dawn' | 'morning' | 'afternoon' | 'dusk' | 'night'

export type AntsType = AntType[]

export interface AntType {
    name: string
    measurement: string
    image: string
}

