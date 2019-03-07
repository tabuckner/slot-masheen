import { SlotMasheenConfig } from './shared/models/config.model'
import { DEFAULT_CONFIG } from './constants/default-config'
import { Helpers } from './helpers'

// Import Polyfills here if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
export default class SlotMasheen {
  public config: SlotMasheenConfig
  public targetElement: HTMLElement
  private helpers = new Helpers()

  constructor(config: SlotMasheenConfig) {
    this.config = config
    this._setOptionalConfigValues()
    this.setTargetElement()
    this.animate()
  }

  public setTargetElement(): void {
    if (!this.config) return
    this.targetElement = this.config.el
    console.log('set element to', this.targetElement)
  }

  public animate(): void {
    console.log('should animate to', this.config.value)
  }

  private _setOptionalConfigValues(): void {
    for (const key in DEFAULT_CONFIG) {
      const userConfigValue = this.helpers.getKeyAsMemberOf<SlotMasheenConfig>(this.config, key)
      if (!userConfigValue) {
        const defaultConfigValue = this.helpers.getKeyAsMemberOf<SlotMasheenConfig>(
          DEFAULT_CONFIG,
          key
        )
        console.warn(
          `Config Option '${key}' not found in User Config. Substituting with the default value:`,
          defaultConfigValue
        )
        this.config[key as keyof SlotMasheenConfig] = defaultConfigValue // NOTE: Needed to change original reference.
      }
    }
    console.log('filled out config as', this.config)
  }
}
