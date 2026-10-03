const ENQUIRY_TYPES = {
  produce: "Produce supply",
  systems: "Growing system",
  pilot: "Pilot / site evaluation",
};

const cleanText = (value, limit) => String(value ?? "").trim().slice(0, limit);

function readBody(body) {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body);
  return body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  let body;
  try {
    body = readBody(req.body);
  } catch {
    return res.status(400).json({ error: "Please check the form and try again." });
  }

  // Quietly accept automated submissions without creating a lead.
  if (cleanText(body.website, 160)) return res.status(200).json({ ok: true });

  const name = cleanText(body.name, 160);
  const email = cleanText(body.email, 160);
  const organisation = cleanText(body.organisation, 160);
  const location = cleanText(body.location, 160);
  const message = cleanText(body.message, 1500);
  const enquiry = ENQUIRY_TYPES[body.enquiryType];

  if (!name || !message || !enquiry || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please complete the required fields with a valid email address." });
  }

  const token = process.env.BASEROW_TOKEN;
  const tableId = process.env.TABLE_ID;
  if (!token || !tableId) {
    console.error("Baserow contact form environment is not configured.");
    return res.status(500).json({ error: "The form is temporarily unavailable. Please email us directly." });
  }

  try {
    const baserowResponse = await fetch(
      `https://api.baserow.io/api/database/rows/table/${encodeURIComponent(tableId)}/?user_field_names=true`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Full Name": name,
          "What are you exploring?": enquiry,
          Email: email,
          Organisation: organisation,
          Location: location,
          "About your enquiry": message,
          "Lead Source": "Website",
          Status: "New",
          "Submission Date": new Date().toISOString().slice(0, 10),
          "Next Action Recommendation": "Review and respond to this website enquiry.",
        }),
      },
    );

    if (!baserowResponse.ok) {
      console.error("Baserow contact form request failed.", { status: baserowResponse.status });
      return res.status(502).json({ error: "We could not send your enquiry. Please try again or email us directly." });
    }

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error("Baserow contact form request failed.", { message: error instanceof Error ? error.message : "Unknown error" });
    return res.status(502).json({ error: "We could not send your enquiry. Please try again or email us directly." });
  }
}
