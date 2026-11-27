import type { Metadata } from 'next';
import Link from 'next/link';
import {
  HiRocketLaunch,
  HiBookOpen,
  HiTableCells,
  HiClipboardDocumentCheck,
  HiGlobeAlt,
  HiChatBubbleBottomCenterText,
  HiBugAnt,
  HiCamera,
  HiArrowLeft,
} from 'react-icons/hi2';
import Navbar from '@/components/Navbar';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Try1: Manual QA Testing with SauceDemo | Devindi Jayaweera',
  description:
    'Complete Beginner-to-Portfolio Guide: Manual QA Testing with SauceDemo — step-by-step handbook to complete a recruiter-ready Manual QA Portfolio project.',
};

const tocItems = [
  { id: 'part-1', label: 'Part 1: Core QA Theory', icon: HiBookOpen },
  { id: 'part-2', label: 'Part 2: Google Sheet Workbook', icon: HiTableCells },
  { id: 'part-3', label: 'Part 3: Execution Guide', icon: HiClipboardDocumentCheck },
  { id: 'part-4', label: 'Part 4: Publish to GitHub', icon: HiGlobeAlt },
  { id: 'part-5', label: 'Part 5: Interview Pitch', icon: HiChatBubbleBottomCenterText },
];

const bugs = [
  {
    id: 'BUG_001',
    title: 'Broken Product Images (problem_user)',
    action: 'Log in as problem_user (secret_sauce).',
    capture:
      'Screenshot the inventory page showing all 6 products displaying the same dog placeholder image. Draw a red box around two or three of the duplicate images.',
    saveAs: 'screenshots/BUG_001_broken_images.png',
  },
  {
    id: 'BUG_002',
    title: 'Product Sorting Dropdown Malfunction (problem_user)',
    action:
      'While logged in as problem_user, click the top-right sort dropdown and select Price (low to high) or Name (Z to A).',
    capture:
      'Screenshot showing the dropdown selected as Price (low to high) while the product prices remain unsorted ($29.99 still at the top). Highlight the dropdown and the unsorted price.',
    saveAs: 'screenshots/BUG_002_sorting_broken.png',
  },
  {
    id: 'BUG_003',
    title: 'Remove Button Unresponsive on Inventory Page (problem_user)',
    action:
      'As problem_user, click Add to cart on Sauce Labs Backpack, then click the red Remove button on the same card.',
    capture:
      'Screenshot showing the Remove button stuck and the cart badge still showing 1.',
    saveAs: 'screenshots/BUG_003_remove_button_stuck.png',
  },
  {
    id: 'BUG_004',
    title: 'Checkout Last Name Input Overwrites First Name (problem_user)',
    action:
      'As problem_user, go to Cart -> Checkout, type Kasun into First Name, then type Perera into Last Name.',
    capture:
      'Screenshot showing Last Name remaining blank and First Name overwritten with the last character typed. Highlight both input boxes.',
    saveAs: 'screenshots/BUG_004_checkout_lastname_bug.png',
  },
  {
    id: 'BUG_005',
    title: 'Checkout Finish Button Unresponsive (error_user)',
    action:
      'Log out, log in as error_user (secret_sauce), add an item to cart, complete Step One of Checkout, and on Checkout: Overview, click the green Finish button.',
    capture:
      'Open Chrome DevTools (F12 -> Console tab) to show the uncaught JavaScript error alongside the stuck Checkout Overview page. Highlight the Finish button and the red console error.',
    saveAs: 'screenshots/BUG_005_finish_button_error.png',
  },
  {
    id: 'BUG_006',
    title: 'Postal Code Accepts Alphabetic Characters (standard_user)',
    action:
      'Log in as standard_user, proceed to Checkout: Your Information, enter Kasun, Perera, and type ABCDE into Zip/Postal Code, then click Continue.',
    capture:
      'Screenshot showing the system allowing navigation to Checkout: Overview despite non-numeric letters in the Postal Code field (or capture the filled form right before clicking Continue and the resulting Overview page).',
    saveAs: 'screenshots/BUG_006_postal_code_validation.png',
  },
  {
    id: 'BUG_007',
    title: 'Checkout Allowed with Empty Shopping Cart (standard_user)',
    action:
      'Log in as standard_user with 0 items in the cart, click the cart icon, and click the Checkout button.',
    capture:
      'Screenshot showing the user allowed onto the Checkout: Your Information form even though the cart badge is empty (0 items). Highlight the empty cart icon and the checkout form.',
    saveAs: 'screenshots/BUG_007_empty_cart_checkout.png',
  },
];

