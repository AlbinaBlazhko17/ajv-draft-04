import type AjvCore from "@redocly/ajv/dist/core"
import AjvPack from "@redocly/ajv/dist/standalone/instance"

export function withStandalone(instances: AjvCore[]): (AjvCore | AjvPack)[] {
  return [...(instances as (AjvCore | AjvPack)[]), ...instances.map(makeStandalone)]
}

function makeStandalone(ajv: AjvCore): AjvPack {
  return new AjvPack(ajv)
}
