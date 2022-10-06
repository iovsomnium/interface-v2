import { anonymizeLink } from './anonymizeLink'

describe('#anonymizeLink', () => {
  it('does nothing to non-urls', () => {
    expect(anonymizeLink('not a link')).toEqual('not a link')
  })
  it('anonymizes any addresses in etherscan urls', () => {
    expect(anonymizeLink('https://etherscan.io/address/0xabcd')).toEqual('https://etherscan.io/address/***')
  })
  it('anonymizes any addresses in etherscan urls', () => {
    expect(anonymizeLink('https://etherscan.io/address/0xabcd')).toEqual('https://etherscan.io/address/***')
  })
  it('anonymizes any addresses in testnet etherscan urls', () => {
    expect(anonymizeLink('https://rinkeby.etherscan.io/address/0xabcd')).toEqual(
      'https://rinkeby.etherscan.io/address/***'
    )
  })
})
