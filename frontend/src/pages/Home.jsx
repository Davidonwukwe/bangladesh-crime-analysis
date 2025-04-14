import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5 text-center">
      <Container className="mt-5">
        <h1 className="display-4 fw-bold text-dark">
          Analyzing Crime Trends in <span className="text-primary">Bangladesh</span>
        </h1>

        <p className="lead text-muted mt-3 mb-4 mx-auto" style={{ maxWidth: "700px" }}>
          Explore comprehensive crime statistics, understand crime severity
          patterns, and gain insights through interactive dashboards. Our
          platform helps researchers, policymakers, and citizens make
          data-driven decisions for safer communities.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/full-dashboard")}
          >
            Explore Dashboard
          </Button>

          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => navigate("/severity-check")}
          >
            Check Severity
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Home;
