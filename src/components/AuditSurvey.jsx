import React, { useState } from 'react';

export default function AuditSurvey({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    companyEmail: '',
    industry: '',
    workloadHosting: '',
    auditConcern: '',
    concern: '',
    deadline: '',
    catalyst: []
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newCatalysts = checked 
        ? [...prev.catalyst, value]
        : prev.catalyst.filter(c => c !== value);
      
      return { ...prev, catalyst: newCatalysts };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // In a real application, you would send the formData to your backend API here
    // e.g., await fetch('/api/submit-audit', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center overflow-y-auto p-4 py-20 md:p-6 md:py-24">
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <button
          onClick={onClose}
          className="text-dark hover:text-accent transition-colors p-2 bg-background/50 backdrop-blur rounded-full"
          aria-label="Close"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="max-w-xl w-full bg-white rounded-[2rem] shadow-xl p-6 md:p-12 border border-dark/10 my-auto relative">
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#e0fe9c] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-heading font-bold text-3xl mb-4 text-dark">Thank you for your interest.</h2>
            <p className="font-sans text-dark/80 text-lg leading-relaxed">
              We will reach out within next hour to schedule a 15 min call with you.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-6 py-2 rounded-full border border-dark/20 font-sans font-bold hover:bg-dark hover:text-white transition-colors"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2 text-dark">Audit Request</h2>
            <p className="font-sans text-dark/70 mb-8">
              Help us understand your needs regarding the Artificial Intelligence and Data Act (AIDA) and related Canadian Sovereign AI mandates.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-sans">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-dark">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-dark">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-dark">Company Email</label>
                <input
                  type="text"
                  name="companyEmail"
                  required
                  value={formData.companyEmail}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors"
                  placeholder="[EMAIL_ADDRESS]"
                />
              </div>

              <div className="flex flex-col gap-1.5 border-b border-dark/10 pb-6 mb-2">
                <label className="text-sm font-bold text-dark">What is your organization's primary industry?</label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select an industry</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Retail">Retail</option>
                  <option value="Technology">Technology</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 border-b border-dark/10 pb-6 mb-2">
                <label className="text-sm font-bold text-dark mb-1">What is your primary catalyst for exploring a Sovereign AI architecture? Check all that apply</label>
                <div className="flex flex-col gap-3">
                  {[
                    "Regulatory Compliance Deadlines (Federal or Provincial)",
                    "Data Privacy & Protection against foreign jurisdiction (US CLOUD Act)",
                    "Protecting internal Intellectual Property / Trade Secrets",
                    "Board or Executive-level mandate to mitigate third-party vendor risk",
                    "Need for open-weights model transparency (removing \"black-box\" APIs)"
                  ].map((option, idx) => (
                    <label key={idx} className="flex items-start gap-3 flex-row cursor-pointer group">
                      <div className="relative flex items-center pt-0.5">
                        <input
                          type="checkbox"
                          name="catalyst"
                          value={option}
                          checked={formData.catalyst.includes(option)}
                          onChange={handleCheckboxChange}
                          className="peer appearance-none w-5 h-5 border border-dark/30 rounded cursor-pointer checked:bg-accent checked:border-accent transition-colors"
                        />
                        <svg className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-dark/80 group-hover:text-dark transition-colors">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 border-b border-dark/10 pb-6 mb-2">
                <label className="text-sm font-bold text-dark">Where are your current critical AI workloads hosted?</label>
                <select
                  name="workloadHosting"
                  required
                  value={formData.workloadHosting}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="US-based Hyperscaler">US-based Hyperscaler (e.g.- AWS, Azure, GCP - even if using a 'Canada Region')</option>
                  <option value="Canadian Cloud Provider">Canadian Cloud Provider (e.g. OVH, IBM Canada, etc.)</option>
                  <option value="On-premise / In-house">On-premise / In-house</option>
                  <option value="Hybrid (mix of on-prem and cloud)">Hybrid (mix of on-prem and cloud)</option>
                  <option value="We are just starting to explore AI/ No current workloads">We are just starting to explore AI/ No current workloads</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 border-b border-dark/10 pb-6 mb-2">
                <label className="text-sm font-bold text-dark">In a Sovereign Security Audit, which area are you most concerned about?</label>
                <select
                  name="auditConcern"
                  required
                  value={formData.auditConcern}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Infrastructure - Ensuring no metadata or telemetry logs cross borders">Infrastructure - Ensuring no metadata or telemetry logs cross borders</option>
                  <option value="Data Control - Securing local vector databases (RAG) from external leakage">Model Access & Control</option>
                  <option value="Identity - Managing permissions for AI Agents/Tools">Identity - Managing permissions for AI Agents/Tools</option>
                  <option value="Transparency - Logging AI decision-making chains for auditors">Transparency - Logging AI decision-making chains for auditors</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 border-b border-dark/10 pb-6 mb-2">
                <label className="text-sm font-bold text-dark">Target deadline for compliance / assessment</label>
                <select
                  name="deadline"
                  required
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>Select a timeline</option>
                  <option value="Immediate (Actively preparing)">Immediate (Actively preparing)</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Within 6 months">Within 6 months</option>
                  <option value="Just exploring (No timeline)">Just exploring (No timeline)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-dark">Would you like to elaborate on any of the above?</label>
                <textarea
                  name="concern"
                  value={formData.concern}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-background border border-dark/20 rounded-xl px-4 py-3 outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Optional"
                />
              </div>


              <button
                type="submit"
                className="group relative overflow-hidden rounded-[2rem] bg-accent text-white px-8 py-4 font-sans font-bold transition-transform duration-300 hover:scale-[1.03]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Survey
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 z-0 bg-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
