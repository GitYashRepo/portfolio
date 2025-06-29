"use server"

import React from "react"
import { Resend } from "resend"
import { validateString, getErrorMessage } from "@/lib/utils"
import ContactFormEmail from "@/email/contact-form-email"

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  // Check if API key is available
  if (!process.env.RESEND_API_KEY) {
    return {
      error: "Email service is not configured. Please contact the administrator.",
    }
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    }
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  let data
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "singhyash3012@gmail.com",
      subject: "Message from Portfolio Contact Form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}
