import {
  IonAccordion,
  IonAccordionGroup,
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
            <IonRow>
              <IonCol size="12">
                <IonAccordionGroup expand="inset">
                  <IonAccordion value="first">
                    <IonItem slot="header" color="rose">
                      <IonLabel>First Accordion Button</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      First Content Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Eum ipsa sequi eligendi magni et, quos
                      ad necessitatibus. Quod modi ipsam doloremque maiores
                      necessitatibus. Quas, soluta quaerat quisquam accusamus
                      unde numquam!
                    </div>
                  </IonAccordion>
                  <IonAccordion value="second">
                    <IonItem slot="header" color="rose">
                      <IonLabel>Second Accordion Button</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      Second Content Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Cumque omnis sed maxime nobis quam
                      distinctio ipsam beatae? Ex dignissimos, itaque pariatur
                      eos, recusandae dolorum deleniti libero beatae,
                      perferendis placeat voluptate.
                    </div>
                  </IonAccordion>
                  <IonAccordion value="third">
                    <IonItem slot="header" color="rose">
                      <IonLabel>Third Accordion Button</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      Third Content
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Home;
