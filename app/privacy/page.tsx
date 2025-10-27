import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for AgentifyNow.AI"
}

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 pt-32 md:pt-40">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy – AgentifyNow.AI</h1>
            
            <div className="prose prose-lg max-w-none">
                <p className="mb-6">
                    At AgentifyNow.AI, we value your privacy and are committed to protecting your personal information. 
                    This Privacy Policy explains how we collect, use, and safeguard the information you provide when 
                    you visit our website, use our AI-powered tools, or engage with our services.
                </p>
                
                <p className="mb-8">
                    AgentifyNow.AI complies with the Ley Orgánica de Protección de Datos Personales of Ecuador and 
                    aligns with international standards such as the EU General Data Protection Regulation (GDPR) and 
                    the California Consumer Privacy Act (CCPA).
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Data Controller</h2>
                    <div className="space-y-2">
                        <p><strong>Data Controller:</strong> AgentifyNow.AI</p>
                        <p><strong>Jurisdiction:</strong> Republic of Ecuador</p>
                        <p><strong>Registered Address:</strong> Vía San Mateo, Manta, Manabí, Ecuador.</p>
                        <p><strong>Contact:</strong> info@agentifynow.ai</p>
                    </div>
                    <p className="mt-4">
                        We are responsible for determining the purposes and means of processing your personal data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                        We collect limited information necessary to deliver and improve our services. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li><strong>Contact information</strong> — such as your name, email address, phone number, or company name when you contact us or request a demo.</li>
                        <li><strong>Usage data</strong> — information about how you interact with our website, including IP address, browser type, pages visited, and timestamps (via analytics tools).</li>
                        <li><strong>Client data</strong> — information that you or your organization provide to use our AI automation or workflow tools (e.g., uploaded data, prompts, or configuration details).</li>
                    </ul>
                    <p>
                        We do not collect sensitive personal information such as government IDs, financial records, or personal health data unless explicitly required and consented to.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Legal Basis for Processing</h2>
                    <p className="mb-4">
                        We process your personal data only when at least one of the following legal bases applies:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>With your explicit consent;</li>
                        <li>To fulfill a contractual obligation;</li>
                        <li>To comply with a legal requirement;</li>
                        <li>To protect vital interests; or</li>
                        <li>When we have a legitimate business interest that does not override your fundamental rights.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Provide, maintain, and improve our AI and automation services.</li>
                        <li>Respond to inquiries or support requests.</li>
                        <li>Analyze website performance and user behavior to enhance user experience.</li>
                        <li>Communicate updates, new features, or service information (you can opt out anytime).</li>
                        <li>Comply with legal obligations and prevent fraud or misuse.</li>
                    </ul>
                    <p>
                        We do not sell, rent, or trade your personal information to third parties.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. AI & Automation Tools</h2>
                    <p className="mb-4">
                        Some of our services use AI models and workflow automation tools to process data.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4">
                        <li>AI features may analyze text or data you submit to automate tasks such as summarizing, categorizing, or generating content.</li>
                        <li>The data you provide through our tools is used only to perform your requested actions and is not used to train AI models unless explicitly stated and agreed upon.</li>
                        <li>Any integrations with third-party platforms (e.g., Google Workspace, Slack, or CRM systems) are used only with your authorization and for service delivery.</li>
                        <li>We may use third-party AI or automation frameworks under strict confidentiality and data protection agreements.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. International Data Transfers</h2>
                    <p>
                        We may transfer your data internationally to service providers located in other countries (for example, cloud hosting, AI processing, or automation infrastructure).
                        Whenever we do, we ensure these providers apply equivalent levels of protection and comply with Ecuador&apos;s data transfer requirements under the LOPDP.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
                    <p className="mb-4">
                        Our website uses cookies to enhance functionality, analyze site traffic, and personalize your experience.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">What Are Cookies?</h3>
                    <p className="mb-4">
                        Cookies are small text files placed on your device to store information that helps us recognize you and improve your browsing experience.
                    </p>
                    
                    <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use</h3>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Essential cookies:</strong> Required for website functionality.</li>
                        <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website (e.g., via Google Analytics).</li>
                        <li><strong>Preference cookies:</strong> Store your language and display preferences.</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-3">Managing Cookies</h3>
                    <p className="mb-4">
                        You can manage or disable cookies through your browser settings. However, disabling essential cookies may limit website functionality.
                    </p>
                    <p>
                        By continuing to use our website, you consent to the use of cookies as described in this policy.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
                    <p>
                        We retain your personal information only as long as necessary to provide services, comply with legal obligations, or resolve disputes. 
                        When data is no longer needed, it is securely deleted or anonymized.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>
                    <p className="mb-4">
                        We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse.
                    </p>
                    <p>
                        All data is stored securely on cloud servers (e.g., AWS, Google Cloud) with restricted access and encryption in transit and at rest.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">10. Your Rights</h2>
                    <p className="mb-4">
                        Under Ecuador&apos;s Ley Orgánica de Protección de Datos Personales, and comparable global standards (GDPR, CCPA), you have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Access and obtain a copy of your data.</li>
                        <li>Request correction or deletion.</li>
                        <li>Limit or object to processing.</li>
                        <li>Withdraw consent at any time.</li>
                        <li>Request data portability.</li>
                        <li>Not be subject to automated decisions.</li>
                    </ul>
                    <p>
                        To exercise these rights, contact us at <a href="mailto:info@agentifynow.ai" className="text-blue-600 hover:underline">info@agentifynow.ai</a>.
                        We will respond to verified requests within legally established timeframes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
                    <p>
                        Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. 
                        If you believe a minor has provided us with information, please contact us to request its deletion.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="space-y-2">
                        <p>📧 <a href="mailto:info@agentifynow.ai" className="text-blue-600 hover:underline">info@agentifynow.ai</a></p>
                        <p>🌐 <a href="https://www.agentifynow.ai" className="text-blue-600 hover:underline">www.agentifynow.ai</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}
