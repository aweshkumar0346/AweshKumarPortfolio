import Image from "next/image";
import Icon from "@/components/Icon";
import { PageHead } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import { PROFILE } from "@/data/portfolio";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHead crumb={[[null, "Contact"]]} title="Contact" sub="Hiring, a freelance project or just a question — I'd love to hear from you." />
      <div className="page-body"><div className="wrap">
        <div className="cbox reveal"><div className="cgrid">
          <div>
            <Image className="avatar" src={PROFILE.photo} alt="" width={84} height={84} />
            <h2>Let&apos;s build something reliable.</h2>
            <p className="sub">Open to remote, backend and full-stack roles, freelance work and interesting fintech problems.</p>
            <p className="mail">{PROFILE.email}</p>
            <CopyEmail email={PROFILE.email} />
            <div className="socials">
              <a className="social" href={PROFILE.linkedin} target="_blank" rel="noopener"><Icon n="link" />LinkedIn</a>
              <a className="social" href={PROFILE.github} target="_blank" rel="noopener"><Icon n="git" />GitHub</a>
              <a className="social" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}><Icon n="phone" />{PROFILE.phone}</a>
              <a className="social" href={PROFILE.resume} download><Icon n="download" />Download CV</a>
            </div>
          </div>
          <ContactForm />
        </div></div>
      </div></div>
    </>
  );
}
