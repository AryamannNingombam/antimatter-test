import Randomstring from 'randomstring'

export const GetAccountVerificationHash = () => {
  return Randomstring.generate(20)
}

export const GetRandomHashOfLength = (length: number) => {
  return Randomstring.generate(length)
}
