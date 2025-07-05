import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-white text-gray-800 divider-section"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1200"
      data-aos-easing="ease-in-out"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bio Text - Now on the left */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
            Meet Dr. Serena Blake
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>

          {/* Practice Info Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left text-sm text-gray-700">
            <div className="bg-gray-50 p-5 rounded shadow">
              <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
              <p>
                <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM
              </p>
              <p>
                <strong>Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded shadow">
              <h4 className="font-semibold text-gray-900 mb-1">Experience</h4>
              <p>8 years of clinical practice</p>
              <p>500+ client sessions</p>
            </div>

            <div className="bg-gray-50 p-5 rounded shadow">
              <h4 className="font-semibold text-gray-900 mb-1">Session Fees</h4>
              <p>$200 / individual session</p>
              <p>$240 / couples session</p>
            </div>
          </div>
        </div>

        {/* Headshot - Now on the right */}
        <div className="flex justify-center">
          <Image
            src="/assets/dr-serena.jpg"
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full max-w-md sm:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
