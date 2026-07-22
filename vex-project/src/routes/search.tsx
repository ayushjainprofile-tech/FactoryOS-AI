import { createFileRoute } from "@tanstack/react-router";
import { SearchPage } from "../components/search/SearchPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/search")({
  component: () => (
    <ProtectedRoute>
      <SearchPage />
    </ProtectedRoute>
  ),
});
