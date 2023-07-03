import { Card, CardProps } from 'antd'

const RegularCard = (props: CardProps) => {
  return <Card {...props}>{props.children}</Card>
}

export default RegularCard
