import type { Metadata } from 'next';
import Link from 'next/link';
import {
  HiRocketLaunch,
  HiBookOpen,
  HiWrenchScrewdriver,
  HiBeaker,
  HiShieldCheck,
  HiPlay,
  HiGlobeAlt,
  HiChatBubbleBottomCenterText,
  HiExclamationTriangle,
  HiCheckCircle,
  HiArrowLeft,
} from 'react-icons/hi2';
import Navbar from '@/components/Navbar';
import CodeBlock from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Try: API Testing with Postman | Devindi Jayaweera',
  description:
    'Complete Beginner-to-Portfolio Guide: API Testing with Postman — step-by-step handbook to build a GitHub-ready API Testing project.',
};

const tocItems = [
  { id: 'part-1', label: 'Part 1: Theory Essentials', icon: HiBookOpen },
  { id: 'part-2', label: 'Part 2: Setup & Workspace', icon: HiWrenchScrewdriver },
  { id: 'part-3', label: 'Part 3: CRUD Test Suite', icon: HiBeaker },
  { id: 'part-4', label: 'Part 4: Negative & Security', icon: HiShieldCheck },
  { id: 'part-5', label: 'Part 5: Collection Runner', icon: HiPlay },
  { id: 'part-6', label: 'Part 6: Publish to GitHub', icon: HiGlobeAlt },
  { id: 'interview', label: 'Interview Pitch', icon: HiChatBubbleBottomCenterText },
];

const crudRows = [
  { method: 'GET', crud: 'Read', meaning: 'Fetch/view existing data (e.g., view a hotel booking).', body: 'No' },
  { method: 'POST', crud: 'Create', meaning: 'Send new data to create a record (e.g., make a new booking or login).', body: 'Yes (JSON)' },
  { method: 'PUT', crud: 'Update (Full)', meaning: 'Replace an entire existing record with new data.', body: 'Yes (JSON)' },
  { method: 'PATCH', crud: 'Update (Partial)', meaning: 'Modify only one or two fields of an existing record.', body: 'Yes (JSON)' },
  { method: 'DELETE', crud: 'Delete', meaning: 'Remove an existing record from the system.', body: 'Usually No' },
];

const envRows = [
  { variable: 'base_url', type: 'default', initial: 'https://restful-booker.herokuapp.com', current: 'https://restful-booker.herokuapp.com' },
  { variable: 'token', type: 'secret', initial: '(leave empty)', current: '(leave empty)' },
  { variable: 'booking_id', type: 'default', initial: '(leave empty)', current: '(leave empty)' },
];

