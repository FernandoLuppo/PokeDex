import * as S from "./exit.styles"
import { useNavigate } from "react-router-dom"
import { BsArrowBarLeft } from "react-icons/bs"

export const Exit: React.FC = () => {
  const navigate = useNavigate()
  return (
    <S.ContainerExit
      onClick={() => {
        navigate("/")
      }}
    >
      <BsArrowBarLeft size={window.innerWidth > 1000 ? 25 : 20} />
      <span>Home</span>
    </S.ContainerExit>
  )
}
