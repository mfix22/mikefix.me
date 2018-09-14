import React from 'react'
import {
  Text,
  Box,
  Flex,
  Link,
} from 'rebass'
import styled from 'styled-components'

export const Grey = styled(Flex)`
  border-radius: 4px;
  height: 350px;
  /* #272729 */
  background: #aaa;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 2;
`

export const Black = styled(Flex)`
  background: black;
  border-radius: 1px;
  width: 100%;
  height: 100%;
`

export const LI = styled.li`
  margin-bottom: ${props => props.theme.space[1]}px;
  cursor: ${props => props.onClick ? 'pointer' : null};
  &:before {
    color: ${props => props.theme.colors.mint};
    content: '➜ ';
  }
`

export const Terminal = styled(Box)`
  display: block;
  font-family: ${props => props.theme.fonts.mono};
  overflow: auto;
`

export const Icon = props => (
  <Link color="mint" href={props.href} mr={2} target="_blank">
    <ion-icon name={props.name} />
  </Link>
)

class Home extends React.Component {
  state = {
    more: false
  }

  render() {
    return (
      <Terminal px={4} py={3} fontSize={2} mb={2}>
        <Text mb={3}>
          Hey 👋, I&#39;m a partner at{' '}
          <Link color="mint" href="https://dawnlabs.io">
            dawn
          </Link>
          . We are an ambitious studio, dedicated to thoughtful creation.
        </Text>
        <Text fontSize={3} mb={2}>
          Things i like:
        </Text>
        <ul>
          <LI>Drinking coffee with others</LI>
          <LI>Skiing, Rock climbing</LI>
          <LI>Open Source Software (OSS)</LI>
          <LI>JavaScript + GraphQL</LI>
          {!this.state.more && (<LI onClick={() => this.setState({ more: true })}>More...</LI>)}
          {this.state.more && (
            <React.Fragment>
              <LI>Event Programming / Organizing</LI>
              <LI>Music from Kendrick Lamar, Dessa, Jackson Browne</LI>
              <LI>Kurt Vonnegut books</LI>
              <LI><Link color="inherit" href="https://fieldnotesbrand.com/">Field Notes</Link></LI>
              <LI>Digital / Interactive / Open Art</LI>
              <LI>Financing / Sustaining OSS</LI>
              <LI>Micro-grants</LI>
              <LI><Link color="inherit" href="http://cheeseboardcollective.coop/">Pizza</Link></LI>
            </React.Fragment>
          )}
        </ul>
        <Text fontSize={0} mt={3} mb={3}>
          (If you want to chat about any of these things,{' '}
          <Link color="mint" href="mailto:mike@dawnlabs.io">
            let&#39;s grab a coffee
          </Link>
          !)
        </Text>
        <Text>
          <Icon
            name="logo-twitter"
            href="https://twitter.com/fixitup2"
          />
          <Icon
            name="logo-github"
            href="https://github.com/mfix22"
          />
          <Icon name="mail" href="mailto:mike@dawnlabs.io" />
        </Text>
      </Terminal>
    )
  }
}

export default Home
