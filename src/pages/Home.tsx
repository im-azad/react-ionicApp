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
  IonSearchbar,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from "@ionic/react";
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import React, { useState } from "react";

const Home = () => {
  const [present] = useIonActionSheet();
  const [result, setResult] = useState<OverlayEventDetail>();
  return (
    <div className="container">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton color="success" />
            </IonButtons>
            <IonTitle color="primary">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <IonTitle>Input</IonTitle>
          <IonSearchbar
            color="secondary"
            placeholder="Secondary"
          ></IonSearchbar>
          <IonGrid>
            <IonRow>
              <IonTitle>Button </IonTitle>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonButton>Ion Button</IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  onClick={() =>
                    present({
                      header: "Example header",
                      subHeader: "Example subheader",
                      buttons: [
                        {
                          text: "Delete",
                          role: "destructive",
                          data: {
                            action: "delete",
                          },
                        },
                        {
                          text: "Share",
                          data: {
                            action: "share",
                          },
                        },
                        {
                          text: "Cancel",
                          role: "cancel",
                          data: {
                            action: "cancel",
                          },
                        },
                      ],
                      onDidDismiss: ({ detail }) => setResult(detail),
                    })
                  }
                >
                  Open
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
