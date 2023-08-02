import userPhoto from "../../image/user-photo.jpg"
import * as S from "./userMenu.styles"

export const UserMenu: React.FC = () => {
  return (
    <S.ContainerUser>
      <S.ContainerUserImg>
        <img src={userPhoto} alt="User Photo" />
      </S.ContainerUserImg>
      <p>User Name</p>
      <div>
        <button>My Profile</button>
      </div>
    </S.ContainerUser>
  )
}
