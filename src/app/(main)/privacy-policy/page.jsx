// pages/privacy.js
// import ThemeToggle from "../components/ThemeToggle"; // Import the theme toggle component

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Privacy Policy
          </h1>
          {/* <ThemeToggle /> */}
          {/* Theme toggle button */}
        </div>

        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Privacy Policy for ICOSNIPER.COM
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          <em>Last Updated: 30/09/2024</em>
        </p>

        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          ICOSNIPER.COM (“we,” “our,” or “us”) values your privacy and is
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website, ICOSNIPER.COM (the “Site”). Please read
          this policy carefully to understand our practices regarding your
          personal data.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We collect different types of information depending on how you
          interact with the Site.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          A. Personal Information
        </h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">Name</li>
          <li className="mb-2">Email address</li>
          <li className="mb-2">Contact information</li>
          <li className="mb-2">
            Other data you voluntarily provide via forms or communication
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          B. Usage Information
        </h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">IP address</li>
          <li className="mb-2">Browser type and version</li>
          <li className="mb-2">Operating system</li>
          <li className="mb-2">Date and time of access</li>
          <li className="mb-2">Pages viewed and interactions with the Site</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          C. Cookies and Tracking Technologies
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may use cookies, beacons, and similar technologies to enhance your
          experience on the Site and to collect information about your browsing
          habits. You can control the use of cookies through your browser
          settings.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may use the information we collect in the following ways:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          A. To Provide and Improve Services
        </h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">Personalize your experience on the Site</li>
          <li className="mb-2">
            Respond to inquiries or customer support requests
          </li>
          <li className="mb-2">Provide and manage your account</li>
          <li className="mb-2">
            Improve the functionality and performance of the Site
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          B. Communications
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may use your email address or contact information to send you
          updates, newsletters, and other promotional materials. You can opt-out
          of these communications at any time by following the unsubscribe link
          in the email.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          C. Analytics
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We use analytics tools to track how users engage with the Site, to
          help us improve user experience and optimize performance.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          D. Legal and Security
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may use your information to enforce our Terms and Conditions,
          comply with legal obligations, prevent fraudulent activities, and
          protect the security of the Site.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          3. How We Share Your Information
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We do not sell or share your personal information with third parties,
          except in the following situations:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          A. Service Providers
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may share your information with trusted third-party service
          providers that perform services on our behalf, such as hosting,
          analytics, customer support, and marketing.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          B. Legal Requirements
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may disclose your information if required to do so by law, or in
          response to valid requests by public authorities (e.g., a court or
          government agency).
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          C. Business Transfers
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          In the event of a merger, sale, or acquisition of ICOSNIPER.COM, your
          information may be transferred as part of the business assets.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          4. Data Security
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We use appropriate security measures to protect your personal data
          from unauthorized access, disclosure, alteration, or destruction.
          However, no data transmission over the Internet or electronic storage
          is 100% secure. While we strive to protect your personal information,
          we cannot guarantee its absolute security.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          5. Your Data Rights
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Depending on your location, you may have the following rights
          concerning your personal data:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            Access: You can request to know what personal data we hold about
            you.
          </li>
          <li className="mb-2">
            Rectification: You can request corrections to your personal
            information.
          </li>
          <li className="mb-2">
            Deletion: You can request the deletion of your personal information,
            subject to legal exceptions.
          </li>
          <li className="mb-2">
            Restriction: You can ask us to limit how we use your personal data.
          </li>
          <li className="mb-2">
            Data Portability: You can request a copy of your personal data in a
            machine-readable format.
          </li>
          <li className="mb-2">
            Objection: You can object to the processing of your personal data
            under certain conditions.
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Contact Information
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          If you have any questions or concerns about this Privacy Policy or the
          way we handle your personal information, please contact us at: <br />
          <strong>Email:</strong> CONTACT@ICOSNIPER.COM
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
