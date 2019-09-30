import { resistanceScore } from '@/services/vortice-score'

describe('JTR Score', () => {
  it('Should have 0 score without any toon of JTR core', () => {
    const playerUnits = {}
    const result = resistanceScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with one toon of JTR core', () => {
    const playerUnits = {
      REYJEDITRAINING: { stars: 7, gear: 12 }
    }
    const result = resistanceScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with two toon of JTR core', () => {
    const playerUnits = {
      REYJEDITRAINING: { stars: 7, gear: 12 },
      BB8: { stars: 7, gear: 12 }
    }
    const result = resistanceScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with three toon of JTR core but one of this at gear fewer than 11', () => {
    const playerUnits = {
      REYJEDITRAINING: { stars: 7, gear: 12 },
      BB8: { stars: 7, gear: 12 },
      RESISTANCETROOPER: { stars: 7, gear: 10 }
    }
    const result = resistanceScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 0 score with three toon of JTR core but one of this at six stars', () => {
    const playerUnits = {
      REYJEDITRAINING: { stars: 7, gear: 12 },
      BB8: { stars: 7, gear: 12 },
      RESISTANCETROOPER: { stars: 6, gear: 12 }
    }
    const result = resistanceScore(playerUnits)
    const expected = 0

    expect(result).toBe(expected)
  })

  describe('Having entire JTR core at 7 stars and gear higher than 10', () => {
    it('Should have 0 score withouth any optional toon', () => {
      const playerUnits = {
        REYJEDITRAINING: { stars: 7, gear: 12 },
        BB8: { stars: 7, gear: 12 },
        RESISTANCETROOPER: { stars: 7, gear: 12 }
      }
      const result = resistanceScore(playerUnits)
      const expected = 0

      expect(result).toBe(expected)
    })

    it('Should have 0 score with one of optional toons', () => {
      const playerUnits = {
        REYJEDITRAINING: { stars: 7, gear: 12 },
        BB8: { stars: 7, gear: 12 },
        RESISTANCETROOPER: { stars: 7, gear: 12 },
        VISASMARR: { stars: 7, gear: 12 }
      }
      const result = resistanceScore(playerUnits)
      const expected = 0

      expect(result).toBe(expected)
    })

    it('Should have 0 score with two of optional toons but not topped', () => {
      const playerUnits = {
        REYJEDITRAINING: { stars: 7, gear: 12 },
        BB8: { stars: 7, gear: 12 },
        RESISTANCETROOPER: { stars: 7, gear: 12 },
        VISASMARR: { stars: 7, gear: 12 },
        REY: { stars: 7, gear: 10 }
      }
      const result = resistanceScore(playerUnits)
      const expected = 0

      expect(result).toBe(expected)
    })

    it('Should have 75 score with two of optional toons topped', () => {
      const playerUnits = {
        REYJEDITRAINING: { stars: 7, gear: 12 },
        BB8: { stars: 7, gear: 12 },
        RESISTANCETROOPER: { stars: 7, gear: 12 },
        VISASMARR: { stars: 7, gear: 12 },
        REY: { stars: 7, gear: 12 }
      }
      const result = resistanceScore(playerUnits)
      const expected = 75

      expect(result).toBe(expected)
    })
  })

})
