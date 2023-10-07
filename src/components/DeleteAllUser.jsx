import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slice/UserSlice";
import styled from "styled-components";
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteUsers());
  };
  return (
    <Wrapper>
      <button className="clear-btn" onClick={deleteAll}>
        clear All
      </button>
      ;
    </Wrapper>
  );
};

export default DeleteAllUser;

const Wrapper = styled.div`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
