export interface AdvancedStats {
  paceAttributes: {
    acceleration: number,
    sprintSpeed: number
  },
  shootingAttributes: {
    positioning: number,
    finishing: number,
    shotPower: number,
    longShots: number,
    volleys: number,
    penalties: number
  },
  passingAttributes: {
    vision: number,
    crossing: number,
    freeKickAccuracy: number,
    shortPassing: number,
    longPassing: number,
    curve: number
  },
  dribblingAttributes: {
    agility: number,
    balance: number,
    reactions: number,
    ballControl: number,
    dribbling: number,
    composure: number
  },
  defendingAttributes: {
    interceptions: number,
    headingAccuracy: number,
    standingTackle: number,
    slidingTackle: number,
    defenseAwareness: number
  },
  physicalityAttributes: {
    jumping: number,
    stamina: number,
    strength: number,
    aggression: number
  },
  goalkeeperAttributes: {
    diving: number,
    handling: number,
    kicking: number,
    positioning: number,
    reflexes: number
  }
}
