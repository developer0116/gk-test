import React, { useEffect } from 'react'
import { Layout, Menu, Dropdown } from 'antd'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchReddits, fetchNewComments } from 'state/reddits/redditsActions'
const { Header, Content } = Layout
import './style.scss'
interface ILayout {
  children?: React.ReactNode
}
interface IRoute {
  id: string
  comment: string
  reddit: string
}
const menu = (
  <Menu>
    <Menu.Item key='1'>
      <Link to='/r/new'>NEW</Link>
    </Menu.Item>
    <Menu.Item key='2'>
      <Link to='/r/popular'>POPULAR</Link>
    </Menu.Item>
  </Menu>
)
export default ({ children }: ILayout) => {
  const { id, reddit, comment }: IRoute = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    if (id && comment && reddit) {
      dispatch(fetchNewComments({ url: location.pathname }))
    } else if (!id && !comment && reddit) {
      dispatch(fetchReddits({ id: reddit, init: true }))
    }
    return () => {}
  }, [reddit, id, comment])
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo'> </div>

        <Dropdown.Button overlay={menu} size='large' style={{ width: 200 }}>
          {reddit}
        </Dropdown.Button>
      </Header>
      <Content>
        <div className='container site-layout-content'>{children}</div>
      </Content>
    </Layout>
  )
}
