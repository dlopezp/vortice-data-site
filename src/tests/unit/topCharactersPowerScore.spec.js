import { topCharactersPowerScore } from '@/services/vortice-score'

describe('Top Characters Power Score', () => {
  it('Should have 0 score without any toon at gear 11 or 12', () => {
    const player = {
      charactersGearElevenPower: 0,
      charactersGearTwelvePower: 0
    }
    const result = topCharactersPowerScore(player)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 1 score with 10.000 PG on toons at gear 11 or 12', () => {
    const player = {
      charactersGearElevenPower: 10000,
      charactersGearTwelvePower: 0
    }
    const result = topCharactersPowerScore(player)
    const expected = 1
    expect(result).toBe(expected)

    const player2 = {
      charactersGearElevenPower: 5000,
      charactersGearTwelvePower: 5000
    }
    const result2 = topCharactersPowerScore(player2)
    const expected2 = 1
    expect(result2).toBe(expected2)
  })
})
