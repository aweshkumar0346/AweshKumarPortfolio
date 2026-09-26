"use client";
import { useState } from "react";
import Icon from "./Icon";
import { PROFILE, PURPOSES } from "@/data/portfolio";

const EMPTY = { name: "", email: "", phone: "", purpose: "job", message: "" };
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [v, setV] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [status, setStatus] = useState(""); // "", "sending", "sent", "error", "email", "WhatsApp"

  const set = (k) => (e) => {
    setV({ ...v, [k]: e.target.value });
    if (errs[k]) setErrs({ ...errs, [k]: "" });
  };

  const validate = () => {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email, like name@company.com.";
    if (v.phone.trim() && !/^\+?[\d\s\-()]{7,20}$/.test(v.phone.trim())) e.phone = "Use digits only, e.g. +92 300 1234567.";
    if (v.message.trim().length < 10) e.message = "Add a short message (at least 10 characters).";
    setErrs(e);
    if (Object.keys(e).length) {
      setTimeout(() => { const el = document.querySelector(".field.bad input, .field.bad textarea"); el && el.focus(); }, 0);
      return false;
    }
    return true;
  };

  const label = (PURPOSES.find((p) => p[0] === v.purpose) || PURPOSES[0])[2];
  const body = `Hi Awesh,\n\n${v.message.trim()}\n\n— ${v.name.trim()}\nEmail: ${v.email.trim()}${v.phone.trim() ? `\nPhone: ${v.phone.trim()}` : ""}\nPurpose: ${label}`;
  const subject = `${label} — from ${v.name.trim() || "your portfolio"}`;
  const mailHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const waHref = `https://wa.me/${PROFILE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`*${label}*\n\n` + body)}`;

  // Direct delivery through Formspree (only when NEXT_PUBLIC_FORMSPREE_ID is set)
  const submit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ID || !validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: v.name, email: v.email, phone: v.phone, purpose: label, message: v.message, _subject: subject }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent"); setV(EMPTY);
    } catch { setStatus("error"); }
  };

  const go = (channel) => (e) => {
    if (!validate()) { e.preventDefault(); return; }
    setStatus(channel);
  };

  const Field = (k, lbl, type, ph, opt) => (
    <div className={"field" + (errs[k] ? " bad" : "")}>
      <label htmlFor={"f-" + k}>{lbl}{opt ? <> <span className="opt">(optional)</span></> : null}</label>
      <input id={"f-" + k} type={type} value={v[k]} onChange={set(k)} placeholder={ph}
        autoComplete={k === "name" ? "name" : k === "email" ? "email" : "tel"}
        aria-invalid={!!errs[k]} aria-describedby={"e-" + k} />
      <span className="err" id={"e-" + k}>{errs[k]}</span>
    </div>
  );

  return (
    <form className="form" noValidate onSubmit={submit}>
      <h3>Send me a message</h3>
      <p className="hint">Tell me who you are and why you&apos;re reaching out. I usually reply within a day.</p>
      <div className="row2">{Field("name", "Full name", "text", "Ayesha Khan")}{Field("email", "Email", "email", "ayesha@company.com")}</div>
      {Field("phone", "Phone number", "tel", "+92 300 1234567", true)}

      <fieldset className="field">
        <legend>Purpose of contact</legend>
        <div className="purposes">
          {PURPOSES.map(([id, emo, txt]) => (
            <label className="purpose" key={id}>
              <input type="radio" name="purpose" value={id} checked={v.purpose === id} onChange={set("purpose")} />
              <span><span aria-hidden="true">{emo}</span>{txt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={"field" + (errs.message ? " bad" : "")}>
        <label htmlFor="f-message">Message</label>
        <textarea id="f-message" value={v.message} onChange={set("message")} maxLength={1000}
          placeholder={v.purpose === "job" ? "Role, team and location — and a link to the job post if you have one."
            : v.purpose === "freelance" ? "What you want built, rough timeline and budget." : "What's on your mind?"}
          aria-invalid={!!errs.message} aria-describedby="e-message" />
        <span className="count">{v.message.length}/1000</span>
        <span className="err" id="e-message">{errs.message}</span>
      </div>

      <div className="send">
        {FORMSPREE_ID ? (
          <button type="submit" className="btn primary" disabled={status === "sending"}>
            <Icon n="send" />{status === "sending" ? "Sending…" : "Send message"}
          </button>
        ) : (
          <a className="btn primary" href={mailHref} target="_blank" rel="noopener" onClick={go("email")}><Icon n="mail" />Send via email</a>
        )}
        <a className="btn wa" href={waHref} target="_blank" rel="noopener" onClick={go("WhatsApp")}><Icon n="phone" />Send via WhatsApp</a>
      </div>

      {status === "sent" && <div className="sent" role="status">✓ Message sent. Thanks — I&apos;ll get back to you soon.</div>}
      {status === "error" && <div className="form-status error" role="alert">The message didn&apos;t send. Check your connection and try again, or use WhatsApp.</div>}
      {(status === "email" || status === "WhatsApp") && <div className="sent" role="status">✓ Your message is ready in {status}. Press send there and I&apos;ll get back to you soon.</div>}
      {!status && <p className="fine">{FORMSPREE_ID ? "Your message comes straight to my inbox." : "Your message opens pre-filled in your email app or WhatsApp."}</p>}
    </form>
  );
}
