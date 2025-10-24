import type {ErrorObject, Vocabulary} from "@redocly/ajv/dist/core"
import limitNumber, {LimitNumberError} from "./limitNumber"
import limitNumberExclusive from "./limitNumberExclusive"
import multipleOf, {MultipleOfError} from "@redocly/ajv/dist/vocabularies/validation/multipleOf"
import limitLength from "@redocly/ajv/dist/vocabularies/validation/limitLength"
import pattern, {PatternError} from "@redocly/ajv/dist/vocabularies/validation/pattern"
import limitProperties from "@redocly/ajv/dist/vocabularies/validation/limitProperties"
import required, {RequiredError} from "@redocly/ajv/dist/vocabularies/validation/required"
import limitItems from "@redocly/ajv/dist/vocabularies/validation/limitItems"
import uniqueItems, {UniqueItemsError} from "@redocly/ajv/dist/vocabularies/validation/uniqueItems"
import constKeyword, {ConstError} from "@redocly/ajv/dist/vocabularies/validation/const"
import enumKeyword, {EnumError} from "@redocly/ajv/dist/vocabularies/validation/enum"

const validation: Vocabulary = [
  // number
  limitNumber,
  limitNumberExclusive,
  multipleOf,
  // string
  limitLength,
  pattern,
  // object
  limitProperties,
  required,
  // array
  limitItems,
  uniqueItems,
  // any
  {keyword: "type", schemaType: ["string", "array"]},
  {keyword: "nullable", schemaType: "boolean"},
  constKeyword,
  enumKeyword,
]

export default validation

type LimitError = ErrorObject<
  "maxItems" | "minItems" | "minProperties" | "maxProperties" | "minLength" | "maxLength",
  {limit: number},
  number | {$data: string}
>

export type ValidationKeywordError =
  | LimitError
  | LimitNumberError
  | MultipleOfError
  | PatternError
  | RequiredError
  | UniqueItemsError
  | ConstError
  | EnumError
