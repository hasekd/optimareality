import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";

import ForSaleContact from "@/components/ForSalePage/ForSaleContact";
import GuaranteeSection from "@/components/ForSalePage/GuaranteeSection";

const ForSalePage = () => {
  return (
    <Layout>
      <ForSaleContact />
      <GuaranteeSection />
    </Layout>
  );
};

export default ForSalePage;
