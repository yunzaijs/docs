import React from 'react'
import Footer from '@theme-original/BlogPostItem/Footer'
import type FooterType from '@theme/BlogPostItem/Footer'
import type { WrapperProps } from '@docusaurus/types'
import GiscusComponent from '@site/src/components/GiscusComponent'
type Props = WrapperProps<typeof FooterType>
export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
      <GiscusComponent></GiscusComponent>
    </>
  )
}
