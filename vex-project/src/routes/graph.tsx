import { createFileRoute } from "@tanstack/react-router";
import { GraphPage } from "../components/graph/GraphPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/graph")({
  component: () => (
    <ProtectedRoute allowedRoles={["admin", "engineer"]}>
      <GraphPage />
    </ProtectedRoute>
  ),
});