const readmeTemplate = `# Manual QA Testing Portfolio — SauceDemo E-Commerce

An end-to-end Manual Quality Assurance portfolio project testing the **SauceDemo** web application (\`https://www.saucedemo.com\`), structured according to ISTQB and IEEE 829 standards.

## Project Artifacts Included
* **\`SauceDemo_Manual_QA_Portfolio.xlsx\`**: Complete multi-tab QA workbook containing:
  1. **Test Summary Dashboard**: Automated pass/fail metrics, defect severity breakdown, and release readiness assessment.
  2. **Test Plan**: Scope, test environment, test personas, and entry/exit criteria.
  3. **Test Scenarios**: 10 high-level scenarios covering Authentication, Inventory, Cart, Checkout, and Session Security.
  4. **Test Cases**: 24 detailed positive, negative, and boundary value test cases.
  5. **Requirements Traceability Matrix (RTM)**: Bidirectional mapping from requirements to test cases and defects.
  6. **Bug Reports**: 7 reproducible functional and UI defect reports with Severity/Priority classifications.
* **\`screenshots/\`**: Annotated visual evidence for all 7 logged defects.

## Execution Summary
| Metric | Result |
| :--- | :--- |
| **Total Test Cases Executed** | 24 |
| **Passed** | 17 |
| **Failed** | 7 |
| **Pass Rate** | 70.8% |
| **Total Defects Logged** | 7 (1 Critical, 3 High, 3 Medium) |

## Sample Defect Evidence
### BUG_001: Duplicate Placeholder Product Images (\`problem_user\`)
![Broken Product Images](screenshots/BUG_001_broken_images.png)

### BUG_005: Unresponsive Checkout Finish Button with Console Error (\`error_user\`)
![Checkout Finish Error](screenshots/BUG_005_finish_button_error.png)`;

