import React from 'react'
import Giscus from '@giscus/react'
import { useColorMode } from '@docusaurus/theme-common'
export default function GiscusComponent() {
  const { colorMode } = useColorMode()
  return (
    <Giscus
      repo="yunzai-org/docs"
      repoId="R_kgDOMHTm2A"
      category="General"
      categoryId="DIC_kwDOMHTm2M4CjMGM"
      mapping="url"
      term="Welcome to Yunzai Next!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  )
}
