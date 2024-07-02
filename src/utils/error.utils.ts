import sendNotification from "./notification.utils";

export const validateErrorStatus = (
  error: any,
  api: string,
  method: string
) => {
  if (error.response.data) {
    const { statusCode, message } = error.response.data;

    if (statusCode === 404)
      return sendNotification(
        "error",
        `${api}/${method}: Não encontrado`,
        statusCode
      );

    return sendNotification(
      "error",
      `${api}/${method}: ${message}`,
      statusCode
    );
  }
  return sendNotification("error", `${api}/${method}: Erro desconhecido`);
};
