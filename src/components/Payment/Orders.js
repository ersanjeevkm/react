import React, { useState, useEffect } from "react";
import db from "../../firebase";
import "./Orders.css";
import { useStateValue } from "../../store/StateProvider";
import Order from "./Order";
import {
  doc,
  query,
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const ref = collection(db, "users", user?.uid, "orders");
      const orderedOrders = query(ref, orderBy("created", "desc"));
      onSnapshot(orderedOrders, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
