import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Name */}
          <div className="col-span-full mb-8">
            <span className="text-2xl font-bold text-[#FFD700]">Stable Stride Capital</span>
          </div>

          

          {/* Office Locations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#FFD700]">New York</h3>
            <address className="not-italic text-[#F5F5F5]">
              Stable Stride Capital LLC
              <br />
              350 Fifth Avenue
              <br />
              New York, NY 10118
              <br />
              212 555 0123
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#FFD700]">London</h3>
            <address className="not-italic text-[#F5F5F5]">
              Stable Stride Capital UK
              <br />
              30 St Mary Axe
              <br />
              London, EC3A 8BF
              <br />
              +44 20 7123 4567
            </address>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-[#FFD700]">Singapore</h3>
            <address className="not-italic text-[#F5F5F5]">
              Stable Stride Capital Asia
              <br />
              8 Marina View
              <br />
              Singapore 018960
              <br />
              +65 6789 0123
            </address>
          </div>

          {/* Legal */}
          <div>
            <Link href="/support" className="block hover:text-primary-light mb-4">
              Support
            </Link>
          </div>
        </div>

        {/* Copyright and Disclaimer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <p className="mb-4">© 2025 Stable Stride Capital LLC. All Rights Reserved.</p>
          <p className="mb-4">
            The materials on this website are for illustration and discussion purposes only and do not constitute an
            offering. An offering may be made only by delivery of a confidential offering memorandum to appropriate
            investors. PAST PERFORMANCE IS NO GUARANTEE OF FUTURE RESULTS.
          </p>
        </div>
      </div>
    </footer>
  )
}

