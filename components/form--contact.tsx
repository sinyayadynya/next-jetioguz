import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useSession } from "next-auth/react"

interface FormContactProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string
}

export function FormContact({ className, ...props }: FormContactProps) {
  const { data: session, status } = useSession()
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)

  const { t } = useTranslation()

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
    })

    if (!response.ok) {
      return setFormStatus({
        status: "error",
        message: t("an-red-600-occured-please-try-again"),
      })
    }

    return setFormStatus({
      status: "success",
      message: t("your-message-has-been-sent"),
    })
  }

  return (
    <form
      className={classNames("grid gap-4", className)}
      onSubmit={onSubmit}
      {...props}
    >
      {formStatus?.message && (
        <p
          className={classNames("py-3 px-4 border", {
            "border-green-700 bg-green-700/10 text-green-700":
              formStatus?.status === "success",
            "border-red-600 bg-red-600/10 text-red-600":
              formStatus?.status === "error",
          })}
        >
          {formStatus.message}
        </p>
      )}
      <div className="grid gap-2">
        <label htmlFor="name" className="font-semibold text-text">
          {t("your-name")} <span className="text-sm text-red-500">*</span>
        </label>
        {status === "authenticated" ? (
          <>
            <p>{session?.user.name}</p>
            <input type="hidden" name="mail" value={session?.user.name} />
          </>
        ) : (
          <input
            id="name"
            name="name"
            maxLength={255}
            required
            className="px-2 py-3 border-2 border-gray-500focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-green-700 focus:border-gray-500"
          />
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="mail" className="font-semibold text-text">
          {t("your-email-address")}{" "}
          <span className="text-sm text-red-500">*</span>
        </label>
        {status === "authenticated" ? (
          <>
            <p>{session?.user.email}</p>
            <input type="hidden" name="mail" value={session?.user.email} />
          </>
        ) : (
          <input
            type="email"
            id="mail"
            name="mail"
            maxLength={255}
            required
            className="px-2 py-3 border-2 border-gray-500focus:outline-dotted focus:outline-offset-2 focus:outline-green-700 focus:ring-0 focus:border-gray-500"
          />
        )}
      </div>
      <div className="grid gap-2">
        <label htmlFor="subject" className="font-semibold text-text">
          {t("subject")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          maxLength={255}
          required
          className="px-2 py-3 border-2 border-gray-500focus:outline-dotted focus:outline-offset-2 focus:outline-green-700 focus:border-gray-500"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="font-semibold text-text">
          {t("message")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="h-48 px-2 py-3 border-2 border-gray-500focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray-500focus:outline-green-700"
        ></textarea>
      </div>
      <div>
        <input
          type="submit"
          className="px-6 py-3 font-serif text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-green-700 hover:bg-white hover:text-black border-green-700"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("send-message")
          }
        />
      </div>
    </form>
  )
}
