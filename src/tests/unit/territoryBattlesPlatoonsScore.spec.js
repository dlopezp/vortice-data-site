import { territoryBattlesPlatoonsScore } from '@/services/vortice-score'

const platoons = {
  HANSOLO: 7
}

describe('Territory Battles Platoons Score', () => {
  it('Should have 0 score without any toon in the list', () => {
    const playerUnits = {
      ASD: { stats: 7 }
    }
    const result = territoryBattlesPlatoonsScore(playerUnits, platoons)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 0 score with toons required but fewer stars', () => {
    const playerUnits = {
      ASD: { stats: 7 },
      HANSOLO: { stars: 4 }
    }
    const result = territoryBattlesPlatoonsScore(playerUnits, platoons)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 2 score with one toon required', () => {
    const playerUnits = {
      ASD: { stats: 7 },
      HANSOLO: { starts: 7 }
    }
    const result = territoryBattlesPlatoonsScore(playerUnits, platoons)
    const expected = 2
    expect(result).toBe(expected)
  })
})
