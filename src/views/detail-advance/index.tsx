import { Button, Card, Table, Grid } from '@hi-ui/hiui'
import { PlusOutlined } from '@hi-ui/icons'
import Descriptions from '@hi-ui/descriptions'
import { ContentHeader } from '../../components/content-header'

const { Row, Col } = Grid

const Title: React.FC = ({ children }) => {
  return (
    <div
      style={{
        paddingBottom: 16,
        paddingLeft: 20,
        fontSize: 16,
        color: '#1F2733',
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  )
}

interface CardTitleProps {
  title: string
  extra?: React.ReactNode
}

const CardTitle: React.FC<CardTitleProps> = ({ title, extra }) => {
  return (
    <div
      style={{
        paddingBottom: 14,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          fontSize: 14,
          color: '#1F2733',
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      {extra && <div>{extra}</div>}
    </div>
  )
}

export const DetailAdvance = () => {
  return (
    <div>
      <ContentHeader
        breadcrumbs={[
          {
            title: '首页',
            path: 'home',
          },
          {
            title: '高级详情页',
          },
        ]}
        title="高级详情页"
        toolbar={
          <div>
            <Button>次要操作</Button>
            <Button>次操作</Button>
            <Button icon={<PlusOutlined />} type="primary">
              主操作
            </Button>
          </div>
        }
      />
      <div style={{ padding: '20px 20px 83px' }}>
        <div style={{ marginBottom: 32 }}>
          <Title>基础信息</Title>
          <Card bordered={false}>
            <CardTitle title="机构概况" />
            <Descriptions appearance="table" labelPlacement="right" noBackground>
              <Descriptions.Item label="机构类型">第三方网点</Descriptions.Item>
              <Descriptions.Item label="主子站">主站</Descriptions.Item>
              <Descriptions.Item label="机构状态">有效</Descriptions.Item>
              <Descriptions.Item label="机构名称">2.5级</Descriptions.Item>
              <Descriptions.Item label="仓库类型">无库存</Descriptions.Item>
              <Descriptions.Item label="WMS发货仓">--</Descriptions.Item>
              <Descriptions.Item label="生效价格">2022/02/28</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
        <div style={{ marginBottom: 32 }}>
          <Title>资质信息</Title>
          <Card bordered={false} style={{ marginBottom: 8 }}>
            <CardTitle title="负责人信息" />
            <Descriptions appearance="table" labelPlacement="right" noBackground>
              <Descriptions.Item label="负责人">张三</Descriptions.Item>
              <Descriptions.Item label="网点经理">李四</Descriptions.Item>
              <Descriptions.Item label="紧急联系人">王五</Descriptions.Item>
              <Descriptions.Item label="负责人电话">18088886666</Descriptions.Item>
              <Descriptions.Item label="网点经理电话">18088886666</Descriptions.Item>
              <Descriptions.Item label="紧急联系人电话">18088886666</Descriptions.Item>
              <Descriptions.Item label="负责人身份证">420100200001011111</Descriptions.Item>
              <Descriptions.Item label="网点经理身份证" span={2}>
                420100200001011111
              </Descriptions.Item>
              <Descriptions.Item label="负责人身份证照片">xxxxx</Descriptions.Item>
            </Descriptions>
          </Card>
          <Card bordered={false}>
            <CardTitle title="企业信息" />
            <Descriptions appearance="table" labelPlacement="right" noBackground>
              <Descriptions.Item label="企业性质">民营企业</Descriptions.Item>
              <Descriptions.Item label="注册资金">1000万</Descriptions.Item>
              <Descriptions.Item label="工商注册号">535345628999</Descriptions.Item>
              <Descriptions.Item label="工商营业期限">10年</Descriptions.Item>
              <Descriptions.Item label="税务有效期">2022/12/31</Descriptions.Item>
              <Descriptions.Item label="门店租期">2022/12/31</Descriptions.Item>
              <Descriptions.Item label="营业执照">xxxx</Descriptions.Item>
              <Descriptions.Item label="租房合同扫描件">xxxx</Descriptions.Item>
              <Descriptions.Item label="装修文件">xxxx</Descriptions.Item>
              <Descriptions.Item label="租房合同扫描件">xxxxx</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
        <div style={{ marginBottom: 32 }}>
          <Title>营业信息</Title>
          <Row>
            <Col span={24}>
              <Card bordered={false} style={{ marginBottom: 12 }}>
                <CardTitle title="地址信息" />
                <Descriptions appearance="table" labelPlacement="right" noBackground column={2}>
                  <Descriptions.Item label="营业地址">张三</Descriptions.Item>
                  <Descriptions.Item label="实际使用面积">180㎡</Descriptions.Item>
                  <Descriptions.Item label="前往方式">
                    地铁11号线光谷四路站B2出口出门直行1.5公里
                  </Descriptions.Item>
                  <Descriptions.Item label="店面面积">200㎡</Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Card bordered={false}>
                <CardTitle title="门店信息" />
                <Descriptions appearance="table" labelPlacement="right" noBackground column={2}>
                  <Descriptions.Item label="营业时间">9:00-18:00</Descriptions.Item>
                  <Descriptions.Item label="单日上门最大值">200</Descriptions.Item>
                  <Descriptions.Item label="到店预约值" span={2}>
                    <Table
                      columns={[
                        {
                          title: '窗口名称',
                          dataKey: 'name',
                        },
                        {
                          title: '周一',
                          dataKey: 'mon',
                        },
                        {
                          title: '周二',
                          dataKey: 'tue',
                        },
                        {
                          title: '周三',
                          dataKey: 'wen',
                        },
                        {
                          title: '周四',
                          dataKey: 'thu',
                        },
                        {
                          title: '周五',
                          dataKey: 'fri',
                        },
                        {
                          title: '周六',
                          dataKey: 'sat',
                        },
                      ]}
                      data={[
                        {
                          name: '9:00-10:00',
                          mon: '20',
                          tue: '20',
                          wen: '20',
                          thu: '20',
                          fri: '20',
                          sat: '20',
                          key: 1,
                        },
                        {
                          name: '9:00-10:00',
                          mon: '20',
                          tue: '20',
                          wen: '20',
                          thu: '20',
                          fri: '20',
                          sat: '20',
                          key: 1,
                        },
                        {
                          name: '9:00-10:00',
                          mon: '20',
                          tue: '20',
                          wen: '20',
                          thu: '20',
                          fri: '20',
                          sat: '20',
                          key: 1,
                        },
                      ]}
                    ></Table>
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{ marginBottom: 32 }}>
          <Row>
            <Col span={24}>
              <Title>服务范围</Title>
              <Card bordered={false} style={{ marginBottom: 8 }}>
                <CardTitle title="反馈信息" />
                <Descriptions appearance="table" labelPlacement="right" noBackground>
                  <Descriptions.Item label="机构子类型">普通网点形象店</Descriptions.Item>
                  <Descriptions.Item label="网点标识">--</Descriptions.Item>
                  <Descriptions.Item label="归属服务渠道">上门渠道</Descriptions.Item>
                  <Descriptions.Item label="服务方式">上门、送修、寄修</Descriptions.Item>
                  <Descriptions.Item label="额度系统等级">
                    C（机头系数2，物料系数3）
                  </Descriptions.Item>
                  <Descriptions.Item label="叫号系统">未知</Descriptions.Item>
                  <Descriptions.Item label="BBSID">00:00:00</Descriptions.Item>
                  <Descriptions.Item label="网点经理身份证" span={2}>
                    420100200001011111
                  </Descriptions.Item>
                  <Descriptions.Item label="负责人身份证照片">xxxxx</Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
