import ErrorMessage from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      title="404 Página não encontrada"
      pageTitle="Erro 404 página não encontrada"
      message="Está página não existe"
    />
  );
}
