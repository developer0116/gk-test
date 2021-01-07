import React, { memo } from 'react'
import { Card, Comment, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface IComment {
  data: {
    title: string
    selftext: string
    permalink: string
    author: string
    body: string
    replies: any
  }
}
interface IThread {
  content: string
  author: string
  replies: any
}
const Thread = ({ content, author, replies }: IThread) => (
  <Comment
    author={author}
    avatar={<Avatar size='large' icon={<UserOutlined />} alt={author} />}
    content={<p>{content}</p>}
    className='text-left'
  >
    {replies &&
      replies.data.children.map((d: any) => {
        return (
          <Thread
            key={d.data.name}
            author={d.data.author}
            content={d.data.body}
            replies={d.data.replies}
          />
        )
      })}
  </Comment>
)

export default memo(({ data }: IComment) => {
  return (
    <Card className='mb-3'>
      <Thread author={data.author} content={data.body} replies={data.replies} />
    </Card>
  )
})
