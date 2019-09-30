import { metasScore } from '@/services/vortice-score'

const metas = {
  GRANDADMIRALTHRAWN: true,
  DARTHNIHILUS: true,
  EMPERORPALPATINE: true,
  DARTHSION: true,
  VADER: true,
  GENERALKENOBI: true,
  R2D2_LEGENDARY: true,
  DARTHTRAYA: true,
  COMMANDERLUKESKYWALKER: true,
  REYJEDITRAINING: true,
  BB8: true,
  GRANDMASTERYODA: true,
  BASTILASHAN: true,
  SITHTROOPER: true,
  EZRABRIDGERS3: true,
  HANSOLO: true,
  HERMITYODA: true,
  ENFYSNEST: true,
  MOTHERTALZIN: true,
  GRANDMOFFTARKIN: true,
  OLDBENKENOBI: true,
  ASAJVENTRESS: true,
  DAKA: true,
  WAMPA: true,
  NIGHTSISTERZOMBIE: true,
  CT7567: true
}

describe('Metas Score', () => {
  it('Should have 0 score without any meta toon', () => {
    const playerUnits = {
      ASD: { gear: 1 }
    }
    const result = metasScore(playerUnits, metas)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 0 score with a meta toon but with gear lower than 11', () => {
    const playerUnits = {
      BB8: { gear: 1 }
    }
    const result = metasScore(playerUnits, metas)
    const expected = 0
    expect(result).toBe(expected)
  })

  it('Should have 5 score with a meta toon at gear 11', () => {
    const playerUnits = {
      BB8: { gear: 11 }
    }
    const result = metasScore(playerUnits, metas)
    const expected = 5
    expect(result).toBe(expected)
  })

  it('Should have 20 score with a meta toon at gear 12', () => {
    const playerUnits = {
      BB8: { gear: 12 }
    }
    const result = metasScore(playerUnits, metas)
    const expected = 20
    expect(result).toBe(expected)
  })

  it('Should have 25 score with a meta toon at gear 11 and another at gear 12', () => {
    const playerUnits = {
      BB8: { gear: 12 },
      DAKA: { gear: 11 }
    }
    const result = metasScore(playerUnits, metas)
    const expected = 25
    expect(result).toBe(expected)
  })
})
