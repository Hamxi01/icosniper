// pages/cookie-statement.js
// import ThemeToggle from "../components/ThemeToggle"; // Import the theme toggle component

const CookieStatement = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Cookie Statement
          </h1>
          {/* <ThemeToggle /> */}
          {/* Theme toggle button */}
        </div>

        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Cookie Statement for ICOSNIPER.COM
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          <em>Last Updated: 30/09/2024</em>
        </p>

        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          ICOSNIPER.COM (“we,” “our,” or “us”) uses cookies and similar
          technologies to improve user experience, analyze traffic, and support
          our marketing efforts. This Cookie Statement explains what cookies
          are, how we use them, and your choices regarding their usage.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          1. What Are Cookies?
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Cookies are small text files that are placed on your device (computer,
          smartphone, tablet) when you visit a website. They help the site
          recognize your device and remember information about your visit, such
          as your preferences or login status.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            <strong>Session Cookies:</strong> Temporary cookies that expire once
            you close your browser.
          </li>
          <li className="mb-2">
            <strong>Persistent Cookies:</strong> Cookies that remain on your
            device until deleted or until they expire after a set period.
          </li>
          <li className="mb-2">
            <strong>First-Party Cookies:</strong> Cookies set by the website you
            are visiting.
          </li>
          <li className="mb-2">
            <strong>Third-Party Cookies:</strong> Cookies set by external
            services or providers integrated into the website.
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          2. How We Use Cookies
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We use cookies to:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          A. Essential Cookies
        </h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            Authentication cookies that allow you to log in to your account
          </li>
          <li className="mb-2">
            Cookies that remember your consent to our cookie policies
          </li>
          <li className="mb-2">Security-related cookies</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          B. Functional Cookies
        </h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">Remembering your language preferences</li>
          <li className="mb-2">
            Storing your login credentials to speed up login processes
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          C. Performance & Analytics Cookies
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We use analytics tools, such as Google Analytics, to collect
          information on how users interact with the Site. This helps us
          understand user behavior and improve our services. These cookies may
          track:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">Pages visited</li>
          <li className="mb-2">Time spent on the Site</li>
          <li className="mb-2">Clicks, scrolling, and other interactions</li>
        </ul>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          All the data collected is aggregated and anonymous.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          D. Targeting & Advertising Cookies
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          These cookies are used to display relevant ads based on your browsing
          history. Third-party advertising platforms, such as Google Ads or
          Facebook Pixel, may place these cookies on your device to track your
          interests and tailor advertisements to you. These cookies may collect:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">The websites you visit</li>
          <li className="mb-2">The products or services you view</li>
          <li className="mb-2">
            Demographic information such as your location
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          3. Third-Party Cookies
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may allow third parties to set cookies on our Site to provide
          additional functionality or track and analyze user behavior. Examples
          of third-party cookies include:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">Google Analytics</li>
          <li className="mb-2">Facebook Pixel</li>
          <li className="mb-2">Other social media or advertising platforms</li>
        </ul>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Please refer to their respective privacy policies for more information
          on how they handle data collection and use.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          4. Your Cookie Choices
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          You have several options to control or limit how cookies are used on
          our Site:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          A. Browser Settings
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Most web browsers allow you to manage or block cookies through the
          settings. You can typically find these options under the "Privacy" or
          "Security" section of your browser’s settings. Note that disabling
          cookies may affect the functionality of the Site.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          B. Cookie Consent Banner
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          When you first visit the Site, you will be presented with a cookie
          consent banner. You can choose to accept or reject different
          categories of cookies. Essential cookies cannot be disabled as they
          are necessary for the Site to function.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
          C. Opt-Out Tools
        </h3>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          You can opt out of third-party cookies by visiting industry opt-out
          platforms such as:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            <a
              href="https://www.networkadvertising.org"
              className="underline text-blue-600 dark:text-blue-400"
            >
              Network Advertising Initiative (NAI)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.aboutads.info/choices"
              className="underline text-blue-600 dark:text-blue-400"
            >
              Digital Advertising Alliance (DAA)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://www.youronlinechoices.eu"
              className="underline text-blue-600 dark:text-blue-400"
            >
              European Interactive Digital Advertising Alliance (EDAA)
            </a>
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          5. Updates to This Cookie Statement
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          We may update this Cookie Statement from time to time to reflect
          changes in technology or legal requirements. Any updates will be
          posted on this page with a revised "Last Updated" date. Please review
          this statement periodically to stay informed about our use of cookies.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          6. Contact Us
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          If you have any questions about our use of cookies or your choices,
          please contact us at:
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Email:</strong> CONTACT@ICOSNIPER.COM
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          By continuing to use ICOSNIPER.COM, you agree to our use of cookies in
          accordance with this Cookie Statement.
        </p>
      </div>
    </div>
  );
};

export default CookieStatement;
