import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();

  const submitBack = () => {
    navigate("/");
  };

  return (
    <div className="benefits">
      <h1>Only Applying</h1>
      <h2 style={{ color: "red" }}>
        STOP! Read This Notice Before Continuing.
      </h2>

      <p>
        This is an anonymous means for guests to apply for meal benefits or to
        complete a household information report. Continuing will{" "}
        <b>
          <u>not</u>
        </b>{" "}
        create an account for you to deposit money on children's accounts nor
        allow you to review meal purchases. <b>Do not continue</b> if you are
        trying to make deposits. Go to <b>My Account</b> to create an account to
        do that.
      </p>

      <p>
        <b>Continue</b> if you want to apply for meal benefits but have not
        already done so for this school year.
      </p>
      <p>
        <b>Continue</b> if you want to complete a household information report
        but haven't already done so for this school year.
      </p>

      <p>
        If you have already completed an application or household information
        report,
        <b>do not continue unless your school has asked you to re-apply.</b>
      </p>

      <p>
        To protect your privacy, the outcome of completing an application will
        come from your school by mail or email. Benefits are not displayed on
        this site. By federal law, all applications submitted through this site
        must be reviewed by your school before a determination of benefits can
        be made.
      </p>
      <div className="buttons">
        <button
          onClick={submitBack}
          type="button"
          className="btn btn-outline-secondary m-3"
        >
          Back
        </button>
        <button type="button" className="btn btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
};

export default Benefits;
