import { strProvedSquadsScore } from '@/services/vortice-score'

const strProvedSquads = {
  457388239: { f1: true, f3: true }, // AlkaParra
  167132317: { f1: true, f3: true }, // BB8
  588954645: { f1: true, f3: true }, // Conde Mor
  157385736: { f1: true, f3: true }, // DarthJC
  689548596: { f1: true, f3: true }, // Dieguitu
  467116613: { f1: true, f3: true }, // equino
  953194194: { f1: true, f3: true }, // Golo
  261297523: { f1: true, f3: true }, // Ikmendi
  569757172: { f1: true, f3: true }, // Jan
  852958149: { f1: true, f3: true }, // JustinXiang
  325169954: { f1: true, f3: true }, // Lymy Jedii
  336771469: { f1: true, f3: true }, // Nando
  714647497: { f1: true, f3: true }, // Queensryche
  749517961: { f1: true, f3: true }, // Senlo Yan
  773622517: { f1: true, f3: true }, // Temerario
  986641585: { f1: true, f3: true }, // Wally87
  359769929: { f1: true, f3: true }, // Bielk
  155752464: { f1: true, f3: true }, // Jenkinsherencia
  467793785: { f1: true, f3: true }, // Kvothe
  229795588: { f1: true, f3: true }, // Lordmeiker
  289186573: { f1: true, f3: true }, // mariano
  541324974: { f1: true, f3: true }, // Paco
  788338579: { f1: true, f3: true }, // Toddpurcell
  686663312: { f1: true, f3: true }, // xeui
  581725767: { f1: true, f3: true }, // xuluz8
  524692821: { f1: true, f3: true }, // SoldTT
  872616715: { f1: true, f3: false }, // DG7
  423895989: { f1: true, f3: false }, // Maestro Lode
  725539343: { f1: true, f3: false }, // Timbaler
  378888555: { f1: true, f3: false }, // Faithless
  631167895: { f1: true, f3: false }, // RoberReub
  151539213: { f1: true, f3: false }, // Tabtoine of the North
  777313384: { f1: true, f3: true }, // Vladbom
  668491966: { f1: true, f3: true }, // Sorgod
  726416727: { f1: true, f3: true }, // DarthTronus
  611716213: { f1: true, f3: false }, // EEdward26
  588443664: { f1: true, f3: false }, // Ganoes Paran
  569738738: { f1: true, f3: false }, // Mcoke
  934436773: { f1: true, f3: true }, // RUYSE
  111111111: { f1: false, f3: true } // fake
}

describe('STR Proved Squad Score', () => {
  it('Should have 0 score witout any proved squad', () => {
    const player = { id: 1 }
    const result = strProvedSquadsScore(player, strProvedSquads)
    const expected = 0

    expect(result).toBe(expected)
  })

  it('Should have 25 score with f1 proved squad', () => {
    const player = { id: 569738738 }
    const result = strProvedSquadsScore(player, strProvedSquads)
    const expected = 25

    expect(result).toBe(expected)
  })

  it('Should have 25 score with f3 proved squad', () => {
    const player = { id: 111111111 }
    const result = strProvedSquadsScore(player, strProvedSquads)
    const expected = 25

    expect(result).toBe(expected)
  })

  it('Should have 50 score with both proved squad', () => {
    const player = { id: 457388239 }
    const result = strProvedSquadsScore(player, strProvedSquads)
    const expected = 50

    expect(result).toBe(expected)
  })
})