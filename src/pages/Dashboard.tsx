import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const data = await fetch(url);
      const json = await data.json();
      setData(json);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="success" />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <p> Total data{data?.length}</p>
                {isLoading ? (
                  <h2>Loading...</h2>
                ) : (
                  data.map((post: any, index) => (
                    <IonItem key={index}>
                      <IonLabel>{post.title}</IonLabel>
                    </IonItem>
                  ))
                )}
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
