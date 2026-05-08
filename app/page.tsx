export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12 font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto w-full max-w-4xl rounded-xl bg-white p-8 shadow-sm dark:bg-zinc-900 sm:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg font-medium text-zinc-800 dark:text-zinc-200">
          Sibonelo
        </p>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Effective date: 8 May 2026 · Last updated: 8 May 2026
        </p>

        <p className="mt-6">
          This Privacy Policy describes how we collect, use, disclose, and
          safeguard information when you use the Sibonelo app (&quot;
          <strong>App</strong>&quot;). We publish this policy so you can
          understand our practices in one clear, accessible place.
        </p>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">1. Who we are</h2>
          <p>
            The App is operated by{" "}
            <strong>[Legal entity name / developer name]</strong> (&quot;
            <strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, &quot;
            <strong>our</strong>&quot;).
          </p>
          <p>
            Depending on your setup, <strong>your organisation</strong> (for
            example your SACCO or employer) may act as{" "}
            <strong>data controller</strong> for member data, and we may process
            personal data as a <strong>processor</strong> or{" "}
            <strong>service provider</strong> on their behalf. Where we act as
            controller for certain technical or account data, we describe that
            below.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Contact (privacy):</strong>{" "}
              <a
                className="text-blue-600 underline decoration-blue-600/30 hover:decoration-blue-600 dark:text-blue-400"
                href="mailto:vote@sibonelo.org.sz"
              >
                vote@sibonelo.org.sz
              </a>
            </li>
            <li>
              <strong>Postal address (optional):</strong> Plot 6 & 7 Erf No.368, Mahleka Street, P.O. Box 4307, Manzini
            </li>
          </ul>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">2. Scope</h2>
          <p>
            This policy applies to the Sibonelo App and related services we
            provide in connection with the App. It does not apply to
            third-party websites or services we link to.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">3. Information we collect</h2>
          <p>
            We collect information that you provide, that is generated when you
            use the App, and that comes from your device as needed to run the
            service.
          </p>

          <h3 className="text-xl font-semibold">3.1 Account and profile information</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name, email address, phone number</li>
            <li>Membership or account identifiers (for example membership number)</li>
            <li>Organisation or company association</li>
            <li>
              Authentication credentials (passwords are stored using secure
              practices; we do not store plaintext passwords in readable form
              where hashing applies)
            </li>
          </ul>

          <h3 className="text-xl font-semibold">
            3.2 App usage and election-related data
          </h3>
          <p>Subject to your organisation&apos;s configuration:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Participation in <strong>elections</strong>,{" "}
              <strong>nominations</strong>, and <strong>voting</strong>
            </li>
            <li>
              Records associated with eligibility (for example registration or
              attendance flags as configured by your organisation)
            </li>
            <li>
              Timestamps and audit-style records needed to operate elections
              fairly
            </li>
          </ul>

          <h3 className="text-xl font-semibold">3.3 Device and technical data</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Device type, operating system version, and app version</li>
            <li>IP address and approximate connection diagnostics</li>
            <li>
              Crash logs or performance data used to maintain reliability and
              security
            </li>
            <li>
              Push notification tokens <strong>if</strong> you enable
              notifications
            </li>
          </ul>

          <h3 className="text-xl font-semibold">3.4 Optional features</h3>
          <p>
            If you enable optional features (for example notifications), we
            process only what is needed for those features.
          </p>
          <p>
            We <strong>do not</strong> knowingly collect precise location (GPS)
            through this policy&apos;s scope unless we explicitly tell you
            otherwise in the App and update this policy.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">4. How we use your information</h2>
          <p>We use information to:</p>
          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-700">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr>
                  <td className="px-4 py-3 align-top">Provide the App</td>
                  <td className="px-4 py-3">
                    Sign-in, profiles, organisation-specific content
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">Elections</td>
                  <td className="px-4 py-3">
                    Nominations, voting, results display as configured
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">Security</td>
                  <td className="px-4 py-3">
                    Fraud prevention, abuse detection, protecting accounts
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">Support</td>
                  <td className="px-4 py-3">
                    Responding to requests via in-app contact
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">Compliance</td>
                  <td className="px-4 py-3">
                    Legal obligations and organisational rules
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 align-top">Improvements</td>
                  <td className="px-4 py-3">
                    Stability, diagnostics, and understanding aggregate usage
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We <strong>do not sell your personal information</strong>.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">5. Legal bases (where applicable)</h2>
          <p>
            If you are in the <strong>European Economic Area (EEA)</strong>,{" "}
            <strong>UK</strong>, or similar jurisdictions, we rely on one or more
            of:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Performance of a contract</strong> — providing the App
              and features you request
            </li>
            <li>
              <strong>Legitimate interests</strong> — security, fraud prevention,
              improving reliability (balanced against your rights)
            </li>
            <li>
              <strong>Consent</strong> — where we ask explicitly (for example
              optional notifications)
            </li>
            <li>
              <strong>Legal obligation</strong> — where the law requires processing
            </li>
          </ul>
          <p>
            Your organisation may rely on additional bases for member processing;
            see their notices where relevant.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">6. Sharing of information</h2>
          <p>We may share information with:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Your organisation</strong> — administrators and systems
              they operate
            </li>
            <li>
              <strong>Service providers</strong> — hosting, infrastructure,
              analytics or crash reporting, email or messaging, as strictly needed
              to run the App (<strong>subprocessors</strong>)
            </li>
            <li>
              <strong>Authorities</strong> — when required by law or valid legal
              process
            </li>
          </ul>
          <p>
            We require service providers to protect personal data appropriately
            and use it only for the purposes we specify.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">7. International transfers</h2>
          <p>
            If personal data is transferred outside your country (for example to
            servers in another region), we take steps required by applicable law
            (such as appropriate safeguards or contractual clauses).
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">8. Retention</h2>
          <p>We retain personal data only as long as necessary to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide the App and features</li>
            <li>Meet legal, regulatory, or organisational retention requirements</li>
            <li>Resolve disputes and enforce our terms</li>
          </ul>
          <p>
            Retention periods may be set by your organisation&apos;s policies as
            well as ours.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">9. Security</h2>
          <p>
            We use technical and organisational measures designed to protect
            personal data, including encryption in transit where appropriate,
            access controls, and secure handling of credentials. No method of
            transmission or storage is 100% secure; we work to reduce risk in line
            with industry practice.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">10. Your rights and choices</h2>
          <p>Depending on where you live, you may have rights to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Access</strong> a copy of your personal data
            </li>
            <li>
              <strong>Correct</strong> inaccurate data
            </li>
            <li>
              <strong>Delete</strong> certain data, subject to legal exceptions
            </li>
            <li>
              <strong>Object</strong> to or <strong>restrict</strong> certain
              processing
            </li>
            <li>
              <strong>Withdraw consent</strong> where processing is consent-based
            </li>
            <li>
              <strong>Lodge a complaint</strong> with a supervisory authority
            </li>
          </ul>
          <p>
            To exercise rights, use <strong>Contact us</strong> in the App or
            email{" "}
            <a
              className="text-blue-600 underline decoration-blue-600/30 hover:decoration-blue-600 dark:text-blue-400"
              href="mailto:vote@sibonelo.org.sz"
            >
             vote@sibonelo.org.sz
            </a>
            . Your organisation may also handle certain requests as controller.
          </p>

          <h3 className="text-xl font-semibold">Android settings</h3>
          <p>
            You can manage App permissions in{" "}
            <strong>Android Settings → Apps → Sibonelo → Permissions</strong>.
            You may uninstall the App at any time.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">11. Children&apos;s privacy</h2>
          <p>
            The App is <strong>not directed at children</strong> for whom the
            service is inappropriate under local law (for example financial or
            membership services). We do not knowingly collect personal information
            from children below the minimum age required by law for such services.
            If you believe we have collected data from a child in error, contact
            us and we will take appropriate steps.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">12. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the
            updated policy at{" "}
            <strong>[https://your-domain.com/privacy-policy]</strong> and revise
            the &quot;Last updated&quot; date. For material changes, we may
            provide additional notice (for example in the App), where required by
            law.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">13. Third-party platforms</h2>
          <p>
            If you download or update the App through an app marketplace, your
            device vendor, marketplace operator, or network provider may collect
            information according to their own policies. Those practices are not
            governed by this Privacy Policy.
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">14. Contact us</h2>
          <p>For privacy questions or requests:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Email:</strong>{" "}
              <a
                className="text-blue-600 underline decoration-blue-600/30 hover:decoration-blue-600 dark:text-blue-400"
                href="mailto:vote@sibonelo.org.sz"
              >
                vote@sibonelo.org.sz
              </a>
            </li>
            <li>
              <strong>In-app:</strong> Contact / Support section within Sibonelo
            </li>
          </ul>
        </section>

        <p className="mt-10 border-t border-zinc-200 pt-8 text-sm italic text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
          This document is provided as a template for publication and general
          transparency. It does not constitute legal advice. Have it reviewed by
          counsel for your jurisdiction and your organisation&apos;s
          requirements.
        </p>
      </main>
    </div>
  );
}
