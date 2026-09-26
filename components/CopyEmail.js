"use client";
import { useState } from "react";
import Icon from "./Icon";

export default function CopyEmail({ email }) {
  const [note, setNote] = useState("");
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setNote("✓ Email copied to clipboard."); }
    catch { setNote("Couldn't copy automatically — select the address above instead."); }
    setTimeout(() => setNote(""), 3000);
  };
  return (
    <>
      <div className="actions"><button className="btn" onClick={copy}><Icon n="copy" />Copy email</button></div>
      <p className="note" aria-live="polite">{note}</p>
    </>
  );
}
