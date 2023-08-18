interface IProps {
  attribute: string
  attributeValue: number
}

export const Status: React.FC<IProps> = ({ attribute, attributeValue }) => {
  return (
    <li>
      <p>{attribute}</p>
      <p>{attributeValue}</p>
      <div></div>
    </li>
  )
}
