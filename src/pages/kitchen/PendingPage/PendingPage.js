import React from "react";
import { OrderContainer } from "../KitchenPageElements";
import OrderCard from "../../../components/kitchen/OrderCard/OrderCard";

function PendingPage() {
  return (
    <OrderContainer>
      <OrderCard
        open={true}
        id={2321}
        datetime={new Date()}
        items={[
          { "qty": 1, "name": "Shoyu Ramen", "modifiers": ["Less salty"] },
        ]}
      />
      <OrderCard
        open={true}
        id={2322}
        datetime={new Date()}
        items={[
          { "qty": 2, "name": "Yakiniku", "modifiers": ["More meat"] },
          { "qty": 2, "name": "Chawanmushi", "modifiers": [] },
        ]}
      />
      <OrderCard
        open={true}
        id={2323}
        datetime={new Date()}
        items={[
          { "qty": 2, "name": "Chicken Bento", "modifiers": ["More rice"] },
          { "qty": 2, "name": "Miso Soup", "modifiers": [] },
        ]}
      />
      <OrderCard
        open={true}
        id={2324}
        datetime={new Date()}
        items={[
          { "qty": 1, "name": "Moeru Ramen", "modifiers": ["Less spicy"] },
        ]}
      />
    </OrderContainer>
  );
}

export default PendingPage;
