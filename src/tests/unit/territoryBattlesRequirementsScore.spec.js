import { territoryBattlesRequirementsScore } from '@/services/vortice-score'
// const asd = require('@/services/vortice-score')

describe('Territory Battles Requirements Score', () => {
  it('Should have 0 score without any toon requires', () => {
    const playerUnits = {
      ASD: { stats: 7 }
    }
    const result = territoryBattlesRequirementsScore(playerUnits)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 0 score with toons required but fewer stars', () => {
    const playerUnits = {
      ASD: { stats: 7 },
      HOTHREBELSCOUT: { stars: 4 }
    }
    const result = territoryBattlesRequirementsScore(playerUnits)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 20 score with one toon required', () => {
    const playerUnits = {
      ASD: { stats: 7 },
      HOTHREBELSCOUT: { starts: 7 }
    }
    const result = territoryBattlesRequirementsScore(playerUnits)
    const expected = 20
    expect(result).toBe(expected)
  })
})
