import { Status } from "./components"

export const CardStatus: React.FC = () => {
  return (
    <div>
      <h3>Pokemon Name</h3>
      <ul>
        <Status attribute="HP" attributeValue={100} />
        <Status attribute="Attack" attributeValue={100} />
        <Status attribute="Defense" attributeValue={100} />
        <Status attribute="Sp. Attack" attributeValue={100} />
        <Status attribute="Sp. Defense" attributeValue={100} />
        <Status attribute="Speed" attributeValue={100} />
      </ul>
      <p>total: {600}</p>
    </div>
  )
}
