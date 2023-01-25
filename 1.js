let population = 100000
let year = 0
let birthRate = 10
let deathRate = 8
let migration = 2000
let lifeExpectancy = 75
let fertilityRate = 2
let unemploymentRate = 5
let educationRate = 30
let healthcareRate = 80
let politicalStability = 8
let environmentalFactors = 7

let updatePopulation = function () {
  year++
  let births = Math.round((population * birthRate) / 1000)
  let deaths = Math.round((population * deathRate) / 1000)
  let netMigration = migration

  if (unemploymentRate > 7) {
    netMigration -= Math.round(netMigration * 0.1)
  }

  if (educationRate > 40) {
    births -= Math.round(births * 0.1)
  }
  births *= fertilityRate

  if (healthcareRate < 70) {
    deaths += Math.round(deaths * 0.1)
  }
  deaths *= lifeExpectancy / 75

  if (politicalStability < 6) {
    netMigration -= Math.round(netMigration * 0.1)
  }
  if (environmentalFactors < 6) {
    netMigration -= Math.round(netMigration * 0.1)
  }

  population += births + netMigration - deaths
  console.log('Year: ' + year + ' Population size: ' + population)
}

setInterval(updatePopulation, 100)
