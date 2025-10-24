import type {Vocabulary} from "@redocly/ajv/dist/core"
import refKeyword from "@redocly/ajv/dist/vocabularies/core/ref"

const core: Vocabulary = [
  "$schema",
  "id",
  "$defs",
  {keyword: "$comment"},
  "definitions",
  refKeyword,
]

export default core
