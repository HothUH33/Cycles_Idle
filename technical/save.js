function getPlayerStartData() {
    return {
      cycle: new Decimal(0),
      pointstocycle: new Decimal(1e3),
      kilo_cycle: new Decimal(0),
      cyclestok_cycle: new Decimal(25),
      energy: new Decimal(500),
      max_energy: new Decimal(500),
    }
}
let player = getPlayerStartData()
