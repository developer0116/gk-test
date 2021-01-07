import React from 'react'
import Layout from 'layout'
import { useSelector } from 'react-redux'
import { Skeleton, Comment } from 'components'
import { times } from 'lodash'

export default function SubredditsPage() {
  const { list, isRunning } = useSelector((state: any) => state.reddits)

  return (
    <Layout>
      {isRunning &&
        times(10, String).map((d: any) => {
          return <Skeleton key={`${d}key`} />
        })}
      {list.map((item: any) => {
        return <Comment key={item.data.name} data={item.data} />
      })}
    </Layout>
  )
}