export default function TryPage() {
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
              Hands-On QA Project Guide
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-black leading-tight mb-5">
              Complete Beginner-to-Portfolio Guide:{' '}
              <span className="italic underline decoration-2 underline-offset-4">
                API Testing with Postman
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              Welcome! This self-paced, step-by-step handbook is designed to take you from zero API
              testing experience to having a complete, industry-standard API Testing Project hosted
              on your GitHub profile—ready to impress Sri Lankan software companies during QA
              internship interviews.
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
              <section id="part-1" className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiBookOpen className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 1: The Theory You Must Know (Interview Essentials)
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Before clicking buttons in Postman, understand why you are doing each step.
                      Interviewers will ask you about these exact concepts.
                    </p>
                  </div>
                </div>

                {/* 1. What is an API? */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">1. What is an API?</h3>
                  <ul className="space-y-2.5 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-black">API (Application Programming Interface):</strong>{' '}
                      Think of an API as a waiter in a restaurant. You (the Client / frontend app)
                      look at the menu and tell the waiter what you want. The waiter carries your
                      request to the kitchen (the Server / database) and brings back your food (the
                      Response).
                    </li>
                    <li>
                      <strong className="text-black">Why do QA Engineers test APIs?</strong> UI
                      tests (clicking buttons in a browser) are slow and fragile. Testing the API
                      directly lets QA find backend logic bugs, security flaws, and data issues
                      early—even before the frontend UI is finished.
                    </li>
                  </ul>
                </div>

                {/* 2. REST API & HTTP Methods */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    2. REST API &amp; HTTP Methods (CRUD)
                  </h3>
                  <p className="text-neutral-800 leading-relaxed">
                    Most modern web apps use REST (Representational State Transfer) APIs, which
                    communicate over HTTP using standard methods that map to database operations
                    (CRUD):
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-neutral-300">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-black text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-4 py-3.5">HTTP Method</th>
                          <th className="px-4 py-3.5">CRUD Operation</th>
                          <th className="px-4 py-3.5">Real-World Meaning</th>
                          <th className="px-4 py-3.5">Request Body Needed?</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 bg-white">
                        {crudRows.map((r) => (
                          <tr key={r.method}>
                            <td className="px-4 py-3.5">
                              <span className="inline-block px-2.5 py-1 rounded-md bg-black text-white font-mono text-xs font-bold">
                                {r.method}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 font-semibold text-black">{r.crud}</td>
                            <td className="px-4 py-3.5 text-neutral-700">{r.meaning}</td>
                            <td className="px-4 py-3.5 font-mono text-xs font-semibold text-black">{r.body}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3. Anatomy of an API Request & Response */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    3. Anatomy of an API Request &amp; Response
                  </h3>
                  <ul className="space-y-2.5 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-black">Endpoint (URL):</strong> The exact address of
                      the resource (e.g.,{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs text-black">
                        https://restful-booker.herokuapp.com/booking/1
                      </code>
                      ).
                    </li>
                    <li>
                      <strong className="text-black">Headers:</strong> Extra metadata sent with the
                      request—such as{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs text-black">
                        Content-Type: application/json
                      </code>{' '}
                      (telling the server what format we are sending) or{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs text-black">
                        Cookie / Authorization
                      </code>{' '}
                      (proving who we are).
                    </li>
                    <li>
                      <strong className="text-black">Body (Payload):</strong> The actual data you
                      send in POST/PUT/PATCH requests, formatted in JSON (JavaScript Object
                      Notation).
                    </li>
                    <li>
                      <strong className="text-black">HTTP Status Codes:</strong> Three-digit numbers
                      returned by the server telling you what happened:
                      <ul className="mt-2 space-y-1.5 list-disc pl-6 text-sm text-neutral-700">
                        <li>
                          <strong className="text-black">2xx (Success):</strong>{' '}
                          <code className="font-mono font-semibold text-black">200 OK</code> (Request succeeded),{' '}
                          <code className="font-mono font-semibold text-black">201 Created</code> (New resource
                          created—or deleted in some APIs).
                        </li>
                        <li>
                          <strong className="text-black">
                            4xx (Client Error — Your/User&apos;s fault):
                          </strong>
                          <ul className="mt-1 space-y-1 list-disc pl-5">
                            <li>
                              <code className="font-mono font-semibold text-black">400 Bad Request</code> (Invalid
                              JSON syntax or missing required fields)
                            </li>
                            <li>
                              <code className="font-mono font-semibold text-black">401 Unauthorized</code> (Not
                              logged in / missing credentials)
                            </li>
                            <li>
                              <code className="font-mono font-semibold text-black">403 Forbidden</code> (Logged
                              in, but not allowed to perform this action)
                            </li>
                            <li>
                              <code className="font-mono font-semibold text-black">404 Not Found</code> (The ID or
                              URL does not exist)
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong className="text-black">5xx (Server Error — Backend bug!):</strong>{' '}
                          <code className="font-mono font-semibold text-black">500 Internal Server Error</code>{' '}
                          (The backend code crashed).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* 4. Environments, Variables & Request Chaining */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    4. Environments, Variables &amp; Request Chaining
                  </h3>
                  <ul className="space-y-2.5 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong className="text-black">
                        Variables (<code className="font-mono">{'{{base_url}}'}</code>):
                      </strong>{' '}
                      Instead of typing{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs text-black">
                        https://restful-booker.herokuapp.com
                      </code>{' '}
                      20 times, we store it once as a variable. If the server changes from Staging
                      to Production, you update it in one place.
                    </li>
                    <li>
                      <strong className="text-black">Request Chaining:</strong> In real workflows,
                      you log in (<code className="font-mono text-xs font-semibold">POST /auth</code>),
                      extract the secret token from the response using a small JavaScript snippet,
                      save it to a variable, and automatically pass it into the next request (
                      <code className="font-mono text-xs font-semibold">PUT /booking</code>).
                    </li>
                  </ul>
                </div>
              </section>

              {/* ================= PART 2 ================= */}
              <section id="part-2" className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiWrenchScrewdriver className="w-6 h-6 text-white" />
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                    Part 2: Installation &amp; Workspace Setup
                  </h2>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 1: Download and Install Postman
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Open your browser and go to:{' '}
                      <a
                        href="https://www.postman.com/downloads/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-semibold underline hover:text-neutral-600"
                      >
                        https://www.postman.com/downloads/
                      </a>
                    </li>
                    <li>
                      Click the <strong>Download</strong> button for your Operating System (Windows
                      64-bit / macOS / Linux).
                    </li>
                    <li>
                      Run the downloaded installer (
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs text-black">
                        Postman-win64-Setup.exe
                      </code>
                      ) and wait for it to open.
                    </li>
                    <li>
                      Click <strong>Create Free Account</strong> (or <strong>Sign in with Google</strong>)
                      so your work is backed up to the cloud.
                    </li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 2: Create a Dedicated Workspace
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Once inside Postman, look at the top-left navigation bar and click{' '}
                      <strong>Workspaces</strong>.
                    </li>
                    <li>
                      Click the <strong>Create Workspace</strong> button.
                    </li>
                    <li>
                      Choose <strong>Blank workspace</strong> &rarr; click <strong>Next</strong>.
                    </li>
                    <li>
                      Enter the Name:{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold text-black">
                        QA API Testing Portfolio
                      </code>
                    </li>
                    <li>
                      Under Visibility, select <strong>Personal</strong> &rarr; click{' '}
                      <strong>Create</strong>.
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    Step 3: Set Up Your Environment &amp; Variables
                  </h3>
                  <p className="text-neutral-800 leading-relaxed">
                    We will test <strong>Restful-Booker</strong>, a free, realistic hotel booking
                    API built specifically for QA engineers.
                  </p>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      On the left sidebar, click the <strong>Environments</strong> icon (looks like
                      a stack of layers or Environments tab).
                    </li>
                    <li>
                      Click the <code className="font-mono font-bold">+</code> icon (Create
                      Environment).
                    </li>
                    <li>
                      At the top, rename New Environment to:{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold text-black">
                        Restful-Booker Env
                      </code>
                    </li>
                    <li>Add the following 3 variables in the table:</li>
                  </ol>

                  <div className="overflow-x-auto rounded-xl border border-neutral-300">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-black text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-4 py-3.5">Variable</th>
                          <th className="px-4 py-3.5">Type</th>
                          <th className="px-4 py-3.5">Initial Value</th>
                          <th className="px-4 py-3.5">Current Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 bg-white font-mono text-xs">
                        {envRows.map((row) => (
                          <tr key={row.variable}>
                            <td className="px-4 py-3.5 text-black font-bold">{row.variable}</td>
                            <td className="px-4 py-3.5 text-neutral-800">{row.type}</td>
                            <td className="px-4 py-3.5 text-neutral-700">{row.initial}</td>
                            <td className="px-4 py-3.5 text-neutral-700">{row.current}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-neutral-800">
                    Press <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">Ctrl + S</code>{' '}
                    (or click <strong>Save</strong> at the top right).
                  </p>

                  <div className="rounded-2xl bg-neutral-100 border-2 border-black p-5 flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shrink-0 mt-0.5">
                      <HiExclamationTriangle className="w-5 h-5 text-white" />
                    </span>
                    <div className="text-sm text-neutral-900 leading-relaxed">
                      <strong className="text-black uppercase tracking-wider">CRITICAL STEP:</strong>{' '}
                      Look at the top-right corner of the Postman window where it says{' '}
                      <strong>No Environment</strong>. Click that dropdown and select{' '}
                      <strong>Restful-Booker Env</strong>. (If you skip this,{' '}
                      <code className="font-mono font-semibold">{'{{base_url}}'}</code> will appear in
                      red and fail!)
                    </div>
                  </div>
                </div>
              </section>

              {/* ================= PART 3 ================= */}
              <section id="part-3" className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-10">
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiBeaker className="w-6 h-6 text-white" />
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                    Part 3: Building the End-to-End CRUD Test Suite
                  </h2>
                </div>

                {/* Step 4 */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">Step 4: Create a Collection</h3>
                  <p className="text-neutral-800 leading-relaxed">
                    A Collection is a folder that groups all your API test cases together.
                  </p>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Click <strong>Collections</strong> on the left sidebar.
                    </li>
                    <li>
                      Click the <code className="font-mono font-bold">+</code> icon (Create new
                      collection).
                    </li>
                    <li>
                      Name it:{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold text-black">
                        Restful-Booker API Tests
                      </code>
                    </li>
                  </ol>
                </div>

                {/* Test Case 01 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      POST
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 01: Generate Auth Token (POST)
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700">
                    <strong className="text-black">Goal:</strong> Log in as an admin and automatically save the
                    authentication token for future requests.
                  </p>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Hover over <strong>Restful-Booker API Tests</strong>, click the three dots{' '}
                      <code className="font-mono">...</code> &rarr; <strong>Add request</strong>.
                    </li>
                    <li>
                      Rename New Request to:{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        01 - Create Auth Token
                      </code>
                    </li>
                    <li>
                      Change the HTTP Method dropdown from <code className="font-mono">GET</code> to{' '}
                      <code className="font-mono font-bold">POST</code>.
                    </li>
                    <li>
                      In the URL bar, type:{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        {'{{base_url}}/auth'}
                      </code>
                    </li>
                    <li>
                      Click the <strong>Headers</strong> tab (below the URL bar) and verify{' '}
                      <code className="font-mono text-xs">Content-Type</code> is{' '}
                      <code className="font-mono text-xs">application/json</code> (if not, add Key:{' '}
                      <code className="font-mono text-xs">Content-Type</code>, Value:{' '}
                      <code className="font-mono text-xs">application/json</code>).
                    </li>
                    <li>
                      Click the <strong>Body</strong> tab &rarr; select the <strong>raw</strong>{' '}
                      radio button &rarr; change the dropdown on the right from Text to{' '}
                      <strong>JSON</strong>.
                    </li>
                    <li>Paste this exact JSON into the Body editor:</li>
                  </ol>
                  <CodeBlock
                    language="json"
                    label="JSON Body"
                    code={`{
    "username": "admin",
    "password": "password123"
}`}
                  />
                  <ol start={8} className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Click the <strong>Scripts</strong> tab (or Tests tab in older Postman
                      versions) &rarr; make sure <strong>Post-response</strong> is selected, and
                      paste this JavaScript code:
                    </li>
                  </ol>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`// Check 1: Verify status code is 200 OK
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

// Check 2: Verify response time is under 3000ms
pm.test("Response time is acceptable (< 3000ms)", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

// Check 3: Verify token exists and save it to Environment
pm.test("Auth token generated and saved", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("token");
    pm.expect(jsonData.token).to.be.a("string").and.not.be.empty;
    pm.environment.set("token", jsonData.token);
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> (<code className="font-mono text-xs">Ctrl + S</code>),
                    then click the blue <strong>Send</strong> button.
                  </p>
                  <div className="rounded-xl bg-white border border-black p-4 flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-900">
                      <strong>Verify Success:</strong> Look at the bottom response pane: Status says{' '}
                      <code className="font-mono font-bold">200 OK</code>. Click the{' '}
                      <strong>Test Results</strong> tab at the bottom—you should see{' '}
                      <strong>3/3 green PASS badges</strong>!
                    </div>
                  </div>
                </div>

                {/* Test Case 02 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      POST
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 02: Create a New Hotel Booking (POST)
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700">
                    <strong className="text-black">Goal:</strong> Create a booking and dynamically capture its generated{' '}
                    <code className="font-mono">bookingid</code>.
                  </p>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Right-click <strong>Restful-Booker API Tests</strong> &rarr;{' '}
                      <strong>Add request</strong> &rarr; name it{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        02 - Create Booking
                      </code>
                      .
                    </li>
                    <li>
                      Set Method to <code className="font-mono font-bold">POST</code>, URL to:{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        {'{{base_url}}/booking'}
                      </code>
                    </li>
                    <li>
                      Go to <strong>Headers</strong> tab and add:
                      <ul className="mt-1 list-disc pl-5 text-sm text-neutral-700">
                        <li>
                          Key: <code className="font-mono text-black">Content-Type</code> | Value:{' '}
                          <code className="font-mono text-black">application/json</code>
                        </li>
                        <li>
                          Key: <code className="font-mono text-black">Accept</code> | Value:{' '}
                          <code className="font-mono text-black">application/json</code>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Go to <strong>Body &rarr; raw &rarr; JSON</strong>, and paste:
                    </li>
                  </ol>
                  <CodeBlock
                    language="json"
                    label="JSON Body"
                    code={`{
    "firstname": "Kasun",
    "lastname": "Perera",
    "totalprice": 150,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-12-01",
        "checkout": "2026-12-05"
    },
    "additionalneeds": "Breakfast"
}`}
                  />
                  <ol start={5} className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Go to <strong>Scripts &rarr; Post-response</strong> and paste:
                    </li>
                  </ol>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Booking created with accurate guest details", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("bookingid");
    pm.expect(jsonData.booking.firstname).to.eql("Kasun");
    pm.expect(jsonData.booking.lastname).to.eql("Perera");
    pm.expect(jsonData.booking.totalprice).to.eql(150);

    // Save bookingid for the next requests
    pm.environment.set("booking_id", jsonData.bookingid);
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> (<code className="font-mono text-xs">Ctrl + S</code>)
                    and click <strong>Send</strong>. Check that Test Results shows{' '}
                    <strong>2/2 PASS</strong>.
                  </p>
                </div>

                {/* Test Case 03 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      GET
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 03: Retrieve the Created Booking (GET)
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700">
                    <strong className="text-black">Goal:</strong> Verify that the data we just created is actually stored
                    in the database.
                  </p>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Add a new request to the collection named{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        03 - Get Booking by ID
                      </code>
                      .
                    </li>
                    <li>
                      Keep Method as <code className="font-mono font-bold">GET</code>, set URL to:{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        {'{{base_url}}/booking/{{booking_id}}'}
                      </code>
                    </li>
                    <li>
                      Go to <strong>Headers</strong> tab and add: Key:{' '}
                      <code className="font-mono text-black">Accept</code> | Value:{' '}
                      <code className="font-mono text-black">application/json</code>
                    </li>
                    <li>
                      Go to <strong>Scripts &rarr; Post-response</strong> and paste:
                    </li>
                  </ol>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Fetched booking matches created record", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.firstname).to.eql("Kasun");
    pm.expect(jsonData.lastname).to.eql("Perera");
    pm.expect(jsonData.depositpaid).to.be.true;
    pm.expect(jsonData.additionalneeds).to.eql("Breakfast");
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> and click <strong>Send</strong>. Verify{' '}
                    <strong>2/2 PASS</strong>.
                  </p>
                </div>

                {/* Test Case 04 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      PUT
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 04: Update the Booking (PUT)
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700">
                    <strong className="text-black">Goal:</strong> Update an existing booking using the token saved in Test
                    Case 01.
                  </p>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Add a new request named{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        04 - Update Booking
                      </code>
                      .
                    </li>
                    <li>
                      Set Method to <code className="font-mono font-bold">PUT</code>, URL to:{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        {'{{base_url}}/booking/{{booking_id}}'}
                      </code>
                    </li>
                    <li>
                      Go to <strong>Headers</strong> tab and add these 3 headers:
                      <ul className="mt-1 list-disc pl-5 text-sm text-neutral-700">
                        <li>
                          Key: <code className="font-mono text-black">Content-Type</code> | Value:{' '}
                          <code className="font-mono text-black">application/json</code>
                        </li>
                        <li>
                          Key: <code className="font-mono text-black">Accept</code> | Value:{' '}
                          <code className="font-mono text-black">application/json</code>
                        </li>
                        <li>
                          Key: <code className="font-mono text-black">Cookie</code> | Value:{' '}
                          <code className="font-mono text-black">{'token={{token}}'}</code>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Go to <strong>Body &rarr; raw &rarr; JSON</strong>, and paste (notice we
                      changed <code className="font-mono text-xs">totalprice</code> to{' '}
                      <code className="font-mono text-xs">250</code> and{' '}
                      <code className="font-mono text-xs">additionalneeds</code> to{' '}
                      <code className="font-mono text-xs">Airport Pickup</code>):
                    </li>
                  </ol>
                  <CodeBlock
                    language="json"
                    label="JSON Body"
                    code={`{
    "firstname": "Kasun",
    "lastname": "Perera",
    "totalprice": 250,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2026-12-01",
        "checkout": "2026-12-05"
    },
    "additionalneeds": "Airport Pickup"
}`}
                  />
                  <ol start={5} className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Go to <strong>Scripts &rarr; Post-response</strong> and paste:
                    </li>
                  </ol>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Booking price and additional needs updated", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.totalprice).to.eql(250);
    pm.expect(jsonData.additionalneeds).to.eql("Airport Pickup");
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> and click <strong>Send</strong>. Verify{' '}
                    <strong>2/2 PASS</strong>.
                  </p>
                </div>

                {/* Test Case 05 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      DELETE
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 05: Delete the Booking (DELETE)
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700">
                    <strong className="text-black">Goal:</strong> Clean up test data and verify deletion works with a valid
                    auth token.
                  </p>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Add a new request named{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        05 - Delete Booking
                      </code>
                      .
                    </li>
                    <li>
                      Set Method to <code className="font-mono font-bold">DELETE</code>, URL to:{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        {'{{base_url}}/booking/{{booking_id}}'}
                      </code>
                    </li>
                    <li>
                      Go to <strong>Headers</strong> tab and add:
                      <ul className="mt-1 list-disc pl-5 text-sm text-neutral-700">
                        <li>
                          Key: <code className="font-mono text-black">Content-Type</code> | Value:{' '}
                          <code className="font-mono text-black">application/json</code>
                        </li>
                        <li>
                          Key: <code className="font-mono text-black">Cookie</code> | Value:{' '}
                          <code className="font-mono text-black">{'token={{token}}'}</code>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Go to <strong>Scripts &rarr; Post-response</strong> and paste:
                    </li>
                  </ol>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`// Note: Restful-Booker returns 201 Created upon successful deletion
pm.test("Status code is 201 (Deleted successfully)", function () {
    pm.response.to.have.status(201);
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> and click <strong>Send</strong>. Verify{' '}
                    <strong>1/1 PASS</strong>.
                  </p>
                </div>
              </section>

              {/* ================= PART 4 ================= */}
              <section id="part-4" className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiShieldCheck className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 4: Adding Negative &amp; Security Test Cases
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Real QA engineers don&apos;t just test the &ldquo;happy path&rdquo;—they try
                      to break the API! Add these 3 negative tests to your collection.
                    </p>
                  </div>
                </div>

                {/* Test Case 06 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      POST
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 06: Login with Wrong Password (POST)
                    </h3>
                  </div>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Add a new request named{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        06 - Negative: Invalid Login
                      </code>
                      .
                    </li>
                    <li>
                      Method: <code className="font-mono font-bold">POST</code> | URL:{' '}
                      <code className="font-mono font-semibold">{'{{base_url}}/auth'}</code>
                    </li>
                    <li>Body &rarr; raw &rarr; JSON:</li>
                  </ol>
                  <CodeBlock
                    language="json"
                    label="JSON Body"
                    code={`{
    "username": "admin",
    "password": "wrong_password_123"
}`}
                  />
                  <p className="text-sm font-semibold text-black">Scripts &rarr; Post-response:</p>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("API rejects invalid credentials with Bad credentials message", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.not.have.property("token");
    pm.expect(jsonData.reason).to.eql("Bad credentials");
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> and <strong>Send</strong>. Verify{' '}
                    <strong>2/2 PASS</strong>.
                  </p>
                </div>

                {/* Test Case 07 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      PUT
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 07: Unauthorized Update Without Token (PUT)
                    </h3>
                  </div>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Add a new request named{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        07 - Negative: Update Without Auth Token
                      </code>
                      .
                    </li>
                    <li>
                      Method: <code className="font-mono font-bold">PUT</code> | URL:{' '}
                      <code className="font-mono font-semibold">{'{{base_url}}/booking/1'}</code>
                    </li>
                    <li>
                      <strong>Headers:</strong> Add{' '}
                      <code className="font-mono text-xs">Content-Type: application/json</code> (Do
                      NOT add the Cookie header!).
                    </li>
                    <li>Body &rarr; raw &rarr; JSON:</li>
                  </ol>
                  <CodeBlock
                    language="json"
                    label="JSON Body"
                    code={`{
    "firstname": "Hacker",
    "lastname": "Test",
    "totalprice": 1,
    "depositpaid": false,
    "bookingdates": {
        "checkin": "2026-12-01",
        "checkout": "2026-12-02"
    }
}`}
                  />
                  <p className="text-sm font-semibold text-black">Scripts &rarr; Post-response:</p>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`pm.test("Unauthorized update is blocked with 403 Forbidden", function () {
    pm.response.to.have.status(403);
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> and <strong>Send</strong>. Verify{' '}
                    <strong>1/1 PASS</strong>.
                  </p>
                </div>

                {/* Test Case 08 */}
                <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-black text-white font-mono text-xs font-bold">
                      GET
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      Test Case 08: Fetch Non-Existent Booking (GET)
                    </h3>
                  </div>
                  <ol className="space-y-2 text-sm sm:text-base text-neutral-800 leading-relaxed list-decimal pl-5">
                    <li>
                      Add a new request named{' '}
                      <code className="px-2 py-0.5 rounded bg-white border border-neutral-300 font-mono text-xs font-semibold">
                        08 - Negative: Get Non-Existent Booking
                      </code>
                      .
                    </li>
                    <li>
                      Method: <code className="font-mono font-bold">GET</code> | URL:{' '}
                      <code className="font-mono font-semibold">{'{{base_url}}/booking/999999999'}</code>
                    </li>
                  </ol>
                  <p className="text-sm font-semibold text-black">Scripts &rarr; Post-response:</p>
                  <CodeBlock
                    language="javascript"
                    label="Post-response Script (JavaScript)"
                    code={`pm.test("Non-existent ID returns 404 Not Found", function () {
    pm.response.to.have.status(404);
});`}
                  />
                  <p className="text-sm sm:text-base text-neutral-800">
                    Click <strong>Save</strong> and <strong>Send</strong>. Verify{' '}
                    <strong>1/1 PASS</strong>.
                  </p>
                </div>
              </section>

              {/* ================= PART 5 ================= */}
              <section id="part-5" className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiPlay className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 5: Running Automated Collection Execution
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      Now let&apos;s run all 8 API tests automatically in one click!
                    </p>
                  </div>
                </div>

                <ol className="space-y-3 text-neutral-800 leading-relaxed list-decimal pl-5">
                  <li>
                    Make sure every request (01 through 08) has been saved (
                    <code className="font-mono text-xs">Ctrl + S</code>—no orange dots next to the
                    tab names).
                  </li>
                  <li>
                    Hover over your collection <strong>Restful-Booker API Tests</strong> on the left
                    sidebar, click <code className="font-mono">...</code> &rarr; select{' '}
                    <strong>Run collection</strong>.
                  </li>
                  <li>
                    Check the order on the left: ensure requests run sequentially from{' '}
                    <strong>01</strong> down to <strong>08</strong>.
                  </li>
                  <li>
                    Click the blue <strong>Run Restful-Booker API Tests</strong> button.
                  </li>
                  <li>
                    Watch Postman execute all 8 requests and validate all 14 assertions in seconds!
                  </li>
                  <li>
                    <strong>Take a Screenshot:</strong> Capture a clean screenshot of this results
                    page showing <code className="font-mono font-semibold">Passed: 14</code>,{' '}
                    <code className="font-mono font-semibold">Failed: 0</code>, and all green{' '}
                    <code className="font-mono font-semibold">PASS</code> labels. Save it as{' '}
                    <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                      postman_runner_results.png
                    </code>
                    .
                  </li>
                </ol>
              </section>

              {/* ================= PART 6 ================= */}
              <section id="part-6" className="scroll-mt-28 rounded-3xl bg-white border border-neutral-300 p-6 sm:p-10 space-y-8">
                <div className="flex items-center gap-4 pb-6 border-b border-neutral-200">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiGlobeAlt className="w-6 h-6 text-white" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                      Part 6: Publishing Your Project to GitHub (Portfolio Ready)
                    </h2>
                    <p className="text-sm text-neutral-600 mt-1">
                      To put this on your CV and LinkedIn, export your Postman files and upload them
                      to GitHub.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-black">
                    Step 1: Export Your Postman Collection &amp; Environment
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-5 space-y-2">
                      <h4 className="font-bold text-black">Export Collection</h4>
                      <ol className="space-y-1.5 text-sm text-neutral-800 list-decimal pl-5">
                        <li>
                          Click <code className="font-mono">...</code> next to{' '}
                          <strong>Restful-Booker API Tests</strong> &rarr; <strong>Export</strong>.
                        </li>
                        <li>
                          Select <strong>Collection v2.1 (recommended)</strong> &rarr; click{' '}
                          <strong>Export</strong>.
                        </li>
                        <li>
                          Save the file as{' '}
                          <code className="font-mono text-xs font-semibold text-black">
                            Restful_Booker_API_Collection.json
                          </code>
                          .
                        </li>
                      </ol>
                    </div>
                    <div className="rounded-2xl bg-neutral-50 border border-neutral-300 p-5 space-y-2">
                      <h4 className="font-bold text-black">Export Environment</h4>
                      <ol className="space-y-1.5 text-sm text-neutral-800 list-decimal pl-5">
                        <li>
                          Click <strong>Environments</strong> on the left sidebar &rarr; click{' '}
                          <code className="font-mono">...</code> next to{' '}
                          <strong>Restful-Booker Env</strong> &rarr; <strong>Export</strong>.
                        </li>
                        <li>
                          Save the file as{' '}
                          <code className="font-mono text-xs font-semibold text-black">
                            Restful_Booker_Env.json
                          </code>
                          .
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 2: Create a GitHub Repository
                  </h3>
                  <ol className="space-y-2 text-neutral-800 leading-relaxed list-decimal pl-5">
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
                      and click <strong>New</strong> (green button) to create a repository.
                    </li>
                    <li>
                      Repository Name:{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs font-semibold">
                        restful-booker-api-testing
                      </code>
                    </li>
                    <li>
                      Description:{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                        End-to-end automated API test suite for Restful-Booker built with Postman &amp;
                        JavaScript assertions.
                      </code>
                    </li>
                    <li>
                      Select <strong>Public</strong>, check <strong>Add a README file</strong>, and
                      click <strong>Create repository</strong>.
                    </li>
                    <li>
                      Click <strong>Add file &rarr; Upload files</strong>, and upload these 3 files:
                      <ul className="mt-1.5 list-disc pl-5 font-mono text-xs text-black space-y-1">
                        <li>Restful_Booker_API_Collection.json</li>
                        <li>Restful_Booker_Env.json</li>
                        <li>postman_runner_results.png</li>
                      </ul>
                    </li>
                    <li>
                      Click <strong>Commit changes</strong>.
                    </li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-black">
                    Step 3: Polish Your README.md
                  </h3>
                  <p className="text-neutral-800 leading-relaxed">
                    Click the pencil icon (Edit) on your GitHub{' '}
                    <code className="font-mono text-xs">README.md</code> and paste a summary
                    explaining:
                  </p>
                  <ul className="space-y-2 text-neutral-800 leading-relaxed list-disc pl-5">
                    <li>
                      <strong>Project Overview:</strong> What API was tested (Restful-Booker) and
                      the tools used (Postman, JavaScript Chai Assertions).
                    </li>
                    <li>
                      <strong>Test Coverage Table:</strong> List the 8 test cases (POST /auth, POST
                      /booking, GET /booking/:id, PUT /booking/:id, DELETE /booking/:id, plus the 3
                      negative/security tests).
                    </li>
                    <li>
                      <strong>Execution Proof:</strong> Embed your screenshot using{' '}
                      <code className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-300 font-mono text-xs">
                        ![Test Results](postman_runner_results.png)
                      </code>
                      .
                    </li>
                    <li>
                      <strong>How to Run:</strong> Explain that anyone can download the two{' '}
                      <code className="font-mono text-xs">.json</code> files, import them into
                      Postman, select <strong>Restful-Booker Env</strong>, and click{' '}
                      <strong>Run Collection</strong>.
                    </li>
                  </ul>
                </div>
              </section>

              {/* ================= INTERVIEW PITCH ================= */}
              <section id="interview" className="scroll-mt-28 rounded-3xl bg-neutral-50 border-2 border-black p-6 sm:p-10 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center shrink-0">
                    <HiChatBubbleBottomCenterText className="w-6 h-6 text-white" />
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black">
                    How to Talk About This Project in Your QA Interview
                  </h2>
                </div>

                <p className="text-neutral-700">
                  When a Sri Lankan Tech Lead or QA Manager asks{' '}
                  <em>&ldquo;Tell me about your API testing experience&rdquo;</em>, say:
                </p>

                <blockquote className="rounded-2xl bg-white border-l-4 border-black p-6 text-black leading-relaxed italic">
                  &ldquo;I built an automated end-to-end CRUD and negative API test suite for the
                  Restful-Booker service using Postman. I configured environment variables for
                  dynamic request chaining—automatically extracting the authentication token and
                  booking ID via JavaScript post-response scripts and passing them into subsequent
                  PUT and DELETE headers. I also validated HTTP status codes, response times, JSON
                  payload integrity, and security boundaries like 403 Forbidden and 404 Not Found
                  responses, and published the collection and runner results on GitHub.&rdquo;
                </blockquote>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
