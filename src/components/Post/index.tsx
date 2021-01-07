import React, { memo } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
interface IPost {
  data: {
    title: string
    selftext: string
    permalink: string
  }
}
export default memo(({ data }: IPost) => {
  return (
    <Link to={data.permalink}>
      <Card className='mb-3' title={data.title}>
        {data.selftext}
      </Card>
    </Link>
  )
})
