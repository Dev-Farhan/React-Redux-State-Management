import { BsFillTrashFill } from "react-icons/bs";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slice/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.user;
  });
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };
  //   console.log(data);
  return (
    <Wrapper>
      {data.map((value, id) => {
        return (
          <li key={id}>
            {value}
            <button className="btn-delete " onClick={() => deleteUser(id)}>
              <BsFillTrashFill className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

export default DisplayUser;
const Wrapper = styled.div`
li{
    width:100%,
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    border-bottom:1px solid #eee;


}
`;
