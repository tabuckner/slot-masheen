import { SlotMasheenConfigStrict } from '../shared/models/strict-config.model'
import { ANIMATION_TYPES } from '../shared/enums/animation-types.enum'

export const DEFAULT_CONFIG: SlotMasheenConfigStrict = {
  el: document.querySelector('body') as HTMLElement,
  value: 1000,
  duration: 500,
  animationType: ANIMATION_TYPES.simple
}
