import React from "react";
import TabsProvider from "./Components/TabsProvider";
import TabNavigation from "./Components/TabNavigation";
import RenderForm from "./Components/RenderForm";
import FormProvider from "./Components/FormProvider";

const MultiTabsFormApp = () => {
  return (
    <div>
      <TabsProvider>
        <FormProvider>
          <TabNavigation />
          <RenderForm />
        </FormProvider>
      </TabsProvider>
    </div>
  );
};

export default MultiTabsFormApp;
