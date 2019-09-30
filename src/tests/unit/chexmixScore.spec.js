import { chexmixScore } from '@/services/vortice-score'

const chexMixCore = {
  COMMANDERLUKESKYWALKER: 7,
  DEATHTROOPER: 7,
  HANSOLO: 7
}

describe('Chexmix Score', () => {
  it('Should have 0 score without any toon of Chexmix core', () => {
    const playerUnits = {}
    const result = chexmixScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with one toon of Chexmix core', () => {
    const playerUnits = {
      COMMANDERLUKESKYWALKER: { stars: 7, gear: 12 }
    }
    const result = chexmixScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with two toon of Chexmix core', () => {
    const playerUnits = {
      COMMANDERLUKESKYWALKER: { stars: 7, gear: 12 },
      HANSOLO: { stars: 7, gear: 12 }
    }
    const result = chexmixScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with three toon of Chexmix core but one of this at gear fewer than 11', () => {
    const playerUnits = {
      COMMANDERLUKESKYWALKER: { stars: 7, gear: 12 },
      HANSOLO: { stars: 7, gear: 12 },
      DEATHTROOPER: { stars: 7, gear: 10 }
    }
    const result = chexmixScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with three toon of Chexmix core but one of this at six stars', () => {
    const playerUnits = {
      COMMANDERLUKESKYWALKER: { stars: 7, gear: 12 },
      HANSOLO: { stars: 7, gear: 12 },
      DEATHTROOPER: { stars: 6, gear: 12 }
    }
    const result = chexmixScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 45 score with entire Chexmix core at 7 stars and gear higher than 10', () => {
    const playerUnits = {
      COMMANDERLUKESKYWALKER: { stars: 7, gear: 12 },
      HANSOLO: { stars: 7, gear: 12 },
      DEATHTROOPER: { stars: 7, gear: 12 }
    }
    const result = chexmixScore(playerUnits)
    const expected = 45

    expect(result).toBe(expected)
  })
})
