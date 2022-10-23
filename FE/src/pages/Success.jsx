import { useLocation } from "react-router-dom"

const Success = () => {
    const location = useLocation();
    console.log(location);

  return (
    <div>
        Thanh toan thanh cong !
    </div>
  )
}

export default Success
