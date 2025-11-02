"use client"

import React from "react"
import Link from "next/link"
import {
  Github,
  Instagram,
  Twitter,
} from "lucide-react"

export default function FooterContact() {
  const [pending, setPending] = React.useState(false)
  const [status, setStatus] = React.useState<null | { ok: boolean; message: string }>(null)
  const socials = [
    { href: "https://github.com/Niranjan753", label: "GitHub", icon: Github },
    { href: "https://www.instagram.com/berlified/", label: "Instagram", icon: Instagram },
    { href: "https://x.com/ftw_berlin", label: "X", icon: Twitter },


  ]

  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Left copy */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Get in Touch</h2>
              <p className="mt-3 text-muted-foreground">
                If you have any inquiries, feel free to reach out. You can contact me via email at
              </p>
              <p className="mt-2">
                <a className="text-blue-600 hover:underline" href="mailto:niranjanr753@gmail.com">niranjanr753@gmail.com</a>
              </p>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground">Follow me</div>
              <div className="mt-3 flex flex-wrap gap-3">
                {socials.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="h-10 w-10 rounded-md border text-muted-foreground inline-flex items-center justify-center hover:bg-secondary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
                {/* Example of an extra icon to mirror inspiration */}
              </div>
            </div>
          </div>

          {/* Right form */}
          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault()
              if (pending) return
              setPending(true)
              setStatus(null)
              const form = e.currentTarget as HTMLFormElement
              const formData = new FormData(form)
              const payload = {
                name: String(formData.get("name") || ""),
                email: String(formData.get("email") || ""),
                message: String(formData.get("message") || ""),
              }
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(payload),
                })
                const data = await res.json().catch(() => ({}))
                if (!res.ok || !data?.ok) {
                  throw new Error(data?.error || "Failed to send message")
                }
                setStatus({ ok: true, message: "Message sent! I'll get back to you." })
                form.reset()
              } catch (err: any) {
                setStatus({ ok: false, message: err?.message || "Something went wrong" })
              } finally {
                setPending(false)
              }
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="h-11 rounded-md border bg-transparent px-3 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Full Name"
                name="name"
                autoComplete="name"
              />
            </div>
            <input
              className="h-11 w-full rounded-md border bg-transparent px-3 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Email"
              name="email"
              type="email"
              autoComplete="email"
            />
            <textarea
              className="min-h-32 w-full rounded-md border bg-transparent px-3 py-2 placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Message"
              name="message"
              rows={6}
            />
            <button
              type="submit"
              className="w-full h-11 rounded-md bg-foreground text-background font-medium hover:opacity-90 disabled:opacity-60"
              disabled={pending}
            >
              {pending ? "Sending..." : "Submit"}
            </button>
            {status && (
              <div
                className={
                  status.ok
                    ? "text-sm text-green-500"
                    : "text-sm text-red-500"
                }
              >
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </footer>
  )
}
