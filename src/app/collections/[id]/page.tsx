import { Suspense } from "react";
import CollectionProductPage from "@/components/section/CollectionPage";

export default function Page() {
  return (
    <Suspense fallback={"Loading..."}>
      <CollectionProductPage />
    </Suspense>
  );
}
