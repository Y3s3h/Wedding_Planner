// prisma/seed-site-content.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const content = [
  {
    slug: 'about-us',
    title: 'About Us',
    content: `Wedding Planner is a platform that connects couples planning their wedding with trusted vendors — photographers, caterers, decorators, DJs, makeup artists, venues, and more.

Our goal is to make wedding planning simple: couples can search and compare vendors, view packages and pricing, book directly through the platform, and manage their entire wedding — budget, guest list, and timeline — in one place.

Vendors get a dashboard to showcase their portfolio, manage packages, respond to leads, and handle bookings without the back-and-forth of phone calls and messages.`,
  },
  {
    slug: 'faq',
    title: 'Frequently Asked Questions',
    content: `Q: How do I book a vendor?
A: Browse vendors by category from your dashboard, open a package you like, and tap "Book Now" to send a booking request. The vendor will accept, reject, or confirm it, and you'll see the status update in "My Bookings."

Q: How do I become a vendor on the platform?
A: From your customer dashboard, tap "Become a Vendor" and complete the vendor registration form with your business details. Once submitted, your account will be set up with vendor access.

Q: Can I cancel a booking?
A: Yes, you can cancel a booking from the Booking Detail screen as long as it hasn't been marked Confirmed. Confirmed bookings may have different cancellation terms depending on the vendor.

Q: How do I track my wedding budget?
A: Use the Budget section in your dashboard to set a total budget and log expenses by category. It automatically shows your remaining budget.

Q: How do I contact a vendor before booking?
A: You can send an inquiry (lead) to a vendor from their profile page without committing to a full booking.

Q: What happens after a vendor accepts my booking?
A: The booking status updates to Accepted, and later Confirmed once finalized. You'll be notified of status changes.`,
  },
  {
    slug: 'pricing',
    title: 'Pricing',
    content: `Wedding Planner is free for couples to browse vendors, compare packages, and manage their wedding planning tools (budget, guest list, timeline).

Vendors can create a profile and list packages on the platform. [Add real details here once your monetization model — subscription, commission per booking, or listing fee — is finalized with your team.]`,
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    content: `Last updated: [add date]

Wedding Planner ("we", "our", "the platform") respects your privacy. This policy explains what information we collect and how we use it.

Information We Collect
- Account details: name, email, phone number, password (stored securely, hashed)
- Booking and planning data: bookings, packages viewed, budget entries, guest lists, chat messages with our assistant
- Vendor data (for vendor accounts): business name, portfolio, packages, leads

How We Use Your Information
- To provide core features: vendor search, bookings, budget tracking, and the chat assistant
- To communicate booking updates and notifications
- To improve our platform's features and reliability

Third-Party Services
- We use Groq to process chatbot messages. Messages you send to the chatbot may be processed by this third-party AI service.
- We do not sell your personal data to advertisers or other third parties.

Data Storage and Security
- Your data is stored in a secured PostgreSQL database. Passwords are hashed and never stored in plain text.

Your Rights
- You can request access to, correction of, or deletion of your personal data by contacting us at [support email].
- You can delete your account at any time from your profile settings.

Changes to This Policy
- We may update this policy from time to time. Continued use of the platform after changes means you accept the updated policy.

Contact
For any privacy-related questions, contact us at [support email].`,
  },
  {
    slug: 'terms',
    title: 'Terms & Conditions',
    content: `Last updated: [add date]

By using Wedding Planner, you agree to the following terms.

Accounts
- You must provide accurate information when registering.
- You are responsible for keeping your login credentials secure.
- Accounts found to be fraudulent or abusive may be suspended or terminated.

For Couples
- Bookings made through the platform are requests sent to vendors; a booking is not confirmed until the vendor accepts and it is marked Confirmed.
- Cancellation terms may vary by vendor and booking status.
- Payment terms (advance/remaining payment) will be clearly shown at the time of booking.

For Vendors
- You are responsible for the accuracy of your business profile, packages, and pricing listed on the platform.
- You agree to respond to leads and bookings in a timely and professional manner.
- The platform may charge fees or commissions as separately communicated to you. [Finalize once your monetization model is set.]

Prohibited Conduct
- Users may not post false, misleading, or fraudulent information.
- Users may not use the platform for any unlawful purpose or to harass other users or vendors.

Limitation of Liability
- Wedding Planner facilitates connections between couples and vendors but is not directly responsible for the quality of services delivered by vendors, or for disputes between couples and vendors.

Termination
- We reserve the right to suspend or terminate accounts that violate these terms.

Changes to These Terms
- We may update these terms from time to time. Continued use of the platform after changes means you accept the updated terms.

Contact
For any questions about these terms, contact us at [support email].`,
  },
];

async function main() {
  for (const item of content) {
    await prisma.siteContent.upsert({
      where: { slug: item.slug },
      update: { title: item.title, content: item.content },
      create: item,
    });
  }
  console.log(`Site content seeded: ${content.map((c) => c.slug).join(', ')}`);
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());