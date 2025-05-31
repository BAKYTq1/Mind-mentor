import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../redux/Users/Users";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users.data));
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      {users.length === 0 ? (
        <div>Нет пользователей</div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            {user.firstName} {user.secondName} — {user.email} - {user.countBuy}
          </div>
        ))
      )}
    </div>
  );
};

export default UsersList;
