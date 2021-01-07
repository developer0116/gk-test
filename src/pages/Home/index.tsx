import React from 'react'
import Layout from 'layout'
import { useSelector, useDispatch } from 'react-redux'
import { times } from 'lodash'
import { Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { fetchReddits } from 'state/reddits/redditsActions'
import { SubReddit, Skeleton, Post } from 'components'
import InfiniteScroll from 'react-infinite-scroll-component'

interface IRoute {
  id: string
  comment: string
  reddit: string
}
export default function HomePage() {
  const { reddit }: IRoute = useParams()
  const dispatch = useDispatch()
  const { list, isRunning, hasMore } = useSelector(
    (state: any) => state.reddits
  )
  return (
    <Layout>
      {isRunning ? (
        times(10, String).map((d: any) => {
          return <Skeleton key={`${d}key`} />
        })
      ) : (
        <InfiniteScroll
          dataLength={list.length}
          next={() => {
            dispatch(
              fetchReddits({
                id: reddit,
                after: hasMore,
              })
            )
          }}
          hasMore={hasMore}
          loader={
            <div className='text-center my-5'>
              <Spin size='large' />
            </div>
          }
        >
          {list.map((item: any) => {
            return item.kind === 't5' ? (
              <SubReddit key={item.data.name} data={item.data} />
            ) : item.kind === 't3' ? (
              <Post key={item.data.name} data={item.data} />
            ) : null
          })}
        </InfiniteScroll>
      )}
    </Layout>
  )
}
