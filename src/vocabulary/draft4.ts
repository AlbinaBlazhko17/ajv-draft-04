import type {Vocabulary} from "@redocly/ajv/dist/core"
import coreVocabulary from "./core"
import validationDraft4 from "./validation"
import getApplicatorVocabulary from "@redocly/ajv/dist/vocabularies/applicator"
import formatVocabulary from "@redocly/ajv/dist/vocabularies/format"

const metadataVocabulary: Vocabulary = ["title", "description", "default"]

const draft4Vocabularies: Vocabulary[] = [
  coreVocabulary,
  validationDraft4,
  getApplicatorVocabulary(),
  formatVocabulary,
  metadataVocabulary,
] as Vocabulary[]

export default draft4Vocabularies
