import React from 'react'

export default function template3() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow w-100" style={{ maxWidth: '900px' }}>
        <div className="card-body p-4">

          <h5 className="fw-semibold mb-3">
            Registration
          </h5>
          <p className="text-muted fw-semibold mb-2">Personal Details</p>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label small">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Date of Birth</label>
              <input type="text" className="form-control" placeholder="Enter birth date" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Mobile number</label>
              <input type="text" className="form-control" placeholder="Enter mobile number" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Gender</label>
              <input type="text" className="form-control" placeholder="Enter your gender" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Occupation</label>
              <input type="text" className="form-control" placeholder="Enter occupation" />
            </div>
          </div>

          {/* Identity Details */}
          <p className="text-muted fw-semibold mt-4 mb-2">Identity Details</p>

          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label small">ID Type</label>
              <input type="text" className="form-control" placeholder="Enter ID type" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">ID Number</label>
              <input type="text" className="form-control" placeholder="Enter ID number" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Issue Authority</label>
              <input type="text" className="form-control" placeholder="Enter issue department" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Issue Date</label>
              <input type="text" className="form-control" placeholder="Enter ID issue date" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Issue State</label>
              <input type="text" className="form-control" placeholder="Enter ID issue state" />
            </div>

            <div className="col-md-4">
              <label className="form-label small">Expiry Date</label>
              <input type="text" className="form-control" placeholder="Enter ID expiry date" />
            </div>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button className="btn btn-primary px-4">
              Next →
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
