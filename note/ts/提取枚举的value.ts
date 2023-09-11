enum A {
  a = 111,
  b = 222,
  c = 'ccc',
}

type EnumValue = `${A}`

type StrToNum<Str> = Str extends `${infer Num extends number}` ? Num : Str

type res = StrToNum<`${A}`>