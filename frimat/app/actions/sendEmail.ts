"use server";

import { Resend } from "resend";

// Asegúrate de definir RESEND_API_KEY en tu archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !company) {
      return { error: "Faltan campos obligatorios" };
    }

    // IMPORTANTE: En el modo de pruebas de Resend, 'from' debe ser onboarding@resend.dev
    // y 'to' debe ser el correo con el que te registraste en Resend.
    // Cuando agregues tu dominio a Resend, podrás cambiar el 'from' por algo como 'cotizaciones@frimat.cl'
    const { data, error } = await resend.emails.send({
      from: "Frimat Web <onboarding@resend.dev>",
      to: ["mfuentes@frimat.cl"], // Cambia esto por tu correo registrado en Resend temporalmente
      subject: `Nueva Cotización Web - ${company}`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Nueva Solicitud Comercial Web</h2>
          <p><strong>Nombre Completo:</strong> ${name}</p>
          <p><strong>Empresa / Mandante:</strong> ${company}</p>
          <p><strong>Correo Corporativo:</strong> ${email}</p>
          <p><strong>Teléfono Directo:</strong> ${phone || "No indicado"}</p>
          <br/>
          <h3 style="background-color: #f4f4f5; padding: 10px; border-radius: 5px;">Alcance y Envergadura del Proyecto:</h3>
          <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error Resend:", error);
      return { error: "Error al enviar el correo. Intente más tarde." };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Error:", error);
    return { error: "Error de servidor al procesar la solicitud." };
  }
}
