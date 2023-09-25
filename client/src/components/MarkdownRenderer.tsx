'use client'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Props {
  documentRoute: string
}

const MarkdownRenderer = ({ documentRoute }: Props) => {
  const [markdown, setMarkdownContent] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get(documentRoute)
      setMarkdownContent(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <div>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className='text-2xl font-bold' {...props} />,
          h2: ({ node, ...props }) => <h2 className='py-4 text-xl font-medium leading-[140%]' {...props} />,
          p: ({ node, ...props }) => <p className='text-base font-light leading-[155%]' {...props} />,
          br: ({ node, ...props }) => (
            <>
              <br className='text-base  font-light leading-[155%]' {...props} />
              <br className='text-base  font-light leading-[155%]' {...props} />
            </>
          ),
          strong: ({ node, ...props }) => <strong className='font-semibold' {...props} />
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
