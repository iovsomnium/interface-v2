import { SUPPORTED_LOCALES, SupportedLocale } from 'constants/locales'

import formatLocaleNumber from './formatLocaleNumber'

const INPUT = 4000000.123 // 4 million

function expectedOutput(l: SupportedLocale): string {
  switch (l) {
    case 'en-US':
    case 'ko-KR':
      return `4,000,000.123`
    default:
      throw new Error('unreachable')
  }
}

const TEST_MATRIX = SUPPORTED_LOCALES.map((locale) => ({
  locale,
  input: INPUT,
  expected: expectedOutput(locale),
}))

describe('formatLocaleNumber', () => {
  test.concurrent.each(TEST_MATRIX)('should format correctly for %p', async ({ locale, input, expected }) => {
    const result = formatLocaleNumber({ number: input, locale })
    expect(result).toEqual(expected)
  })
})
