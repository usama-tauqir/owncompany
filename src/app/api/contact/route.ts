import { NextResponse } from "next/server";

interface ContactRequest {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  companyName?: unknown;
  region?: unknown;
  services?: unknown;
  projectDetails?: unknown;
  lookingForJob?: unknown;
}

function isNonEmptyString(
  value: unknown,
): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0
  );
}

export async function POST(
  request: Request,
) {
  try {
    const body =
      (await request.json()) as ContactRequest;

    const servicesAreValid =
      Array.isArray(body.services) &&
      body.services.length > 0;

    const isValid =
      isNonEmptyString(body.fullName) &&
      isNonEmptyString(body.email) &&
      isNonEmptyString(body.phone) &&
      isNonEmptyString(body.companyName) &&
      isNonEmptyString(body.region) &&
      servicesAreValid &&
      isNonEmptyString(body.projectDetails) &&
      isNonEmptyString(body.lookingForJob);

    if (!isValid) {
      return NextResponse.json(
        {
          message:
            "Please complete all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    /*
     * Temporary development output.
     * Replace this with Resend, HubSpot,
     * Nodemailer, a CRM, or your database.
     */
    console.log("Contact submission:", body);

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Unable to process the submission.",
      },
      {
        status: 500,
      },
    );
  }
}