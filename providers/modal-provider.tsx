"use client";

import { useEffect, useState } from "react";
import StoreModal from "@/components/modal/store.modal";

export default function ModalProfider() {
  const [isMointed, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMointed) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
}
