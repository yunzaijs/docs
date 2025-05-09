import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MarkdownIt from 'markdown-it'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import BackButton from './BackButton'

const baseURL = 'https://api.github.com/repos/yhArcadia/Yunzai-Bot-plugins-index/contents'

const base64ToText = (contentBase64: string) => {
  const binaryString = atob(contentBase64) // 解码 Base64 为二进制字符串
  const binaryArray = new Uint8Array(binaryString.split('').map(char => char.charCodeAt(0)))
  const decoder = new TextDecoder('utf-8')
  return decoder.decode(binaryArray)
}

const Plugins = () => {
  const [data, setData] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const getMd = async (url: string) => {
    const response = await axios.get(`${baseURL}${url}`)
    const contentBase64 = response.data.content
    const decodedContent = base64ToText(contentBase64)
    setData(decodedContent)
  }

  const [url, setURL] = useState<string>('')

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const params = new URLSearchParams(window.location.search)
      const url = params.get('url') || '/README.md'
      setURL(url)
    }
  }, [])

  useEffect(() => {
    if (!url) return
    const fetchPlugins = async () => {
      try {
        await getMd(url)
      } catch {
        if (url !== '/README.md') {
          setURL('/README.md')
        }
      }
    }
    fetchPlugins()
  }, [url])

  useEffect(() => {
    if (!data) return
    const md = new MarkdownIt({
      linkify: true
    })
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      const hrefIndex = token.attrIndex('href')
      if (hrefIndex >= 0) {
        const hrefValue = token.attrs[hrefIndex][1]
        if (!/^https?:\/\//.test(hrefValue)) {
          const value = hrefValue.replace(/^\.+/, '')
          if (!value.startsWith('/')) {
            token.attrs[hrefIndex][1] = `?url=/${value}`
          } else {
            token.attrs[hrefIndex][1] = `?url=${value}`
          }
        } else {
          // 仅对以 http 或 https 开头的链接添加 target="_blank"
          const targetIndex = token.attrIndex('target')
          if (targetIndex < 0) {
            token.attrPush(['target', '_blank'])
          } else {
            token.attrs[targetIndex][1] = '_blank'
          }
        }
      }
      return self.renderToken(tokens, idx, options)
    }
    const renderedMarkdown = md.render(data)
    setContent(renderedMarkdown)
  }, [data])

  return (
    <div>
      <BackButton
        value={url}
        onClick={() => {
          setURL('/README.md')
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Plugins
