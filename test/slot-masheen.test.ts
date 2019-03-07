import SlotMasheen from '../src/slot-masheen'
import { DEFAULT_CONFIG } from '../src/constants/default-config'

/**
 * Root Class
 */
describe('Root Class', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('SlotMasheen is instantiable', () => {
    const mockConfig = { ...DEFAULT_CONFIG }
    expect(new SlotMasheen(mockConfig)).toBeInstanceOf(SlotMasheen)
  })
})
