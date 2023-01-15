import React from "react";
import { OrderContainer } from "../KitchenPageElements";
import OrderCard from "../../../components/kitchen/OrderCard/OrderCard";

function CompletedPage() {
  return (
    <OrderContainer>
      <OrderCard
        open={false}
        id={2321}
        datetime={new Date()}
        items={[
          { "qty": 1, "name": "Shoyu Ramen", "modifiers": ["Less sugar"] },
        ]}
      />
    </OrderContainer>
  );
}

export default CompletedPage;