export default function Try1Page() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              <HiArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>

          {/* Guide Header */}
          <header className="rounded-3xl bg-neutral-50 border border-neutral-300 p-7 sm:p-10 mb-10">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black text-white text-xs font-medium uppercase tracking-[0.2em] mb-5">
              <HiRocketLaunch className="w-3.5 h-3.5 text-white" />
              Hands-On Manual QA Guide
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-black leading-tight mb-5">
              Complete Beginner-to-Portfolio Guide:{' '}
              <span className="italic underline decoration-2 underline-offset-4">
                Manual QA Testing with SauceDemo
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              This step-by-step handbook is designed to teach you industry-standard Manual Quality
              Assurance (QA) practices from scratch and help you complete a recruiter-ready Manual
              QA Portfolio project using SauceDemo (
              <a
                href="https://www.saucedemo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold underline hover:text-neutral-600"
              >
                https://www.saucedemo.com
              </a>
              ) and the pre-structured{' '}
              <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-sm text-black">
                SauceDemo_Manual_QA_Portfolio
              </code>{' '}
              Google Sheet.
            </p>
          </header>

          {/* Mobile Quick Navigation */}
          <nav aria-label="Guide sections" className="lg:hidden mb-8 flex flex-wrap gap-2">
            {tocItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-neutral-300 text-xs font-medium text-black hover:bg-black hover:text-white transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Main 2-Column Layout */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Sticky Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28">
              <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4 px-2">
                  Contents
                </p>
                <ul className="space-y-1">
                  {tocItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:text-white hover:bg-black transition-colors"
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          <span>{item.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Reading Content */}
            <article className="lg:col-span-9 space-y-10">
              {/* ================= PART 1 ================= */}
              <section
                id="part-1"
                className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-8"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiBookOpen className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 1: Core QA Theory (Interview Essentials)
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Before executing tests, understand the standard QA concepts and terminology
                      that Sri Lankan software companies test in internship interviews.
                    </p>
                  </div>
                </div>

                {/* 1. STLC */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    1. Software Testing Life Cycle (STLC)
                  </h3>
                  <p className="text-neutral-800 leading-relaxed">
                    Real QA teams do not randomly click around a website. They follow a structured
                    6-phase process:
                  </p>
                  <ul className="space-y-2.5 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-black">Requirement Analysis:</strong> Understanding
                      what the application is supposed to do (e.g., valid users must log in;
                      locked-out users must be blocked).
                    </li>
                    <li>
                      <strong className="text-black">Test Planning:</strong> Defining scope, test
                      environment, test accounts, and exit criteria in a Test Plan.
                    </li>
                    <li>
                      <strong className="text-black">Test Case Development:</strong> Writing
                      high-level Test Scenarios and step-by-step Test Cases, then mapping them in a
                      Requirements Traceability Matrix (RTM).
                    </li>
                    <li>
                      <strong className="text-black">Test Environment Setup:</strong> Preparing the
                      browser, screen resolution, and test data/credentials.
                    </li>
                    <li>
                      <strong className="text-black">Test Execution:</strong> Running each test
                      case, comparing Actual Results vs. Expected Results, and logging Bug Reports
                      when they do not match.
                    </li>
                    <li>
                      <strong className="text-black">Test Closure:</strong> Summarizing pass/fail
                      metrics and writing a Test Summary Report with a release recommendation.
                    </li>
                  </ul>
                </div>

                {/* 2. Test Scenario vs. Test Case */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">2. Test Scenario vs. Test Case</h3>
                  <ul className="space-y-2.5 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-black">Test Scenario (What to test):</strong> A
                      single-line high-level objective covering a user flow (e.g., Verify login
                      functionality with valid and invalid credentials).
                    </li>
                    <li>
                      <strong className="text-black">Test Case (How to test):</strong> A detailed
                      set of preconditions, exact numbered steps, test data, and expected results
                      used to verify one specific condition (e.g., Verify login fails when password
                      field is left blank).
                    </li>
                  </ul>
                </div>

                {/* 3. Black-Box Test Design Techniques */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    3. Black-Box Test Design Techniques
                  </h3>
                  <p className="text-neutral-800 leading-relaxed">
                    Instead of guessing inputs, QA engineers use formal techniques:
                  </p>
                  <ul className="space-y-2.5 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-black">Positive Testing:</strong> Entering valid
                      inputs to confirm the system works as intended (e.g., logging in with{' '}
                      <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                        standard_user
                      </code>
                      ).
                    </li>
                    <li>
                      <strong className="text-black">Negative Testing:</strong> Entering invalid,
                      blank, or unauthorized inputs to confirm the system handles errors gracefully
                      (e.g., leaving the password empty or bypassing login via URL).
                    </li>
                    <li>
                      <strong className="text-black">Equivalence Partitioning (EP):</strong>{' '}
                      Dividing input data into valid and invalid groups so you do not waste time
                      testing redundant values.
                    </li>
                    <li>
                      <strong className="text-black">Boundary Value Analysis (BVA):</strong> Testing
                      edge values at the boundaries of input fields (e.g., testing 1-character
                      names, 255-character names, or non-numeric characters in a Postal Code field).
                    </li>
                  </ul>
                </div>

                {/* 4. RTM */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    4. Requirements Traceability Matrix (RTM)
                  </h3>
                  <p className="text-neutral-800 leading-relaxed">
                    An RTM is a table that links business requirements (
                    <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                      REQ_01
                    </code>
                    ) to Test Scenarios (
                    <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                      TS_01
                    </code>
                    ), Test Cases (
                    <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                      TC_LOGIN_001
                    </code>
                    ), and Bug IDs (
                    <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                      BUG_001
                    </code>
                    ). It proves to stakeholders that 100% of requirements have been tested and
                    nothing was missed.
                  </p>
                </div>

                {/* 5. Severity vs. Priority */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    5. Severity vs. Priority (Classic Interview Question)
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-5 space-y-2.5">
                      <h4 className="font-bold text-black">
                        Severity (Technical Impact): How badly does the bug break the system?
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-800 list-disc pl-5">
                        <li>
                          <strong className="text-black">Critical:</strong> Core functionality is
                          completely blocked (e.g., user cannot complete checkout).
                        </li>
                        <li>
                          <strong className="text-black">High:</strong> Major feature malfunctions
                          with no easy workaround (e.g., product sorting is completely broken).
                        </li>
                        <li>
                          <strong className="text-black">Medium:</strong> Feature works partially or
                          validation is missing (e.g., Postal Code accepts letters).
                        </li>
                        <li>
                          <strong className="text-black">Low:</strong> Minor cosmetic or UI
                          alignment issue.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-5 space-y-2.5">
                      <h4 className="font-bold text-black">
                        Priority (Business Urgency): How fast must developers fix it?
                      </h4>
                      <ul className="space-y-2 text-sm text-neutral-800 list-disc pl-5">
                        <li>
                          <strong className="text-black">P1 - Urgent:</strong> Must be fixed
                          immediately before release.
                        </li>
                        <li>
                          <strong className="text-black">P2 - High:</strong> Fix in the current
                          sprint/release cycle.
                        </li>
                        <li>
                          <strong className="text-black">P3 - Medium:</strong> Fix in a future
                          update.
                        </li>
                        <li>
                          <strong className="text-black">P4 - Low:</strong> Fix when time permits.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* ================= PART 2 ================= */}
              <section
                id="part-2"
                className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-6"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiTableCells className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 2: Understanding Your Google Sheet Workbook
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Your workbook (
                      <code className="font-mono text-black">SauceDemo_Manual_QA_Portfolio</code>)
                      is already structured into 6 industry-standard tabs. Do not delete any columns
                      or break the formulas in the dashboard.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-neutral-800 leading-relaxed list-disc pl-5">
                  <li>
                    <strong className="text-black font-mono text-sm">Test_Summary_Dashboard:</strong>{' '}
                    Contains automated <code className="font-mono text-xs">COUNTIF</code> formulas
                    that calculate Total Test Cases (24), Passed (17), Failed (7), Pass Rate
                    (70.8%), and Defect counts by Severity. You only need to update the metadata
                    fields (Tester Name, Date, Browser version).
                  </li>
                  <li>
                    <strong className="text-black font-mono text-sm">Test_Plan:</strong> Documents
                    the project objective, In-Scope modules, Out-of-Scope items, test user accounts,
                    browser/OS environment, and Entry/Exit criteria.
                  </li>
                  <li>
                    <strong className="text-black font-mono text-sm">Test_Scenarios:</strong> Lists
                    10 high-level scenarios (<code className="font-mono text-xs">TS_01</code> to{' '}
                    <code className="font-mono text-xs">TS_10</code>) across Login, Inventory,
                    Cart, Checkout, and Session Security.
                  </li>
                  <li>
                    <strong className="text-black font-mono text-sm">Test_Cases:</strong> Contains
                    24 detailed test cases (<code className="font-mono text-xs">TC_LOGIN_001</code>{' '}
                    through <code className="font-mono text-xs">TC_SEC_002</code>) with exact
                    steps, test data, expected results, actual results, statuses, and linked Bug
                    IDs.
                  </li>
                  <li>
                    <strong className="text-black font-mono text-sm">RTM:</strong> Maps requirements{' '}
                    <code className="font-mono text-xs">REQ_01</code> through{' '}
                    <code className="font-mono text-xs">REQ_05</code> to their corresponding
                    scenarios, test cases, and defects.
                  </li>
                  <li>
                    <strong className="text-black font-mono text-sm">Bug_Reports:</strong> Contains
                    7 real defect reports (<code className="font-mono text-xs">BUG_001</code> to{' '}
                    <code className="font-mono text-xs">BUG_007</code>) found across
                    SauceDemo&apos;s test personas, complete with reproduction steps and required
                    screenshot filenames.
                  </li>
                </ul>
              </section>

              {/* ================= PART 3 ================= */}
              <section
                id="part-3"
                className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-10"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiClipboardDocumentCheck className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 3: Step-by-Step Execution Guide
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Follow these steps in exact order to verify the workbook, capture visual bug
                      evidence, and prepare your files.
                    </p>
                  </div>
                </div>

                {/* Step 1 */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 1: Personalize the Workbook Metadata
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Open the{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        SauceDemo_Manual_QA_Portfolio
                      </code>{' '}
                      Google Sheet.
                    </li>
                    <li>
                      Click <strong>File &rarr; Make a copy</strong> to save an editable copy in
                      your own Google Drive.
                    </li>
                    <li>
                      Go to the <code className="font-mono text-xs font-semibold">Test_Summary_Dashboard</code> tab:
                      <ul className="mt-1.5 space-y-1 list-disc pl-5 text-sm text-neutral-700">
                        <li>
                          Locate the <strong>Tested By / QA Engineer</strong> cell and replace{' '}
                          <code className="font-mono">[Your Name]</code> with your full name.
                        </li>
                        <li>
                          Update the <strong>Execution Date</strong> to today&apos;s date.
                        </li>
                        <li>
                          Confirm the <strong>Browser / OS</strong> matches the computer you are
                          using (e.g., Windows 11 / Google Chrome v130).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Go to the <code className="font-mono text-xs font-semibold">Test_Plan</code>{' '}
                      tab and update the <strong>Author / QA Lead</strong> field with your name as
                      well.
                    </li>
                  </ol>
                </div>

                {/* Step 2 */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 2: Set Up Your Evidence Folder &amp; Screenshot Tool
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      On your computer desktop, create a main project folder named{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        saucedemo-manual-qa-portfolio
                      </code>
                      .
                    </li>
                    <li>
                      Inside it, create a subfolder named{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        screenshots
                      </code>
                      .
                    </li>
                    <li>
                      Ensure you have a screenshot tool ready that lets you draw red boxes or
                      arrows (Windows Snipping Tool{' '}
                      <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                        Win + Shift + S
                      </code>
                      , Lightshot, or Greenshot).
                    </li>
                  </ol>
                </div>

                {/* Step 3 */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 3: Verify Passing Flows (standard_user)
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Open Google Chrome and navigate to:{' '}
                      <a
                        href="https://www.saucedemo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-semibold underline hover:text-neutral-600"
                      >
                        https://www.saucedemo.com
                      </a>
                    </li>
                    <li>
                      Open the <code className="font-mono text-xs font-semibold">Test_Cases</code>{' '}
                      tab in your Google Sheet.
                    </li>
                    <li>
                      Review the test cases assigned to{' '}
                      <code className="font-mono text-xs font-semibold">standard_user</code> (
                      <code className="font-mono text-xs">TC_LOGIN_001</code> through{' '}
                      <code className="font-mono text-xs">TC_CHK_004</code> and{' '}
                      <code className="font-mono text-xs">TC_SEC_001</code> to{' '}
                      <code className="font-mono text-xs">TC_SEC_002</code>).
                    </li>
                    <li>
                      Log in with Username:{' '}
                      <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        standard_user
                      </code>{' '}
                      and Password:{' '}
                      <code className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        secret_sauce
                      </code>
                      , and walk through:
                      <ul className="mt-1.5 space-y-1 list-disc pl-5 text-sm text-neutral-700">
                        <li>
                          Invalid login error messages (<code className="font-mono">locked_out_user</code>,
                          blank password).
                        </li>
                        <li>
                          Product sorting (A to Z, Z to A, Price low to high, Price high to low).
                        </li>
                        <li>
                          Adding and removing items from the cart and verifying the cart badge
                          count.
                        </li>
                        <li>
                          Completing a valid checkout and verifying item total + 8% tax calculation.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Confirm that the <strong>Actual Result</strong> and <strong>Status (Pass)</strong>{' '}
                      columns in your sheet match what you see on screen.
                    </li>
                  </ol>
                </div>

                {/* Step 4 */}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Step 4: Reproduce All 7 Bugs &amp; Capture Screenshots
                    </h3>
                    <p className="text-neutral-800 leading-relaxed">
                      SauceDemo includes special test accounts (
                      <code className="font-mono text-xs font-semibold">problem_user</code> and{' '}
                      <code className="font-mono text-xs font-semibold">error_user</code>) alongside
                      edge cases in <code className="font-mono text-xs font-semibold">standard_user</code>{' '}
                      that contain real functional and UI defects. Reproduce each of the 7 bugs
                      listed in the <code className="font-mono text-xs font-semibold">Bug_Reports</code>{' '}
                      tab and save an annotated screenshot into your{' '}
                      <code className="font-mono text-xs font-semibold">screenshots/</code> folder
                      using the exact filename listed in the sheet:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {bugs.map((bug) => (
                      <div
                        key={bug.id}
                        className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-3"
                      >
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                            <HiBugAnt className="w-3.5 h-3.5" />
                            {bug.id}
                          </span>
                          <h4 className="text-lg font-bold text-black">{bug.title}</h4>
                        </div>
                        <p className="text-sm text-neutral-800 leading-relaxed">
                          <strong className="text-black">Action:</strong> {bug.action}
                        </p>
                        <p className="text-sm text-neutral-800 leading-relaxed">
                          <strong className="text-black">What to capture:</strong> {bug.capture}
                        </p>
                        <div className="pt-1 flex items-center gap-2 text-xs font-mono text-black">
                          <HiCamera className="w-4 h-4 shrink-0" />
                          <span>Save as:</span>
                          <code className="px-2 py-1 rounded bg-white border border-neutral-300 font-semibold">
                            {bug.saveAs}
                          </code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 5 */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 5: Export the Google Sheet to Excel
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Double-check all 6 tabs in your Google Sheet to ensure there are no{' '}
                      <code className="font-mono text-xs">#REF!</code> or{' '}
                      <code className="font-mono text-xs">#ERROR!</code> formula issues on the{' '}
                      <code className="font-mono text-xs font-semibold">Test_Summary_Dashboard</code>.
                    </li>
                    <li>
                      Click <strong>File &rarr; Download &rarr; Microsoft Excel (.xlsx)</strong>.
                    </li>
                    <li>
                      Move the downloaded file into your{' '}
                      <code className="font-mono text-xs font-semibold">
                        saucedemo-manual-qa-portfolio
                      </code>{' '}
                      folder and ensure it is named:{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        SauceDemo_Manual_QA_Portfolio.xlsx
                      </code>
                    </li>
                  </ol>
                </div>
              </section>

              {/* ================= PART 4 ================= */}
              <section
                id="part-4"
                className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-6"
              >
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiGlobeAlt className="w-6 h-6 text-white" />
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                    Part 4: Publishing Your Project to GitHub
                  </h2>
                </div>

                <ol className="space-y-2.5 text-neutral-800 leading-relaxed list-decimal pl-5">
                  <li>
                    Log in to{' '}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-semibold underline hover:text-neutral-600"
                    >
                      https://github.com
                    </a>{' '}
                    and click <strong>New</strong> to create a new repository.
                  </li>
                  <li>
                    Repository Name:{' '}
                    <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                      saucedemo-manual-qa-portfolio
                    </code>
                  </li>
                  <li>
                    Description:{' '}
                    <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                      End-to-end Manual QA Testing Portfolio for SauceDemo e-commerce web
                      application (IEEE 829 Test Plan, Test Cases, RTM, and Defect Reports).
                    </code>
                  </li>
                  <li>
                    Select <strong>Public</strong>, check <strong>Add a README file</strong>, and
                    click <strong>Create repository</strong>.
                  </li>
                  <li>
                    Upload your files:
                    <ul className="mt-1.5 space-y-1 list-disc pl-5 text-sm text-neutral-700">
                      <li>
                        Click <strong>Add file &rarr; Upload files</strong>.
                      </li>
                      <li>
                        Drag and drop{' '}
                        <code className="font-mono text-black font-semibold">
                          SauceDemo_Manual_QA_Portfolio.xlsx
                        </code>{' '}
                        AND the entire{' '}
                        <code className="font-mono text-black font-semibold">screenshots/</code>{' '}
                        folder (containing all 7 <code className="font-mono">.png</code> files).
                      </li>
                      <li>
                        Click <strong>Commit changes</strong>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Edit your <code className="font-mono text-xs font-semibold">README.md</code>{' '}
                    file on GitHub (click the pencil icon) and paste the template below so
                    recruiters can review your metrics and screenshots immediately:
                  </li>
                </ol>

                <CodeBlock language="json" label="README.md Template (Markdown)" code={readmeTemplate} />
              </section>

              {/* ================= PART 5 ================= */}
              <section
                id="part-5"
                className="scroll-mt-28 rounded-3xl bg-neutral-50 border-2 border-black p-6 sm:p-10 space-y-5"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiChatBubbleBottomCenterText className="w-6 h-6 text-white" />
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                    Part 5: How to Explain This Project in a QA Interview
                  </h2>
                </div>

                <p className="text-neutral-700">
                  When an interviewer asks{' '}
                  <em>&ldquo;Walk me through your manual testing project&rdquo;</em>, summarize it
                  clearly in 45 seconds:
                </p>

                <blockquote className="rounded-2xl bg-white border-l-4 border-black p-6 text-black leading-relaxed italic">
                  &ldquo;I performed end-to-end manual testing on the SauceDemo e-commerce web
                  application following STLC and IEEE 829 practices. I started by writing a Test
                  Plan defining scope and entry/exit criteria, then designed 10 test scenarios and
                  24 detailed test cases using positive, negative, and boundary value analysis
                  techniques, mapped in a Requirements Traceability Matrix. During execution across
                  multiple user personas, I achieved a 70.8% pass rate and logged 7 reproducible
                  functional and UI defects—such as broken sorting, unresponsive checkout buttons
                  with JavaScript console errors, and missing postal code validation—complete with
                  severity/priority classifications and annotated screenshots on GitHub.&rdquo;
                </blockquote>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
