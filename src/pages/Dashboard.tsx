import { IonItem, IonLabel } from "@ionic/react";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const data = await fetch(url);
      const json = await data.json();
      setData(json);
    };
    loadData();
  }, []);

  console.log(data);
  return (
    <div>
      <div>Dashboard</div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut in
        perferendis reprehenderit eius autem quibusdam ipsam harum, alias, amet
        optio tempora tenetur sequi, fuga velit iure! Architecto animi unde
        expedita?
      </p>
      <h2> Total data{data?.length}</h2>
      {data &&
        data?.map((post: any, index) => (
          <IonItem key={index}>
            <IonLabel>{post.title}</IonLabel>
          </IonItem>
        ))}
    </div>
  );
};

export default Dashboard;
