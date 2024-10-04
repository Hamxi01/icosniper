// pages/disclaimer.js
// import ThemeToggle from "../components/ThemeToggle"; // Import theme toggle component

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-start py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
            Disclaimer
          </h1>
          {/* <ThemeToggle /> */}
          {/* Theme toggle button */}
        </div>

        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Disclaimer for ICOSNIPER.COM
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          <em>Last Updated: 30/09/2024</em>
        </p>

        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          The information provided by ICOSNIPER.COM (“we,” “our,” or “us”) on
          this website (the “Site”) is for general informational purposes only.
          By using this Site, you acknowledge that you have read, understood,
          and agree to this Disclaimer.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          1. No Investment Advice
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          The content on ICOSNIPER.COM is intended for informational and
          educational purposes only. We are <strong>not</strong> a licensed
          financial or investment advisor, and nothing on this Site constitutes,
          or should be construed as, financial, legal, or investment advice.
        </p>

        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            <strong>Risk Acknowledgment:</strong> ICOs (Initial Coin Offerings),
            cryptocurrencies, and blockchain-related projects are highly
            speculative and carry significant risks. The value of
            cryptocurrencies can be extremely volatile, and participating in
            ICOs or investing in cryptocurrencies could result in a total loss
            of your investment.
          </li>
        </ul>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Before making any investment decisions, we strongly recommend that you
          seek advice from a qualified financial professional who is familiar
          with your specific financial situation.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          2. Accuracy of Information
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          While we strive to provide accurate, up-to-date, and reliable
          information, ICOSNIPER.COM makes no warranties or representations
          regarding the completeness, accuracy, or reliability of any content
          found on the Site.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            <strong>No Guarantee:</strong> Information regarding ICOs,
            cryptocurrency projects, token metrics, or market conditions may
            change rapidly, and ICOSNIPER.COM is not obligated to update or
            correct any information once it is published.
          </li>
          <li className="mb-2">
            <strong>Third-Party Information:</strong> Some of the content or
            links on this Site may be provided by third parties. We do not
            guarantee the accuracy or reliability of third-party information and
            are not responsible for the content on external sites.
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          3. No Endorsement or Affiliation
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          The inclusion of any project, ICO, token, or service on ICOSNIPER.COM
          does not constitute an endorsement or recommendation by us.
          ICOSNIPER.COM is an independent informational platform and is not
          affiliated with any cryptocurrency projects or ICO teams unless
          expressly stated.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          4. Investment Risk Warning
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          You acknowledge that investing in ICOs, cryptocurrencies, or
          blockchain technology involves a high degree of risk. The following
          risks, among others, may affect your investment:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            <strong>Volatility:</strong> Cryptocurrencies are highly volatile
            and subject to significant price fluctuations.
          </li>
          <li className="mb-2">
            <strong>Regulatory Risks:</strong> Regulations regarding
            cryptocurrency vary by jurisdiction and may change. ICOs or tokens
            may become subject to regulatory scrutiny or bans.
          </li>
          <li className="mb-2">
            <strong>Loss of Funds:</strong> ICO investments or cryptocurrency
            trades may result in the loss of your entire investment.
          </li>
          <li className="mb-2">
            <strong>Security Risks:</strong> Hacking, fraud, or technical
            malfunctions can occur, leading to loss of funds or tokens.
          </li>
        </ul>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          ICOSNIPER.COM will not be held responsible for any losses, damages, or
          negative consequences resulting from your investment decisions or
          reliance on the information provided on this Site.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          5. No Warranties
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          The Site and the content are provided on an "as-is" and "as-available"
          basis without warranties of any kind, either express or implied.
          ICOSNIPER.COM does not warrant or make any representations regarding
          the:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">
            Accuracy or reliability of any information on the Site
          </li>
          <li className="mb-2">
            Performance or profitability of any ICO or cryptocurrency project
          </li>
          <li className="mb-2">
            Security or availability of the Site or its features
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          To the maximum extent permitted by applicable law, ICOSNIPER.COM, its
          officers, directors, employees, affiliates, and agents shall not be
          liable for any direct, indirect, incidental, consequential, or
          punitive damages arising out of:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <li className="mb-2">Your access to or use of the Site</li>
          <li className="mb-2">Errors or omissions in the content</li>
          <li className="mb-2">
            Investment losses, loss of funds, or loss of data
          </li>
          <li className="mb-2">
            Any action or inaction resulting from the use of the information
            provided on this Site
          </li>
        </ul>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          7. Professional Advice
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          The content on this Site is not a substitute for professional
          financial advice, legal advice, or any other form of professional
          advice. You should always consult a qualified professional before
          making financial decisions, particularly regarding ICOs and
          cryptocurrencies.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          8. External Links
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Our Site may contain links to third-party websites or resources. These
          links are provided for your convenience only. ICOSNIPER.COM is not
          responsible for the content or services offered by these external
          sites and does not endorse or guarantee the accuracy of third-party
          information.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          9. Changes to the Disclaimer
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          ICOSNIPER.COM reserves the right to update or change this Disclaimer
          at any time. Any changes will be posted on this page with a revised
          "Last Updated" date. We encourage you to review this Disclaimer
          periodically to stay informed of any updates.
        </p>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          10. Contact Us
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          If you have any questions or concerns regarding this Disclaimer,
          please contact us at:
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Email:</strong> CONTACT@ICOSNIPER.COM
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          By using ICOSNIPER.COM, you acknowledge that you have read,
          understood, and agree to this Disclaimer.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
