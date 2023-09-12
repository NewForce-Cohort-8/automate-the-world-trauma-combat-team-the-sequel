import { getFish } from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}

import { getTips } from './database.js'

const allTips = getTips()

for (const singleTips of allTips) {
    console.log(singleTips)
}

import { getLocation } from './database.js'

const allLocations = getLocation()

for (const singleLocation of allLocations) {
    console.log(singleLocation)
}
