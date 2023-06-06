import * as React from "react"
import classNames from "classnames"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"

interface FormArticleProps extends React.HTMLProps<HTMLFormElement> {}

interface FormStatus {
  status: "success" | "error" | "fetching"
  message?: string | string[]
}

export function FormArticle({ className, ...props }: FormArticleProps) {
  const [formStatus, setFormStatus] = React.useState<FormStatus>(null)
  const { t } = useTranslation()
  const router = useRouter()

  const onSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    setFormStatus({ status: "fetching" })

    const response = await fetch("/api/articles", {
      method: "POST",
      body: data,
    })

    if (!response.ok) {
      const errors = await response.json()

      return setFormStatus({
        status: "error",
        message: errors?.map((error) => error.detail),
      })
    }

    router.push("/account")
  }

  return (
    <form
      className={classNames("grid gap-4", className)}
      onSubmit={onSubmit}
      {...props}
    >
      {(formStatus?.status === "success" || formStatus?.status === "error") && (
        <div
          className={classNames("py-3 px-4 border", {
            "border-green-700 bg-green-700/10 text-green-700": formStatus.status === "success",
            "border-red-600 bg-red-600/10 text-red-600":
              formStatus.status === "error",
          })}
        >
          {Array.isArray(formStatus.message) ? (
            <ul className="list-disc list-inside list">
              {formStatus.message.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          ) : (
            formStatus.message
          )}
        </div>
      )}
      <div className="grid gap-2">
        <label htmlFor="title" className="font-semibold text-text">
          {t("title")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          maxLength={255}
          required
          className="px-2 py-3 border-2 border-gray-500focus:outline-dotted focus:outline-offset-2 focus:ring-0 focus:outline-green-700 focus:border-gray-500"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="mail" className="font-semibold text-text">
          {t("image")} <span className="text-sm text-red-500">*</span>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          required
          className="px-2 py-3 bg-white border-2 border-gray-500 focus:outline-dotted focus:outline-offset-2 focus:outline-green-700 focus:ring-0 focus:border-gray-500"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="body" className="font-semibold text-text">
          {t("body")} <span className="text-sm text-red-500">*</span>
        </label>
        <textarea
          id="body"
          name="body"
          required
          className="h-48 px-2 py-3 border-2 border-gray-500focus:ring-0 focus:outline-dotted focus:outline-offset-2 focus:border-gray-500focus:outline-green-700"
        ></textarea>
      </div>
      <div>
        <input
          type="submit"
          className="px-6 py-3 font-heading text-xl text-white transition-colors border-2 rounded-sm cursor-pointer bg-green-700 hover:bg-white hover:text-black border-green-700"
          disabled={formStatus?.status === "fetching"}
          value={
            formStatus?.status === "fetching"
              ? t("please-wait")
              : t("create-article")
          }
        />
      </div>
    </form>
  )
}
