import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import {
  COMPANY_INFO,
  INQUIRY_OPTIONS,
  InquiryType,
} from '../data/ameraldData';

interface ContactSectionProps {
  selectedInquiryType?: InquiryType;
  prefilledNote?: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: InquiryType;
  message: string;
  gotcha: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const FORMSPREE_ENDPOINT = (
  import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
)?.trim();

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedInquiryType = 'Shareholding & Cooperative Membership',
  prefilledNote = '',
}) => {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: selectedInquiryType,
    message: prefilledNote,
    gotcha: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'
  >('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      inquiryType: selectedInquiryType,
      message: prefilledNote ? prefilledNote : prev.message,
    }));
    setStatus('idle');
    setStatusMessage('');
  }, [selectedInquiryType, prefilledNote]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const cleanedPhone = form.phone.replace(/[\s\-()]/g, '');
    if (!/^\+?[0-9]{7,15}$/.test(cleanedPhone)) {
      nextErrors.phone =
        'Please enter a valid phone number (e.g. 07032087973).';
    }
    if (form.message.trim().length < 10) {
      nextErrors.message =
        'Please include at least 10 characters describing your request.';
    }
    return nextErrors;
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `[Amerald Group Inquiry] ${form.inquiryType} - ${
        form.fullName || 'Prospective Client'
      }`
    );
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nOrganization: ${
        form.organization || 'Individual / N/A'
      }\nDivision / Inquiry Type: ${form.inquiryType}\n\nMessage:\n${
        form.message
      }`
    );
    return `mailto:${COMPANY_INFO.contacts.emails[0]}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.gotcha.trim() !== '') {
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus('unconfigured');
      setStatusMessage(
        'Formspree endpoint (VITE_FORMSPREE_ENDPOINT) is not configured yet in this preview. Send your validated inquiry directly via email below.'
      );
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          organization: form.organization.trim(),
          inquiryType: form.inquiryType,
          message: form.message.trim(),
          _subject: `Amerald Group: ${form.inquiryType}`,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (response.ok) {
        setStatus('success');
        setStatusMessage(
          'Your inquiry has been submitted to Amerald Group / Sourceways. Our Abuja or Kano desk will respond promptly.'
        );
        setForm({
          fullName: '',
          email: '',
          phone: '',
          organization: '',
          inquiryType: selectedInquiryType,
          message: '',
          gotcha: '',
        });
      } else {
        const apiError =
          payload?.errors?.[0]?.message ||
          'Unable to submit your inquiry right now. Please try again or contact us directly by email or phone.';
        setStatus('error');
        setStatusMessage(apiError);
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Network error while connecting to Formspree. Please check your connection or use direct email below.'
      );
    }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="pattern-surface-lattice py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Published Contacts & Regional Offices */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#D92B2B]">
              Direct Channels &amp; Offices
            </p>
            <h2
              id="contact-heading"
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1B1464] sm:text-3xl [text-wrap:balance]"
            >
              Speak directly with our Abuja or Kano teams.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Whether acquiring Sourceways Cooperative shares, engaging consulting services, deploying Protective Force guards, or outsourcing HR, submit your inquiry or visit our offices.
            </p>

            {/* Contact Channels */}
            <div className="mt-8 space-y-5 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-3.5">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D92B2B]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Telephone
                  </p>
                  <a
                    href={COMPANY_INFO.contacts.phoneHref}
                    className="mt-0.5 inline-block font-display text-base font-bold tabular-nums text-[#1B1464] hover:text-[#D92B2B]"
                  >
                    {COMPANY_INFO.contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D92B2B]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    Official Email Addresses
                  </p>
                  <div className="mt-0.5 flex flex-col gap-1">
                    {COMPANY_INFO.contacts.emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-[#1B1464] hover:text-[#D92B2B]"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D92B2B]"
                  aria-hidden="true"
                />
                <div className="space-y-4">
                  {COMPANY_INFO.contacts.offices.map((office) => (
                    <div key={office.label}>
                      <p className="text-xs font-semibold text-slate-500">
                        {office.label}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#1B1464]">
                        {office.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 text-sm text-slate-600">
                <span className="font-medium text-slate-500">Facebook: </span>
                <a
                  href={COMPANY_INFO.contacts.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#1B1464] underline decoration-slate-300 underline-offset-4 hover:text-[#D92B2B]"
                >
                  {COMPANY_INFO.contacts.facebook}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Formspree Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="pattern-white-panel rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#1B1464]">
                Division &amp; Shareholding Inquiry Form
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Select your area of interest and our desk will follow up with exact documentation or a tailored proposal.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* Honeypot Spam Field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-gotcha">Leave this field empty</label>
                  <input
                    id="website-gotcha"
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.gotcha}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, gotcha: e.target.value }))
                    }
                  />
                </div>

                {/* Inquiry Type Selector */}
                <div>
                  <label
                    htmlFor="inquiry-type"
                    className="block text-sm font-semibold text-[#1B1464]"
                  >
                    Division / Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        inquiryType: e.target.value as InquiryType,
                      }))
                    }
                    className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#1B1464] focus:outline-none focus:ring-2 focus:ring-[#1B1464]/20"
                  >
                    {INQUIRY_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-semibold text-[#1B1464]"
                    >
                      Full Name <span className="text-[#D92B2B]">*</span>
                    </label>
                    <input
                      id="full-name"
                      name="name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => {
                        setForm((prev) => ({
                          ...prev,
                          fullName: e.target.value,
                        }));
                        if (errors.fullName) {
                          setErrors((prev) => ({
                            ...prev,
                            fullName: undefined,
                          }));
                        }
                      }}
                      placeholder="e.g. Ibrahim Musa"
                      aria-invalid={Boolean(errors.fullName)}
                      className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B1464] focus:outline-none focus:ring-2 focus:ring-[#1B1464]/20"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs font-medium text-[#D92B2B]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#1B1464]"
                    >
                      Phone Number <span className="text-[#D92B2B]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, phone: e.target.value }));
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      placeholder="e.g. 07032087973"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm tabular-nums text-slate-900 placeholder:text-slate-400 focus:border-[#1B1464] focus:outline-none focus:ring-2 focus:ring-[#1B1464]/20"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs font-medium text-[#D92B2B]">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Organization */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#1B1464]"
                    >
                      Email Address <span className="text-[#D92B2B]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) {
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      placeholder="you@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B1464] focus:outline-none focus:ring-2 focus:ring-[#1B1464]/20"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-medium text-[#D92B2B]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-semibold text-[#1B1464]"
                    >
                      Organization (Optional)
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={form.organization}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          organization: e.target.value,
                        }))
                      }
                      placeholder="Company or Cooperative Group"
                      className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B1464] focus:outline-none focus:ring-2 focus:ring-[#1B1464]/20"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1B1464]"
                  >
                    Inquiry Details <span className="text-[#D92B2B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) {
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }
                    }}
                    placeholder="Describe your consulting needs, security site requirements, HR headcount, or shareholding units..."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B1464] focus:outline-none focus:ring-2 focus:ring-[#1B1464]/20"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-medium text-[#D92B2B]">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submission Status Banners */}
                {status === 'success' && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold">Inquiry Received</p>
                      <p className="mt-0.5 text-emerald-800">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900"
                  >
                    <AlertCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D92B2B]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold">Submission Error</p>
                      <p className="mt-0.5 text-red-800">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {status === 'unconfigured' && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950"
                  >
                    <AlertCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold">
                        Direct Email Dispatch Ready
                      </p>
                      <p className="mt-0.5 text-amber-900">{statusMessage}</p>
                      <a
                        href={buildMailtoHref()}
                        className="mt-3 inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#1B1464] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#110D42]"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span>Send via Email to sourceways@gmail.com</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#D92B2B] px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#B91C1C] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B1464]"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin"
                          aria-hidden="true"
                        />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500">
                    Protected under NDPA 2023 ·{' '}
                    <Link
                      to="/privacy-policy"
                      className="font-medium text-[#1B1464] underline decoration-slate-300 underline-offset-2 hover:text-[#D92B2B]"
                    >
                      Privacy Policy
                    </Link>{' '}
                    &amp;{' '}
                    <Link
                      to="/disclaimer"
                      className="font-medium text-[#1B1464] underline decoration-slate-300 underline-offset-2 hover:text-[#D92B2B]"
                    >
                      Disclaimer
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
