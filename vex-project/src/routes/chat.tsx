import { createFileRoute } from "@tanstack/react-router";
import { ChatPage } from "../components/chat/ChatPage";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";

export const Route = createFileRoute("/chat")({
  component: () => (
    <ProtectedRoute>
      <ChatPage />
    </ProtectedRoute>
  ),
});
