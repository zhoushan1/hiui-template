import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu, Grid, Table, Icon, Modal, Button, Dropdown, Notification } from '@hi-ui/hiui'
import axios from 'axios'
import './index.scss'
export default class Template extends Component {
  constructor(props) {
    super(props)

    this.menus = [
      { title: '全部订单' },
      { title: '已完成' },
      { title: '待付款' },
      { title: '已关闭' }
    ]

    this.columnMixins = {
      action: {
        render: (key, row) => (
          <React.Fragment>
            <Link to="/form/form-basic" className="hi-tpl__add">
              <Icon name="edit" />
            </Link>
            <span onClick={this.showDelModal.bind(this, row)} className="action-del">
              <Icon name="close" />
            </span>
            <span className="action-more">
              <Dropdown
                list={[{ title: '打印小票' }]}
                title="更多"
                onClick={val => console.log(val)}
              />
            </span>
          </React.Fragment>
        )
      }
    }

    this.state = {
      pageSize: 0,
      total: 0,
      page: 1,
      tableDatas: [],
      columns: [],
      activeMenu: 0,
      delModal: false
    }
  }

  componentWillMount() {
    this.fetchDatas()
  }

  showDelModal(row) {
    this.setState({
      delModal: row
    })
  }

  cancelEvent() {
    this.setState({
      delModal: false
    })
  }

  delEvent() {
    Notification.open({
      type: 'success',
      title: '订单号为' + this.state.delModal.order_id + '已删除'
    })
    this.setState({
      delModal: false
    })
  }

  fetchDatas(page = 1) {
    axios
      .get(`https://easy-mock.com/mock/5c1b42e3fe5907404e6540e9/hiui/table/group`, {
        params: {
          page,
          status: this.menus[this.state.activeMenu].title
        }
      })
      .then(ret => {
        const datas = []

        if (ret && ret.data.code === 200) {
          const data = ret.data.data
          const columns = data.columns
          const pageInfo = data.pageInfo

          data.data.map(data => {
            datas.push(data)
          })
          this.setState({
            tableDatas: datas,
            page: page,
            total: pageInfo.total,
            pageSize: pageInfo.pageSize,
            columns: this.setTableColumns(columns)
          })
        }
      })
  }

  setTableColumns(columns) {
    const _columns = []

    columns.map(column => {
      const key = column.key

      _columns.push({
        ...column,
        ...this.columnMixins[key]
      })
    })

    return _columns
  }

  changeStatus(status) {
    this.setState(
      {
        activeMenu: status,
        page: 1
      },
      () => {
        this.fetchDatas()
      }
    )
  }

  renderMenuContent() {
    const { tableDatas, columns, pageSize, total, page } = this.state
    let content

    content = (
      <React.Fragment>
        <Table
          columns={columns}
          data={tableDatas}
          pagination={{
            pageSize: pageSize,
            total: total,
            defaultCurrent: page,
            onChange: page => {
              this.setState({ page: page }, () => this.fetchDatas(page))
            }
          }}
        />
      </React.Fragment>
    )

    return content
  }

  render() {
    const Row = Grid.Row
    const Col = Grid.Col
    const { activeMenu } = this.state

    return (
      <div className="page--group-vertical">
        <Row gutter>
          <Col span={3}>
            <NavMenu
              vertical
              selectedKey={activeMenu}
              data={this.menus}
              onClick={(e, menu) => this.changeStatus(parseInt(menu))}
            />
          </Col>
          <Col span={21}>{this.renderMenuContent()}</Col>
        </Row>
        <Modal
          title="确认"
          size="small"
          show={!!this.state.delModal}
          onCancel={this.cancelEvent.bind(this)}
          footers={[
            <Button type="default" key={'cancel'} onClick={this.cancelEvent.bind(this)}>
              取消
            </Button>,
            <Button type="danger" key={'sure'} onClick={this.delEvent.bind(this)}>
              确认
            </Button>
          ]}
        >
          <span>确认要删除订单号为{this.state.delModal.order_id}的订单么？</span>
        </Modal>
      </div>
    )
  }
}
