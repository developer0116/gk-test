import React, { memo } from 'react'
import { Card } from 'antd'
interface ISubReddit {
  data: {
    title: string
    display_name_prefixed: string
    public_description: string
  }
}
export default memo(({ data }: ISubReddit) => {
  return (
    <Card
      className='mb-3'
      title={data.title}
      extra={
        <a href={`/${data.display_name_prefixed}`}>
          {data.display_name_prefixed}
        </a>
      }
    >
      {data.public_description}
    </Card>
  )
})
