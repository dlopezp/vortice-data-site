import { topCharactersTotalScore } from '@/services/vortice-score'

describe('Top Characters Total Score', () => {
  it('Should have 0 score without any toon at gear 11 or 12', () => {
    const player = {
      charactersGearElevenTotal: 0,
      charactersGearTwelveTotal: 0
    }
    const result = topCharactersTotalScore(player)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 2 score with one toon at gear 11 and either at gear 12', () => {
    const player = {
      charactersGearElevenTotal: 1,
      charactersGearTwelveTotal: 0
    }
    const result = topCharactersTotalScore(player)
    const expected = 2
    expect(result).toBe(expected)
  })

  it('Should have 10 score with either toon at gear 11 and one at gear 12', () => {
    const player = {
      charactersGearElevenTotal: 0,
      charactersGearTwelveTotal: 1
    }
    const result = topCharactersTotalScore(player)
    const expected = 10
    expect(result).toBe(expected)
  })

  it('Should have 12 score with one toon at gear 11 and one at gear 12', () => {
    const player = {
      charactersGearElevenTotal: 1,
      charactersGearTwelveTotal: 1
    }
    const result = topCharactersTotalScore(player)
    const expected = 12
    expect(result).toBe(expected)
  })
})
